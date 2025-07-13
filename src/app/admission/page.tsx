import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { colleges } from "@/lib/colleges";
import { collections, dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AdmissionPage() {
  async function addAdmission(formData: FormData) {
    "use server";
    const admissionData = {
      collegeId: Number(formData?.get("collegeId")),
      name: formData?.get("name"),
      subject: formData?.get("subject"),
      email: formData?.get("email"),
      phone: formData?.get("phone"),
      address: formData?.get("address"),
      dob: formData?.get("dob"),
      image: formData?.get("image"),
      createdAt: new Date(),
    };

    const admissionsCollection = await dbConnect(collections?.admissions);
    await admissionsCollection.insertOne(admissionData);
    revalidatePath("/my-college");
    redirect("/my-college");
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {colleges?.map((college) => (
        <Card key={college?.id} className="shadow-md border rounded-xl">
          <CardContent className="p-4 space-y-4">
            <Image
              src={college?.image}
              alt={college?.name}
              width={400}
              height={200}
              className="rounded-xl object-cover w-full h-48"
            />
            <div>
              <h2 className="text-xl font-semibold">{college?.name}</h2>
              <p className="text-sm text-muted-foreground">
                Rating: {college?.rating}
              </p>
              <p className="text-sm text-muted-foreground">
                Admission: {college?.admissionDates}
              </p>
              <p className="text-sm text-muted-foreground">
                Research: {college?.researchCount}
              </p>
            </div>
            <form action={addAdmission} className="space-y-4">
              <input type="hidden" name="collegeId" value={college?.id} />
              <div className="space-y-1">
                <Label htmlFor="name">Candidate Name</Label>
                <Input name="name" id="name" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="subject">Subject</Label>
                <Input name="subject" id="subject" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input name="email" id="email" type="email" required />
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
                <Label htmlFor="image">Image URL</Label>
                <Input name="image" id="image" required />
              </div>
              <Button type="submit" className="w-full">
                Apply Now
              </Button>
            </form>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
