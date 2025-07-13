"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { addAdmission } from "../actions/addAdmission";
import { ClerkUser, College } from "./page";

interface AdmissionFormProps {
  college: College;
  user: ClerkUser;
}

export default function AdmissionForm({ college, user }: AdmissionFormProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="outline" className="mb-4" onClick={() => setOpen(!open)}>
        {open ? "Hide Form" : "Get Admission"}
      </Button>

      {open && (
        <form
          action={addAdmission}
          className="space-y-4 px-1 mt-2"
          method="post"
        >
          {/* Hidden inputs */}
          <input type="hidden" name="collegeId" value={college.id} />
          <input type="hidden" name="collegeName" value={college.name} />
          <input type="hidden" name="collegeImage" value={college.image} />

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Candidate Name</Label>
            <Input
              id="name"
              name="name"
              defaultValue={user.fullName ?? ""}
              required
            />
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

          {/* Profile Image (readonly, hidden input) */}
          <div className="space-y-2">
            <Label>Profile Image</Label>
            <div className="flex items-center gap-3">
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

          <Button type="submit" className="w-full">
            Submit Admission
          </Button>
        </form>
      )}
    </div>
  );
}
