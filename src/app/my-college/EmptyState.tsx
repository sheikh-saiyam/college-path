import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EmptyState() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          No Admission Found
        </h2>
        <p className="text-gray-600 mb-6">
          It looks like you haven&apos;t submitted an admission yet.
        </p>
        <Link href="/admission">
          <Button>Go to Admission Page</Button>
        </Link>
      </div>
    </div>
  );
}
