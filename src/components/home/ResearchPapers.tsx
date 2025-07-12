"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

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

export default function ResearchPapers() {
  return (
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
  );
}
