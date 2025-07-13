"use client";

import { Button } from "@/components/ui/button";
import { updateUserProfile } from "../actions/updateUserProfile";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface Profile {
  name?: string;
  university?: string;
  address?: string;
  phone?: string;
  dob?: string;
}

interface Props {
  profile: Profile | null;
  userId: string;
  email: string;
}

export default function EditProfileForm({ profile, userId, email }: Props) {
  const [formData, setFormData] = useState({
    name: profile?.name || "",
    university: profile?.university || "",
    address: profile?.address || "",
    phone: profile?.phone || "",
    dob: profile?.dob || "",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateUserProfile({
        ...formData,
        userId,
      });
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label>Email (non-editable)</Label>
        <Input value={email} disabled />
        <p className="text-xs text-muted-foreground mt-1">
          Email can only be updated from Clerk profile settings.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="university">University subject</Label>
        <Input
          name="university"
          value={formData.university}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dob">Date of Birth</Label>
        <Input
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save"}
      </Button>
    </form>
  );
}
