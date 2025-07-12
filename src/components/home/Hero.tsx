"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { colleges } from "@/lib/colleges";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof colleges>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = colleges.filter((college) =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-bg-violet to-bg-pink opacity-10"></div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Badge className="mb-6 bg-gradient-to-r from-bg-violet to-bg-pink text-white border-0 px-6 py-2 text-sm font-medium">
            🎓 Discover Your Dream College
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-bg-violet to-bg-pink bg-clip-text text-transparent leading-tight"
        >
          Find Your Perfect College
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl text-[#72768b] mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Explore top colleges worldwide, discover research opportunities, and
          find your academic home with our comprehensive college search
          platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6"
        >
          <Input
            type="text"
            placeholder="Search for colleges..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 h-12 px-6 text-lg border-2 border-[#e8e8e8] focus:border-bg-bg-violet rounded-full"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <Button
            onClick={handleSearch}
            className="h-12 px-8 bg-gradient-to-r from-bg-violet to-bg-pink hover:from-[#a396f0] hover:to-[#f596f0] text-white rounded-full font-medium"
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-[#72768b]"
        >
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#68b978] rounded-full"></div>
            98% Student Satisfaction
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#fbc54a] rounded-full"></div>
            24/7 Support Available
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#ff6575] rounded-full"></div>
            100+ Colleges
          </span>
        </motion.div>

        {/* Search Results */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {searchResults.map((college, index) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-[#e8e8e8] hover:border-bg-bg-violet">
                  <div className="relative h-48">
                    <Image
                      src={college.image || "/placeholder.svg"}
                      alt={college.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#fbc54a] text-[#002058]">
                        <Star className="w-3 h-3 mr-1" />
                        {college.rating}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
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
                    <Button className="w-full mt-4 bg-gradient-to-r from-bg-violet to-bg-pink hover:from-[#a396f0] hover:to-[#f596f0] text-white">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
