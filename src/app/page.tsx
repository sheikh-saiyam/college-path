"use client";

import FeaturedColleges from "@/components/home/FeaturedColleges";
import Hero from "@/components/home/Hero";
import CollegeImageGallery from "@/components/home/ImageGallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { colleges } from "@/lib/colleges";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Star,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Research papers data
const researchPapers = [
  {
    id: 1,
    title: "Artificial Intelligence in Modern Education Systems",
    authors: "Dr. Sarah Johnson, Prof. Michael Chen",
    college: "Harvard University",
    year: "2024",
    category: "Technology",
    abstract:
      "This paper explores the integration of AI technologies in educational frameworks and their impact on learning outcomes.",
    link: "https://example.com/research1",
    downloads: 1250,
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions for Urban Development",
    authors: "Dr. Ahmed Rahman, Dr. Lisa Wang",
    college: "Stanford University",
    year: "2024",
    category: "Environment",
    abstract:
      "A comprehensive study on renewable energy implementation in metropolitan areas.",
    link: "https://example.com/research2",
    downloads: 980,
  },
  {
    id: 3,
    title: "Climate Change Adaptation Strategies",
    authors: "Prof. Emily Davis, Dr. Robert Kim",
    college: "Oxford University",
    year: "2023",
    category: "Climate Science",
    abstract:
      "Research on effective adaptation strategies for climate change mitigation in developing countries.",
    link: "https://example.com/research3",
    downloads: 1450,
  },
  {
    id: 4,
    title: "Quantum Computing Applications in Healthcare",
    authors: "Dr. James Wilson, Prof. Maria Garcia",
    college: "Notre Dame College",
    year: "2024",
    category: "Healthcare",
    abstract:
      "Exploring the potential of quantum computing in medical diagnosis and treatment optimization.",
    link: "https://example.com/research4",
    downloads: 750,
  },
];

// Reviews data
const reviews = [
  {
    id: 1,
    name: "Alex Thompson",
    college: "Harvard University",
    rating: 5,
    comment:
      "Exceptional academic environment with world-class faculty. The research opportunities are unparalleled.",
    year: "Class of 2023",
    avatar: "https://placeholder.com/100x100?text=AT",
  },
  {
    id: 2,
    name: "Priya Sharma",
    college: "Stanford University",
    rating: 5,
    comment:
      "Amazing campus culture and innovative programs. The tech ecosystem here is incredible.",
    year: "Class of 2024",
    avatar: "https://placeholder.com/100x100?text=PS",
  },
  {
    id: 3,
    name: "Mohammed Hassan",
    college: "Dhaka College",
    rating: 4,
    comment:
      "Great local institution with strong community ties. Excellent value for education.",
    year: "Class of 2022",
    avatar: "https://placeholder.com/100x100?text=MH",
  },
  {
    id: 4,
    name: "Emma Johnson",
    college: "Oxford University",
    rating: 5,
    comment:
      "Rich history and tradition combined with cutting-edge research. Truly transformative experience.",
    year: "Class of 2023",
    avatar: "https://placeholder.com/100x100?text=EJ",
  },
];

export default function HomePage() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfbfc] to-[#f7f7f7]">
      {/* Hero Search Section */}
      <Hero />

      {/* Featured Colleges Section */}
      <FeaturedColleges />

      {/* Image Gallery Section */}
      <CollegeImageGallery />
      
      {/* Research Papers Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#eceffe] text-[#392c7d] border-bg-bg-violet">
                Academic Research
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002058] mb-4">
                Latest Research Papers
              </h2>
              <p className="text-xl text-[#72768b] max-w-2xl mx-auto">
                Discover groundbreaking research from leading institutions and
                contribute to the advancement of knowledge.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-2 border-[#e8e8e8] hover:border-bg-bg-violet transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <Badge className="mb-3 bg-[#e8dfff] text-[#392c7d]">
                          {paper.category}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-[#002058] leading-tight mb-2">
                          {paper.title}
                        </CardTitle>
                        <p className="text-sm text-[#72768b] mb-2">
                          {paper.authors}
                        </p>
                        <p className="text-sm font-medium text-[#68b978]">
                          {paper.college} • {paper.year}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-bg-bg-violet text-[#392c7d] hover:bg-bg-bg-violet hover:text-white bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-[#72768b] mb-4 leading-relaxed">
                      {paper.abstract}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-[#72768b]">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {paper.downloads} downloads
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-bg-violet to-bg-pink hover:from-[#a396f0] hover:to-[#f596f0] text-white"
                      >
                        Read Paper
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-br from-[#fbfbfc] to-[#f7f7f7]"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#fef8b8] text-[#002058] border-[#fbc54a]">
                Student Testimonials
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002058] mb-4">
                What Students Say
              </h2>
              <p className="text-xl text-[#72768b] max-w-2xl mx-auto">
                Real experiences from students who have found their perfect
                college match through our platform.
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentReviewIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Card className="border-2 border-[#e8e8e8] shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={
                        reviews[currentReviewIndex].avatar || "/placeholder.svg"
                      }
                      alt={reviews[currentReviewIndex].name}
                      width={80}
                      height={80}
                      className="rounded-full border-4 border-bg-bg-violet"
                    />
                  </div>

                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < reviews[currentReviewIndex].rating
                            ? "text-[#fbc54a] fill-current"
                            : "text-[#e8e8e8]"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-[#002058] font-medium mb-6 leading-relaxed">
                    &quot;{reviews[currentReviewIndex].comment}&quot;
                  </blockquote>

                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-[#002058]">
                      {reviews[currentReviewIndex].name}
                    </h4>
                    <p className="text-[#72768b]">
                      {reviews[currentReviewIndex].year}
                    </p>
                    <p className="text-[#68b978] font-medium">
                      {reviews[currentReviewIndex].college}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={prevReview}
                variant="outline"
                size="sm"
                className="border-bg-bg-violet text-[#392c7d] hover:bg-bg-bg-violet hover:text-white bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={nextReview}
                variant="outline"
                size="sm"
                className="border-bg-bg-violet text-[#392c7d] hover:bg-bg-bg-violet hover:text-white bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex
                      ? "bg-bg-bg-violet scale-125"
                      : "bg-[#e8e8e8] hover:bg-bg-bg-violet/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
