"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addAdmission } from "../actions/addAdmission";
import { ClerkUser, College } from "./page";
import { AlertTriangle } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface AdmissionFormProps {
  college: College;
  user: ClerkUser;
}

export default function AdmissionForm({ college, user }: AdmissionFormProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        const res = await addAdmission(formData);
        if (res?.success) {
          router.push("/my-college");
          toast.success("Admission submitted successfully!");
          setOpen(false);
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong. Please try again!");
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mx-auto w-3/5 bg-gradient-to-r from-bg-violet to-bg-pink hover:opacity-80 hover:scale-105 duration-300 cursor-pointer text-white font-medium">
          Get Admission
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto rounded-l-2xl sm:rounded-l-2xl rounded-r-none sm:rounded-r-none border">
        <DialogHeader className="mt-3 mb-0 pb-0">
          <DialogTitle>
            Admission Form for <span className="font-bold">{college.name}</span>
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4 hidden" />
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 -mt-2 pt-3 border-t">
          {/* Hidden inputs */}
          <input type="hidden" name="collegeId" value={college.id} />
          <input type="hidden" name="collegeName" value={college.name} />
          <input type="hidden" name="collegeImage" value={college.image} />

          {/* Name */}
          <div className="flex items-center gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="name">Candidate Name</Label>
              <Input
                id="name"
                name="name"
                defaultValue={user.fullName ?? ""}
                required
              />
            </div>

            {/* Profile Image (readonly, hidden input) */}
            <div className="space-y-2">
              <Label>Image</Label>
              <div className="flex items-center justify-center gap-3">
                <Avatar>
                  <AvatarImage src={user.imageUrl ?? undefined} />
                  <AvatarFallback>{user.fullName?.[0]}</AvatarFallback>
                </Avatar>
                <Input
                  type="hidden"
                  name="image"
                  value={user.imageUrl ?? ""}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Subject / University */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" required />
          </div>

          {/* Email - readonly */}
          <div className="space-y-2">
            <Label htmlFor="email">Email (readonly)</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={user.emailAddresses[0]?.emailAddress ?? ""}
              readOnly
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" required />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" name="address" required />
          </div>

          {/* DOB */}
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" name="dob" type="date" required />
          </div>

          <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-md p-4 mb-4 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-bold">Profile Info</p>
              <p className="text-sm">
                Submitted info will also be used for your{" "}
                <span className="font-semibold">profile</span>. Make sure it’s
                accurate.
              </p>
            </div>
          </div>

          <div className="w-[80%] mx-auto">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit Admission"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
