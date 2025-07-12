import NotFound from "@/app/not-found";
import { colleges } from "@/lib/colleges";
import CollegeDetailsClient from "./CollegeDetails";
import type { Metadata } from "next";

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const college = colleges.find((c) => slugify(c.name) === slug);

  if (!college) {
    return {
      title: "College Not Found - College Path",
      description: "The requested college could not be found.",
    };
  }

  return {
    title: `${college.name} - College Path`,
    description: college.details.description,
    openGraph: {
      title: `${college.name} - College Path`,
      description: college.details.description,
      images: [
        {
          url: college.image,
          width: 1200,
          height: 630,
          alt: `${college.name} campus image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${college.name} - College Path`,
      description: college.details.description,
      images: [college.image],
    },
  };
}

export default async function CollegeDetailsPage({ params }: Props) {
  const { slug } = await params;

  const college = colleges.find((c) => slugify(c.name) === slug);

  if (!college) return <NotFound />;

  return <CollegeDetailsClient college={college} />;
}
