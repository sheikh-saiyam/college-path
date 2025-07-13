"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

interface ReviewInput {
  admissionId: string;
  rating: number;
  review: string;
}

export async function addReview({ admissionId, rating, review }: ReviewInput) {
  if (!admissionId || !rating || !review) {
    throw new Error("All fields are required");
  }

  const reviewCollection = await dbConnect(collections.reviews);
  await reviewCollection.insertOne({
    admissionId,
    rating,
    comment: review,
    createdAt: new Date(),
  });
}
