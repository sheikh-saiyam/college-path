"use client";

import { useState, useMemo } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, GraduationCap, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { colleges } from "@/lib/colleges";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return colleges.filter((college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-28 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-bg-violet to-bg-pink opacity-10"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-bg-violet to-bg-pink text-white border-0 px-6 py-2 text-sm font-medium inline-flex items-center gap-2">
            <GraduationCap size={20} />
            Discover Your Dream College
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-bg-violet to-bg-pink bg-clip-text text-transparent leading-tight">
            Find Your Perfect College
          </h1>

          <p className="text-xl text-[#6b6e7e] mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore top colleges worldwide, discover research opportunities, and
            find your academic home with our comprehensive college search
            platform.
          </p>

          <div className="flex flex-row gap-2 items-center max-w-md mx-auto mb-6">
            <Input
              type="text"
              placeholder="Search for colleges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 h-12 px-6 text-lg border-2 border-[#e8e8e8] focus:border-bg-bg-violet rounded-full bg-white"
            />
            <Button
              onClick={handleSearch}
              className="h-11 px-8 bg-gradient-to-r from-bg-violet to-bg-pink hover:from-bg-violet/90 hover:to-bg-pink/90 text-white rounded-full font-medium"
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#72768b]">
            <span className="flex items-center font-medium gap-2">
              <div className="w-2 h-2 bg-[#68b978] rounded-full"></div>
              98% Student Satisfaction
            </span>
            <span className="flex items-center font-medium gap-2">
              <div className="w-2 h-2 bg-[#fbc54a] rounded-full"></div>
              24/7 Support Available
            </span>
            <span className="flex items-center font-medium gap-2">
              <div className="w-2 h-2 bg-[#ff6575] rounded-full"></div>
              100+ Colleges
            </span>
          </div>

          {/* Search Results */}
          {showResults && (
            <>
              {searchResults.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`mt-12 grid gap-6 ${
                    searchResults.length === 1
                      ? "grid-cols-1"
                      : searchResults.length === 2
                      ? "md:grid-cols-2"
                      : "md:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {searchResults.map((college) => (
                    <Card
                      key={college.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-[#e8e8e8] hover:border-bg-bg-violet max-w-md pt-0 mx-auto grid place-items-stretch"
                    >
                      <div className="relative h-48 flex justify-center items-center bg-gray-100">
                        <Avatar className="w-full h-full rounded-none">
                          <AvatarImage
                            src={college.image || "/placeholder.svg"}
                            alt={college.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </Avatar>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-[#fbc54a] text-[#002058]">
                            <Star className="w-3 h-3 mr-1" />
                            {college.rating}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="px-6 text-left">
                        <h3 className="text-xl font-bold text-[#002058] mb-2">
                          {college.name}
                        </h3>
                        <p className="text-[#72768b] text-sm mb-4">
                          {college.details.description.slice(0, 100)}...
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-[#68b978]">
                            <Calendar className="w-4 h-4" />
                            {college.admissionDates}
                          </div>
                          <div className="flex items-center gap-2 text-[#392c7d]">
                            <BookOpen className="w-4 h-4" />
                            {college.researchCount} Research Papers
                          </div>
                        </div>
                        <Link
                          href={`/colleges/${college.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <Button className="mt-3 w-full bg-gradient-to-r from-bg-violet to-bg-pink hover:opacity-80 hover:scale-105 duration-300 cursor-pointer text-white font-medium">
                            View Details
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              ) : (
                searchQuery && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mt-12 text-center text-[#72768b] text-lg"
                  >
                    <span className="font-medium">
                      No colleges matched your search!
                    </span>{" "}
                    <br />
                    Try using different keywords or check your spelling
                  </motion.div>
                )
              )}
            </>
          )}
        </div>
      </motion.section>
    </LazyMotion>
  );
}
