import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="flex justify-center min-h-screen items-center py-12">
      <UserProfile />
    </div>
  );
}
