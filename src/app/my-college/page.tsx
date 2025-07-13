import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { collections, dbConnect } from "@/lib/dbConnect";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { EmptyState } from "./EmptyState";
import ReviewModal from "./ReviewModal";
import { Document } from "mongodb";

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
  dob: string;
  image: string;
  createdAt: number;
  updatedAt: string;
}

async function getAdmissionData(userId: string): Promise<AdmissionData[]> {
  const admissionCollection = await dbConnect(collections?.admissions);
  const result = await admissionCollection?.find({ userId }).toArray();

  // Convert raw MongoDB documents to AdmissionData[]
  const mapped = result.map((item: Document) => ({
    _id: item._id.toString(),
    userId: item.userId,
    collegeId: item.collegeId,
    collegeName: item.collegeName,
    collegeImage: item.collegeImage,
    name: item.name,
    subject: item.subject,
    email: item.email,
    phone: item.phone,
    address: item.address,
    dob: item.dob,
    image: item.image,
    createdAt:
      typeof item.createdAt === "object" && "getTime" in item.createdAt
        ? item.createdAt.getTime()
        : Number(item.createdAt),
    updatedAt: item.updatedAt,
  }));

  return mapped;
}

export default async function MyCollegePage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const userId = user?.id;
  const admissions = await getAdmissionData(userId);
  if (!admissions || admissions?.length === 0) return <EmptyState />;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {admissions?.map((admission) => (
          <Card
            key={admission?._id}
            className="mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out py-0"
          >
            {/* New Header Section */}
            <div className="p-4 bg-gradient-to-r from-bg-violet to-bg-pink text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20 border-4 border-white shadow-md">
                  <AvatarImage src={admission?.image} alt={admission?.name} />
                  <AvatarFallback>
                    {admission?.name?.split(" ")?.[0]?.charAt(0)}
                    {admission?.name?.split(" ")?.[1]?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{admission?.name}</h2>
                  <p className="font-medium">{admission?.subject}</p>
                </div>
              </div>
            </div>
            <CardContent className="px-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                {/* College Info Card */}
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <Avatar className="w-full h-full rounded-xl">
                    <AvatarImage
                      src={admission.collegeImage || "/placeholder.svg"}
                      alt={admission.collegeName}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <AvatarFallback className="text-white bg-gray-400 w-full h-full flex items-center justify-center">
                      {admission.collegeName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 rounded-xl" />

                  <div className="absolute bottom-2 left-4 right-4 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {admission.collegeName}
                    </h3>
                  </div>
                </div>

                {/* Personal Details & Contact Info - Grouped */}
                <div className="space-y-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Personal & Contact Information
                  </h3>
                  <div className="space-y-4 text-gray-700 text-base">
                    <div className="flex items-center gap-2">
                      {/* Assuming you have Mail icon */}
                      <Mail className="text-indigo-500" size={20} />
                      <span className="font-semibold">Email:</span>
                      <a
                        href={`mailto:${admission?.email}`}
                        className="text-indigo-600 hover:underline"
                      >
                        {admission?.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Assuming you have Phone icon */}
                      <Phone className="text-indigo-500" size={20} />
                      <span className="font-semibold">Phone:</span>
                      <a
                        href={`tel:${admission?.phone}`}
                        className="text-indigo-600 hover:underline"
                      >
                        {admission?.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2 col-span-full">
                      {/* Assuming you have MapPin icon */}
                      <MapPin className="text-indigo-500 mt-1" size={20} />
                      <span className="font-semibold">Address:</span>
                      <span>{admission?.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Assuming you have Calendar icon */}
                      <Calendar className="text-indigo-500" size={20} />
                      <span className="font-semibold">Date of Birth:</span>
                      <span>
                        {new Date(admission?.dob).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Assuming you have Calendar icon */}
                      <Calendar className="text-indigo-500" size={20} />
                      <span className="font-semibold">Admission Date:</span>
                      <span>
                        {new Date(admission?.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>{" "}
            <CardFooter className="pb-5 bg-gray-50 border-t border-gray-100 w-full flex justify-between">
              {/* Review Button Section */}
              <div></div>
              <div className="flex justify-end">
                <ReviewModal
                  admissionId={admission?._id}
                  userName={admission?.name}
                  userCollege={admission?.collegeName}
                  userAvatar={admission?.image}
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}
