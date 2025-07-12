import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center min-h-screen items-center py-6">
      <SignIn />
    </div>
  );
}
