import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "College Path | Book Your Dream College",
  description:
    "College Path is a user-friendly platform to explore top colleges, compare facilities, book admissions, and read real student reviews all in one place.",
  keywords: [
    "college booking",
    "college admission",
    "college details",
    "college review platform",
    "College Path",
    "admission portal",
    "compare colleges",
    "book college online",
    "college rating",
    "research paper portal",
  ],
  authors: [{ name: "Sheikh Saiyam", url: "https://college-path.vercel.app" }],
  creator: "Sheikh Saiyam",
  openGraph: {
    title: "College Path | Book Your Dream College",
    description:
      "Explore and book colleges with full details on admission, events, research, and sports. Read reviews from real students only on College Path.",
    url: "https://college-path.vercel.app",
    siteName: "College Path",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "College Path - Book your dream college",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://college-path.vercel.app"),
  icons: { icon: "/favicon.ico" },
};
