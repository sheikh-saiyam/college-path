"use client";

import { ClerkProvider } from "@clerk/nextjs";

export function WrapperClerkProviders({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
