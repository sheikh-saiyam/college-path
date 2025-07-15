import FeaturedColleges from "@/components/home/FeaturedColleges";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Path | All Colleges",
  description:
    "Browse a wide selection of top colleges, compare features, facilities, and admission timelines to find the best fit for your future.",
  keywords: [
    "explore colleges",
    "college list",
    "top colleges",
    "compare colleges",
    "College Path",
    "college admission guide",
    "best colleges in Bangladesh",
    "college details platform",
  ],
};

const CollegesPage = () => {
  return <FeaturedColleges showAll={true} />;
};

export default CollegesPage;
