import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import EditProfileForm from "./EditProfileForm";
import { dbConnect } from "@/lib/dbConnect";
import { redirect } from "next/navigation";

interface Profile {
  name?: string;
  university?: string;
  address?: string;
  phone?: string;
  dob?: string;
}

export default async function CollegeProfilePage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const profileCollection = await dbConnect("profiles");
  const rawProfile = await profileCollection.findOne({ userId: user.id });

  const profile: Profile | null = rawProfile
    ? {
        name: rawProfile.name || "",
        university: rawProfile.university || "",
        address: rawProfile.address || "",
        phone: rawProfile.phone || "",
        dob: rawProfile.dob || "",
      }
    : null;

  return (
    <div className="max-w-2xl mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <EditProfileForm
            profile={profile}
            userId={user.id}
            email={user.emailAddresses[0]?.emailAddress || ""}
          />
        </CardContent>
      </Card>
    </div>
  );
}
