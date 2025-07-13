"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addAdmission(formData: FormData) {
  const current = await currentUser();
  if (!current) throw new Error("Unauthorized");

  const admissionData = {
    collegeId: Number(formData.get("collegeId")),
    collegeName: formData.get("collegeName"),
    collegeImage: formData.get("collegeImage"),
    name: formData.get("name"),
    subject: formData.get("subject"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    dob: formData.get("dob"),
    image: formData.get("image"),
    userId: current.id,
    createdAt: new Date(),
  };

  const admissionsCollection = await dbConnect(collections.admissions);
  await admissionsCollection.insertOne(admissionData);

  const profileCollection = await dbConnect("profiles");
  await profileCollection.updateOne(
    { userId: current.id },
    {
      $setOnInsert: {
        name: admissionData.name,
        email: admissionData.email,
        phone: admissionData.phone,
        address: admissionData.address,
        university: admissionData.subject,
        dob: admissionData.dob,
        image: admissionData.image,
        createdAt: new Date(),
      },
      $set: { updatedAt: new Date() },
    },
    { upsert: true }
  );

  revalidatePath("/my-college");
  redirect("/my-college");
}
