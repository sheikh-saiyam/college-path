import Hero from "@/components/home/Hero";
import FeaturedColleges from "@/components/home/FeaturedColleges";
import CollegeImageGallery from "@/components/home/ImageGallery";
import ResearchPapers from "@/components/home/ResearchPapers";
import Reviews from "@/components/home/Reviews";

export default function HomePage() {
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
      <Reviews />
    </div>
  );
}
