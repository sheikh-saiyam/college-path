"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-4 z-50 bg-bg-lightest border border-border-gray shadow-sm rounded-full max-w-[1536px] mx-auto px-6 py-3 md:py-2">
      <div className="flex justify-between items-center h-12">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <h1
              className="text-3xl font-extrabold tracking-tight font-sans bg-gradient-to-r from-bg-violet to-bg-pink text-transparent bg-clip-text transition-all duration-300 hover:scale-105 transform origin-left"
            >
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
            <Link href={"/sign-in"}>
              <Button
                variant="default"
                className="rounded-full bg-gradient-to-r from-bg-violet to-bg-pink text-text-white hover:from-bg-violet/90 hover:to-bg-pink/90 hover:scale-105 cursor-pointer transition-all duration-500 ease-in-out text-base px-6 hover:underline underline-offset-2"
              >
                Login
              </Button>
            </Link>

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
