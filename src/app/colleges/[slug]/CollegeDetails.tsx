"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  ClipboardList,
  Dumbbell,
  ExternalLink,
  FileText,
  FlaskConical,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaSwimmer, FaTableTennis } from "react-icons/fa";
import {
  GiBasketballBall,
  GiCricketBat,
  GiRugbyConversion,
  GiSoccerBall,
  GiTennisRacket,
} from "react-icons/gi";
import { MdRowing } from "react-icons/md";

export interface College {
  id: number;
  name: string;
  image: string;
  rating: number;
  admissionDates: string;
  researchCount: number;
  events: string[];
  researchHistory: Array<{
    title: string;
    link: string;
  }>;
  sports: string[];
  details: {
    description: string;
    admissionProcess: string;
    eventsDetails: string;
    researchWorks: string;
    sportsCategories: string;
  };
}

interface CollegeDetailsClientProps {
  college: College;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const cardHover = {
  hover: {
    scale: 1.02,
    y: -4,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function CollegeDetailsClient({
  college,
}: CollegeDetailsClientProps) {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-10"
          >
            {/* Hero Section */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="relative inline-block group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={college.image || "/placeholder.svg"}
                    alt={`${college.name} campus view`}
                    width={800}
                    height={400}
                    className="w-full max-w-4xl h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-xl border-4 border-gray-100"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
                </motion.div>
              </div>

              <motion.h1
                className="-mt-2 text-4xl sm:text-5xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-bg-violet to-bg-pink leading-tight drop-shadow-sm"
                variants={sectionVariants}
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                {college.name}
              </motion.h1>

              <motion.p
                className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {college.details.description}
              </motion.p>

              <motion.div
                className="mt-2 flex flex-wrap justify-center gap-4 text-base"
                variants={sectionVariants}
              >
                <div className="flex items-center gap-2 bg-text-yellow rounded-full px-5 py-2 shadow-md text-white font-medium">
                  <Star className="w-5 h-5 text0white fill-current" />
                  <span>{college.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-bg-violet/50 rounded-full px-5 py-2 shadow-md text-gray-700 font-medium">
                  <BookOpen className="w-5 h-5 text-violet-600" />
                  <span>{college.researchCount} Research Projects</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Admission Section */}
            <motion.section
              id="admission"
              variants={sectionVariants}
              className="bg-gradient-to-r from-bg-violet/20 to-bg-pink/20 rounded-3xl shadow-lg border border-gray-100 p-6 text-center"
              {...cardHover}
            >
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-6 border-l-4 border-violet-500 shadow-sm text-left"
                >
                  <h3 className="font-semibold text-text-purple text-xl flex items-center gap-2">
                    <CalendarDays className="w-6 h-6 text-violet-500" />{" "}
                    Admission Dates:{" "}
                    <p className="text-text-purple/90 font-medium text-lg">
                      {college.admissionDates}
                    </p>
                  </h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-50 rounded-2xl p-6 border-l-4 border-pink-400 shadow-sm text-left"
                >
                  <h3 className="font-semibold text-text-purple text-xl flex items-center  gap-2">
                    <ClipboardList className="w-6 h-6 text-pink-500" />{" "}
                    Application Process:{" "}
                    <p className="text-text-purple/90 font-medium text-lg">
                      {college.details.admissionProcess}
                    </p>
                  </h3>
                </motion.div>

                <Link href={"/admission"}>
                  <Button className="w-3/5 bg-gradient-to-r from-bg-violet to-bg-pink hover:opacity-80 text-base hover:scale-105 duration-300 cursor-pointer text-white font-medium">
                    Get Admission
                  </Button>
                </Link>
              </div>
            </motion.section>

            {/* Events Section */}
            <motion.section
              id="events"
              variants={sectionVariants}
              className="bg-gradient-to-r from-bg-violet/20 to-bg-pink/20 rounded-3xl shadow-lg border border-gray-100 p-6 text-center"
              {...cardHover}
            >
              <motion.h2
                className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-bg-violet to-bg-pink mb-1 flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="p-3 bg-gradient-to-r from-bg-violet to-bg-pink rounded-xl shadow-md">
                  <Users className="w-4 h-4 text-white" />
                </div>
                Events & Activities
              </motion.h2>{" "}
              <motion.p
                className="text-gray-700 leading-relaxed mb-4 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {college.details.eventsDetails}
              </motion.p>
              <div>
                <div className="grid gap-4">
                  {college.events.map((event, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gray-50 rounded-2xl p-6 border-l-4 ${
                        index === 0 ? "border-violet-500" : "border-pink-500"
                      } shadow-sm text-left`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <p className="text-text-purple font-medium text-lg flex items-center gap-3">
                        <Sparkles
                          className={`w-6 h-6 ${
                            index === 0 ? "text-violet-500" : "text-pink-500"
                          }`}
                        />
                        {event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Research Section */}
            <motion.section
              id="research"
              variants={sectionVariants}
              className="bg-gradient-to-r from-bg-violet/20 to-bg-pink/20 rounded-3xl shadow-lg border border-gray-100 p-6 text-center"
              {...cardHover}
            >
              <motion.h2
                className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-bg-violet to-bg-pink mb-1 flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="p-3 bg-gradient-to-r from-bg-violet to-bg-pink rounded-xl shadow-md">
                  <FlaskConical className="w-4 h-4 text-white" />
                </div>
                Research Works
              </motion.h2>
              <div className="space-y-4">
                <motion.p
                  className="text-gray-700 leading-relaxed text-lg max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {college.details.researchWorks}
                </motion.p>
                <div className="grid gap-4">
                  {college.researchHistory.map((research, index) => (
                    <motion.a
                      key={index}
                      href={research.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-violet-200 transition-all group shadow-sm text-left"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-gray-800 font-medium group-hover:text-violet-700 text-lg flex items-center gap-3">
                          <FileText className="w-6 h-6 text-violet-500" />
                          {research.title}
                        </p>
                        <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-violet-600 transition-all" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Sports Section */}
            <motion.section
              id="sports"
              variants={sectionVariants}
              className="bg-gradient-to-r from-bg-violet/20 to-bg-pink/20 rounded-3xl shadow-lg border border-gray-100 p-6 text-center"
              {...cardHover}
            >
              <motion.h2
                className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-bg-violet to-bg-pink mb-1 flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="p-3 bg-gradient-to-r from-bg-violet to-bg-pink rounded-xl shadow-md">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                Sports & Recreation
              </motion.h2>
              <div className="space-y-6">
                <motion.p
                  className="text-gray-700 leading-relaxed text-lg max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {college.details.sportsCategories}
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {college.sports.map((sport, index) => {
                    let SportIcon;

                    switch (sport.toLowerCase()) {
                      case "cricket":
                        SportIcon = GiCricketBat;
                        break;
                      case "football":
                      case "soccer":
                        SportIcon = GiSoccerBall;
                        break;
                      case "badminton":
                        SportIcon = FaTableTennis;
                        break;
                      case "basketball":
                        SportIcon = GiBasketballBall;
                        break;
                      case "tennis":
                        SportIcon = GiTennisRacket;
                        break;
                      case "swimming":
                        SportIcon = FaSwimmer;
                        break;
                      case "rugby":
                        SportIcon = GiRugbyConversion;
                        break;
                      case "rowing":
                        SportIcon = MdRowing;
                        break;
                      default:
                        SportIcon = Dumbbell;
                    }

                    return (
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm border border-gray-200 flex items-center gap-3 justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <SportIcon className="w-8 h-8 text-violet-600" />
                        <p className="text-text-purple font-bold text-lg">
                          {sport}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
