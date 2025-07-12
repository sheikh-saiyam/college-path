"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[var(--bg-lightest)] flex flex-col items-center justify-center px-4 text-center"
    >
      <div className="max-w-md">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto">
            <GraduationCap className="w-full h-full text-[var(--bg-pink)] animate-pulse" />
            <div className="absolute -top-4 -right-4 text-9xl font-extrabold text-[var(--bg-gray)] opacity-10 pointer-events-none">
              404
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold text-[var(--text-dark-blue)] mb-4"
        >
          Lost in the Path?
        </motion.h1>

        <p className="text-[var(--bg-gray)] text-lg mb-6">
          The page you’re looking for doesn&apos;t exist. Maybe it&apos;s
          off-campus or graduated 🎓
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/">
            <Button className="bg-gradient-to-r from-[var(--bg-violet)] to-[var(--bg-pink)] text-white rounded-full px-8 py-3 hover:opacity-90 transition duration-300 cursor-pointer">
              <ArrowLeft /> Go Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
