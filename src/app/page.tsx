import Hero from "@/components/home/Hero";
import FeaturedColleges from "@/components/home/FeaturedColleges";
import CollegeImageGallery from "@/components/home/ImageGallery";
import ResearchPapers from "@/components/home/ResearchPapers";
import Reviews, { Review } from "@/components/home/Reviews";
import { collections, dbConnect } from "@/lib/dbConnect";
import { Document } from "mongodb";

async function getReviews(): Promise<Review[]> {
  const reviewCollection = await dbConnect(collections.reviews);
  const result = await reviewCollection.find().limit(10).toArray();

  const mapped = result.map((item: Document) => ({
    admissionId: item.admissionId,
    rating: item.rating,
    comment: item.comment,
    createdAt:
      typeof item.createdAt === "object" && "getTime" in item.createdAt
        ? item.createdAt.getTime()
        : Number(item.createdAt),
    name: item.name,
    college: item.college,
    avatar: item.avatar,
  }));

  return mapped;
}

export default async function HomePage() {
  const reviews = await getReviews();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfbfc] to-[#f7f7f7]">
      {/* Hero Search Section */}
      <Hero />

      {/* Featured Colleges Section */}
      <FeaturedColleges showAll={false} />

      {/* Image Gallery Section */}
      <CollegeImageGallery />

      {/* Research Papers Section */}
      <ResearchPapers />

      {/* Reviews Section */}
      <Reviews reviews={reviews} />
    </div>
  );
}
