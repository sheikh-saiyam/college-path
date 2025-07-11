"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useClerk, useUser } from "@clerk/nextjs";
import { Loader, LogOut, Menu, User, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/colleges", label: "Colleges" },
  { href: "/admission", label: "Admission" },
  { href: "/my-college", label: "My College" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();

  const isActive = (href: string) => pathname === href;
  const handleLogout = async () => await signOut();

  return (
    <nav className="sticky top-4 z-50 bg-bg-lightest border border-border-gray shadow-sm rounded-full max-w-[1536px] mx-auto px-6 py-3 md:py-2">
      <div className="flex justify-between items-center h-12">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-3xl font-extrabold tracking-tight font-sans bg-gradient-to-r from-bg-violet to-bg-pink text-transparent bg-clip-text transition-all duration-300 hover:scale-105 transform origin-left">
              College Path
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-all text-lg duration-300 relative group",
                  "text-text-black/85",
                  "opacity-85 duration-300",
                  isActive(link.href) &&
                    "text-transparent bg-clip-text bg-gradient-to-r from-bg-violet font-bold to-bg-pink"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-bg-violet to-bg-pink rounded-full" />
                )}
                {!isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bg-violet to-bg-pink transition-all duration-300 group-hover:w-full rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Button & Mobile Menu Trigger */}
          <div className="flex items-center space-x-3">
            {!isLoaded || !isSignedIn ? (
              <Link href={"/sign-in"}>
                {/* Show a skeleton button if not loaded, otherwise the actual login button */}
                {!isLoaded ? (
                  <Loader className="h-8 w-8 rounded-full" />
                ) : (
                  <Button
                    variant="default"
                    className="rounded-full bg-gradient-to-r from-bg-violet to-bg-pink text-text-white
                         hover:from-bg-violet/90 hover:to-bg-pink/90 hover:scale-105 cursor-pointer
                         transition-all duration-500 ease-in-out text-base px-6
                         hover:underline underline-offset-2"
                  >
                    Login
                  </Button>
                )}
              </Link>
            ) : (
              // If user is signed in and loaded, show the Avatar dropdown
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {/* Avatar as the trigger for the dropdown */}
                  <Button
                    variant="ghost" // Use ghost variant to make it look like just an avatar
                    className="relative h-10 w-10 rounded-full p-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer" // Remove focus ring
                  >
                    <Avatar className="h-10 w-10 border-2 border-bg-violet hover:border-bg-pink transition-colors duration-300">
                      {user?.imageUrl ? (
                        <AvatarImage
                          src={user.imageUrl}
                          alt={
                            user?.fullName || user?.username || "User Avatar"
                          }
                        />
                      ) : (
                        <AvatarFallback className="bg-gradient-to-r from-bg-violet to-bg-pink text-text-white">
                          {user?.fullName
                            ? user.fullName.charAt(0).toUpperCase()
                            : user?.username
                            ? user.username.charAt(0).toUpperCase()
                            : "U"}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  {/* Display User Email */}
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.fullName || user?.username || "User"}{" "}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.emailAddresses?.[0]?.emailAddress || "No Email"}{" "}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {/* Go to Profile Link with Lucide Icon */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <User className="h-4 w-4" />
                      Go to Profile
                    </Link>
                  </DropdownMenuItem>
                  {/* Logout Button with Lucide Icon */}
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="flex items-center gap-2 cursor-pointer text-red-600 hover:text-red-700 focus:text-red-700"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-border-gray shadow-sm hover:bg-bg-light transition-all duration-300"
                >
                  <Menu className="h-5 w-5 text-text-black" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-bg-lightest border-l border-border-gray animate-in slide-in-from-right duration-300"
              >
                <div className="flex flex-col space-y-6 pt-6">
                  {/* Sheet Header */}
                  <div className="flex justify-between items-center">
                    <Link href="/">
                      <h1 className="text-2xl font-bold tracking-tight font-sans">
                        <span className="text-bg-violet">College</span>
                        <span className="text-bg-pink">Path</span>
                      </h1>
                    </Link>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-bg-light"
                      >
                        <X className="h-5 w-5 text-text-black" />
                        <span className="sr-only">Close</span>
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-text-black font-medium py-3 px-4 rounded-lg transition-all duration-300",
                            isActive(link.href)
                              ? "bg-bg-violet text-text-white"
                              : "hover:bg-bg-light hover:text-bg-violet"
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Mobile Login Button */}
                  <SheetClose asChild>
                    <Button
                      variant="default"
                      className="rounded-full bg-gradient-to-r from-bg-violet to-bg-pink text-text-white hover:from-bg-pink hover:to-bg-violet transition-all duration-300"
                    >
                      Login
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
