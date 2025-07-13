import { UserProfile } from "@clerk/nextjs";
import CollegeProfilePage from "./CollegeProfile";

export default function ProfilePage() {
  return (
    <div className="min-h-screen py-12 px-4 flex flex-col lg:flex-row gap-10 items-start justify-center mx-auto max-w-7xl">
      {/* Left: College Profile Info */}
      <div className="w-full max-w-xl">
        <CollegeProfilePage />
      </div>

      {/* Right: Clerk User Profile */}
      <div className="w-full max-w-fit">
        <UserProfile />
      </div>
    </div>
  );
}
