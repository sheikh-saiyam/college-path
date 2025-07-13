import clientPromise from "./mongodb";

export const dbConnect = async (collectionName: string) => {
  const client = await clientPromise;
  return client.db("college_path_DB").collection(collectionName);
};

export const collections = { admissions: "admissions", reviews: "reviews" };
