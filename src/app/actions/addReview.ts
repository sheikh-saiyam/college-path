"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

interface ReviewInput {
  admissionId: string;
  rating: number;
  review: string;
  userName?: string;
  userCollege?: string;
  userAvatar?: string;
}

export async function addReview({
  admissionId,
  rating,
  review,
  userName,
  userCollege,
  userAvatar,
}: ReviewInput) {
  if (!admissionId || !rating || !review) {
    throw new Error("All fields are required");
  }

  const reviewCollection = await dbConnect(collections.reviews);

  const newReview = {
    admissionId,
    rating,
    comment: review,
    createdAt: new Date(),
    name: userName || "Anonymous",
    college: userCollege || "Unknown College",
    avatar: userAvatar || "https://randomuser.me/api/portraits/lego/1.jpg",
  };

  await reviewCollection.insertOne(newReview);

  revalidatePath("/");
}
