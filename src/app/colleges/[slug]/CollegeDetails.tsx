"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ExternalLink,
  GraduationCap,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "admission", label: "Admission", icon: Calendar },
    { id: "events", label: "Events", icon: Users },
    { id: "research", label: "Research", icon: GraduationCap },
    { id: "sports", label: "Sports", icon: Trophy },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "admission",
        "events",
        "research",
        "sports",
      ];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-slate-50">
      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-violet-100 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/colleges"
                className="flex items-center gap-2 text-violet-600 hover:text-violet-800 transition-colors group font-medium"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Colleges</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg"
                        : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-4 h-4" />
                    {section.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Mobile Table of Contents */}
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-violet-100 p-4">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-violet-600" />
                Quick Navigation
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white"
                          : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-4 h-4" />
                      {section.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-violet-100 p-6">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-violet-600" />
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          activeSection === section.id
                            ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg"
                            : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
                        }`}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        <Icon className="w-4 h-4" />
                        {section.label}
                      </motion.button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8"
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
                      className="w-full max-w-4xl h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
                  </motion.div>
                </div>

                <motion.h1
                  className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black bg-gradient-to-r from-violet-600 via-pink-600 to-violet-800 bg-clip-text text-transparent leading-tight"
                  variants={sectionVariants}
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  {college.name}
                </motion.h1>

                <motion.div
                  className="mt-6 flex flex-wrap justify-center gap-6 text-sm"
                  variants={sectionVariants}
                >
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold text-gray-700">
                      {college.rating} Rating
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                    <GraduationCap className="w-4 h-4 text-violet-600" />
                    <span className="font-semibold text-gray-700">
                      {college.researchCount} Research Projects
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Overview Section */}
              <motion.section
                id="overview"
                variants={sectionVariants}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-100 p-8 sm:p-10"
                {...cardHover}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  Overview
                </motion.h2>
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {college.details.description}
                </motion.p>
              </motion.section>

              {/* Admission Section */}
              <motion.section
                id="admission"
                variants={sectionVariants}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-100 p-8 sm:p-10"
                {...cardHover}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  Admission Process
                </motion.h2>
                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-2xl p-6 border border-violet-200"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="font-bold text-violet-900 mb-3 text-lg">
                      📅 Admission Dates
                    </h3>
                    <p className="text-violet-800 font-semibold text-lg">
                      {college.admissionDates}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">
                      📋 Application Process
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {college.details.admissionProcess}
                    </p>
                  </motion.div>
                </div>
              </motion.section>

              {/* Events Section */}
              <motion.section
                id="events"
                variants={sectionVariants}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-100 p-8 sm:p-10"
                {...cardHover}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Events & Activities
                </motion.h2>
                <div className="space-y-6">
                  <motion.p
                    className="text-gray-700 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {college.details.eventsDetails}
                  </motion.p>
                  <div className="grid gap-4">
                    {college.events.map((event, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-r from-pink-50 to-violet-50 rounded-2xl p-6 border-l-4 border-pink-400 shadow-md"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <p className="text-pink-800 font-semibold text-lg flex items-center gap-3">
                          <span className="text-2xl">🎉</span>
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
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-100 p-8 sm:p-10"
                {...cardHover}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  Research Works
                </motion.h2>
                <div className="space-y-6">
                  <motion.p
                    className="text-gray-700 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
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
                        className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-2xl p-6 border border-violet-200 hover:border-violet-300 transition-all group shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-violet-800 font-semibold group-hover:text-violet-900 text-lg flex items-center gap-3">
                            <span className="text-2xl">🔬</span>
                            {research.title}
                          </p>
                          <ExternalLink className="w-5 h-5 text-violet-600 group-hover:text-violet-700 group-hover:scale-110 transition-all" />
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
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-100 p-8 sm:p-10"
                {...cardHover}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  Sports & Recreation
                </motion.h2>
                <div className="space-y-6">
                  <motion.p
                    className="text-gray-700 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {college.details.sportsCategories}
                  </motion.p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {college.sports.map((sport, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-violet-100 via-pink-100 to-violet-100 rounded-2xl p-6 text-center shadow-lg border border-violet-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                      >
                        <Trophy className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                        <p className="text-violet-800 font-bold text-lg">
                          {sport}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
