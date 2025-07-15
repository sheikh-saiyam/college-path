import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  ClipboardList,
  FileSignature,
  School,
  UserCheck,
} from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { colleges } from "@/lib/colleges";
import AdmissionForm from "./AdmissionForm";
import { Metadata } from "next";

export interface College {
  id: number;
  name: string;
  admissionDates: string;
  image: string;
}

export interface ClerkUser {
  id: string;
  fullName: string | null;
  emailAddresses: {
    id: string;
    emailAddress: string;
  }[];
  imageUrl: string | null;
}

export const metadata: Metadata = {
  title: "College Path | Admission",
  description:
    "Secure your seat at your dream college through our streamlined admission process. Easily fill out the form and get started today.",
  keywords: [
    "college admission",
    "book college",
    "admission form",
    "College Path",
    "online college booking",
    "admission process",
  ],
};

export default async function AdmissionPage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const clerkUser: ClerkUser = {
    id: user.id,
    fullName: user.fullName,
    emailAddresses: user.emailAddresses.map((e) => ({
      id: e.id,
      emailAddress: e.emailAddress,
    })),
    imageUrl: user.imageUrl,
  };

  return (
    <div className="space-y-10 max-w-7xl px-6 py-12 mx-auto">
      {/* Admission Instructions */}
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-300 rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4">
          Admission Instructions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Instruction Items */}
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
                <span className="font-medium text-yellow-900">
                  “Get Admission”
                </span>{" "}
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

      {/* Colleges List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <Card
            key={college.id}
            className="pt-3 pb-5 shadow-md border rounded-xl"
          >
            <CardContent className="px-4 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-text-purple mb-0.5">
                  {college.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 text-[#68b978]">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Admission:</span>
                  </div>
                  <div className="text-[#72768b]">{college.admissionDates}</div>
                </div>
                <Avatar className="mt-2 w-full h-48 rounded-xl">
                  <AvatarImage
                    src={college.image}
                    alt={college.name}
                    className="object-cover"
                  />
                  <AvatarFallback>{college.name?.[0]}</AvatarFallback>
                </Avatar>
              </div>

              {/* AdmissionForm Client Component */}
              <AdmissionForm college={college} user={clerkUser} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
