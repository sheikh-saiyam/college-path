import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { collections, dbConnect } from "@/lib/dbConnect";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { EmptyState } from "./EmptyState";
import ReviewModal from "./ReviewModal";

interface AdmissionData {
  _id: string;
  userId: string;
  collegeId: number;
  collegeName: string;
  collegeImage: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  address: string;
  dob: string; // ISO string expected
  image: string;
  createdAt: number; // timestamp number
  university: string;
  updatedAt: string;
}

// ইউজারের একাধিক admission নিয়ে আসবে
async function getAdmissionData(userId: string): Promise<AdmissionData[]> {
  const admissionCollection = await dbConnect(collections.admissions);
  const result = await admissionCollection.find({ userId }).toArray();
  return result;
}

export default async function MyCollegePage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const userId = user.id;
  const admissions = await getAdmissionData(userId);

  if (!admissions || admissions.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My College</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {admissions.map((admission) => (
          <Card key={admission._id} className="mb-8">
            <CardHeader>
              <CardTitle>Admission Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left side: User Profile */}
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={admission.image}
                    alt={admission.name}
                    className="w-28 h-28 rounded-full object-cover shadow-md ring-4 ring-indigo-500"
                  />
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {admission.name}
                  </h2>
                  <p className="text-indigo-600 font-medium">
                    {admission.subject}
                  </p>
                </div>

                {/* Middle: College Info */}
                <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={admission.collegeImage}
                    alt={admission.collegeName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-indigo-50">
                    <h3 className="text-xl font-bold text-indigo-700">
                      {admission.collegeName}
                    </h3>
                    <p className="text-indigo-600 mt-1">
                      College ID: {admission.collegeId}
                    </p>
                  </div>
                </div>

                {/* Right side: Contact & Details */}
                <div className="space-y-4 text-gray-700 text-base">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {admission.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    {admission.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {admission.address}
                  </p>
                  <p>
                    <span className="font-semibold">Date of Birth:</span>{" "}
                    {new Date(admission.dob).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Admission Date:</span>{" "}
                    {new Date(admission.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <ReviewModal admissionId={admission._id} />
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
