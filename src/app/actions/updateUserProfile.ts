"use server";

import { dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

interface ProfileUpdateInput {
  userId: string;
  name: string;
  university: string;
  address: string;
  phone: string;
  dob: string;
}

export async function updateUserProfile({
  userId,
  name,
  university,
  address,
  phone,
  dob,
}: ProfileUpdateInput) {
  const profileCollection = await dbConnect("profiles");

  const updateDoc = {
    $set: {
      name,
      university,
      address,
      phone,
      dob,
      updatedAt: new Date(),
    },
    $setOnInsert: {
      createdAt: new Date(),
    },
  };

  await profileCollection.updateOne({ userId }, updateDoc, { upsert: true });

  revalidatePath("/profile");
}
