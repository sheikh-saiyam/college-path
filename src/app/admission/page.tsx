import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ClipboardList, FileSignature, School, UserCheck } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { colleges } from "@/lib/colleges";
import Image from "next/image";

export default async function AdmissionPage() {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  async function addAdmission(formData: FormData) {
    "use server";

    const current = await currentUser();
    if (!current) throw new Error("Unauthorized");

    const admissionData = {
      collegeId: Number(formData.get("collegeId")),
      collegeName: formData.get("collegeName"),
      collegeImage: formData.get("collegeImage"),
      name: formData.get("name"),
      subject: formData.get("subject"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      dob: formData.get("dob"),
      image: formData.get("image"),
      userId: current.id,
      createdAt: new Date(),
    };

    const admissionsCollection = await dbConnect(collections.admissions);
    await admissionsCollection.insertOne(admissionData);

    const profileCollection = await dbConnect("profiles");
    await profileCollection.updateOne(
      { userId: current.id },
      {
        $setOnInsert: {
          name: admissionData.name,
          email: admissionData.email,
          phone: admissionData.phone,
          address: admissionData.address,
          university: admissionData.subject,
          dob: admissionData.dob,
          image: admissionData.image,
          createdAt: new Date(),
        },
        $set: { updatedAt: new Date() },
      },
      { upsert: true }
    );

    revalidatePath("/my-college");
    redirect("/my-college");
  }

  return (
    <div className="space-y-10 max-w-7xl px-6 py-12 mx-auto">
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-300 rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4">
          Admission Instructions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3 lg:border-r lg:pr-2 border-yellow-700">
            <School className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-800">Browse Colleges</h4>
              <p className="text-sm text-yellow-700">
                View all listed colleges and their key details below.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 lg:border-r lg:pr-2 border-yellow-700">
            <ClipboardList className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-800">Select & Apply</h4>
              <p className="text-sm text-yellow-700">
                Click the{" "}
                <span className="font-medium text-yellow-900">“Apply Now”</span>{" "}
                button for the college.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 lg:border-r lg:pr-2 border-yellow-700">
            <FileSignature className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-800">Fill the Form</h4>
              <p className="text-sm text-yellow-700">
                Enter correct info including address, phone number, and DOB.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <UserCheck className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-800">Profile Info</h4>
              <p className="text-sm text-yellow-700">
                Submitted info will also be used for your{" "}
                <span className="font-semibold text-yellow-900">profile</span>.
                Make sure it’s accurate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges?.map((college) => (
          <Card key={college.id} className="shadow-md border rounded-xl">
            <CardContent className="p-4 space-y-4">
              <Image
                src={college.image}
                alt={college.name}
                width={400}
                height={200}
                className="rounded-xl object-cover w-full h-48"
              />
              <div>
                <h2 className="text-xl font-semibold">{college.name}</h2>
                <p className="text-sm text-muted-foreground">
                  Rating: {college.rating}
                </p>
                <p className="text-sm text-muted-foreground">
                  Admission: {college.admissionDates}
                </p>
              </div>

              <form action={addAdmission} className="space-y-4 mt-4">
                <input type="hidden" name="collegeId" value={college.id} />
                <input type="hidden" name="collegeName" value={college.name} />
                <input
                  type="hidden"
                  name="collegeImage"
                  value={college.image}
                />

                <div className="space-y-1">
                  <Label htmlFor="name">Candidate Name</Label>
                  <Input
                    name="name"
                    id="name"
                    defaultValue={user.fullName ?? ""}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="subject">Subject</Label>
                  <Input name="subject" id="subject" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email (readonly)</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    value={user.emailAddresses[0].emailAddress}
                    readOnly
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input name="phone" id="phone" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address">Address</Label>
                  <Input name="address" id="address" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input name="dob" id="dob" type="date" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="image">
                    Image URL (will be your profile photo)
                  </Label>
                  <Input
                    name="image"
                    id="image"
                    defaultValue={user.imageUrl}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Admission
                </Button>
              </form>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
