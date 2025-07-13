"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface Review {
  admissionId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  name: string;
  college: string;
  avatar: string;
}

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  // Auto change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gradient-to-br from-[#fbfbfc] to-[#f7f7f7]"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-2 text-base bg-[#eceffe] text-text-purple border-bg-bg-violet">
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
            <Card className="border-2 border-bg-violet/50 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex justify-center mb-6">
                  <Avatar className="w-20 h-20 border-4 border-bg-bg-violet">
                    <AvatarImage
                      src={
                        reviews[currentReviewIndex].avatar || "/placeholder.svg"
                      }
                      alt={reviews[currentReviewIndex].name}
                    />
                    <AvatarFallback>
                      {reviews[currentReviewIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < reviews[currentReviewIndex].rating
                          ? "text-text-yellow fill-current"
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
              className="border-bg-bg-violet cursor-pointer text-[#392c7d] not-last-of-type:bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={nextReview}
              variant="outline"
              size="sm"
              className="border-bg-bg-violet cursor-pointer text-[#392c7d] not-last-of-type:bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReviewIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReviewIndex
                    ? "bg-bg-violet scale-125"
                    : "bg-[#e8e8e8] hover:bg-bg-violet"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
