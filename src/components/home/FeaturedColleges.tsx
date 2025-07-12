"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Star, Trophy } from "lucide-react";
import { colleges } from "@/lib/colleges";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedColleges({ showAll }: { showAll: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <div className="max-w-7xl px-6 mx-auto">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-2 text-base bg-[#eceffe] text-text-purple border-bg-bg-violet">
              {!showAll && "Featured"} Institutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#002058] mb-4">
              {!showAll ? "Top" : ""} Colleges & Universities
            </h2>
            <p className="text-xl text-[#72768b] max-w-2xl mx-auto">
              Discover exceptional educational institutions known for their
              academic excellence and innovative programs.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(showAll ? colleges : colleges.slice(0, 3)).map((college, index) => (
            <motion.div
              key={college.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden h-full border-2 border-[#e8e8e8] hover:border-bg-violet transition-all duration-300 hover:shadow-md pt-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={college.image || "/placeholder.svg"}
                    alt={college.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#fbc54a] text-[#002058] font-semibold">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {college.rating}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {college.name}
                    </h3>
                  </div>
                </div>

                <CardContent className="px-6 space-y-4">
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 text-[#68b978]">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">Admission:</span>
                      </div>
                      <div className="text-[#72768b]">
                        {college.admissionDates}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 text-[#392c7d]">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-medium">Research:</span>
                      </div>
                      <div className="text-[#72768b]">
                        {college.researchCount} Papers
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-[#002058] mb-2">
                        Upcoming Events
                      </h4>
                      <div className="space-y-1">
                        {college.events.slice(0, 2).map((event, idx) => (
                          <div
                            key={idx}
                            className="text-sm text-[#72768b] flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-[#ff6575] rounded-full mt-2 flex-shrink-0"></div>
                            {event}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#002058] mb-2">
                        Sports
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {college.sports.map((sport, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs bg-[#eceffe] text-text-purple border-bg-bg-violet"
                          >
                            <Trophy className="w-3 h-3 mr-1" />
                            {sport}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-bg-violet to-bg-pink hover:from-bg-violet/90 hover:to-bg-pink/80 hover:scale-105 duration-300 cursor-pointer text-white font-medium">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
