import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPrivateRoute = createRouteMatcher([
  "/my-college",
  "/profile",
  "/admission",
  "/colleges(.*)",
]);
const isPrivateApiRoute = createRouteMatcher(["/api/my-college"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPrivateRoute(req) || isPrivateApiRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|css|js|ico|woff2?)).*)",
  ],
};
