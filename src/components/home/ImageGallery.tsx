"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "https://www.swansea.ac.uk/graduation/952-graduation-summer-2016-throw-hats-wide.jpg",
  "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyYWR1YXRpb24lMjBjZXJlbW9uaWVzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1561409958-c0e6ad782a81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYWR1YXRpb24lMjBjZXJlbW9uaWVzfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1480277406/photo/graduation-group-and-back-view-of-students-celebrate-education-success-behind-of-excited.jpg?s=612x612&w=0&k=20&c=KRfzU9eeBsUdCNUXQSIx4yf6O2PlMD9XvckFgx-hndc=",
  "https://www.masters.edu/wp-content/uploads/2023/04/CommencementDetails.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqtdP6DyiI9txmyePMpA4N_3JcrE33XmXu4271dbG5zKcvx5NWXR4tS-HG4nEmB29OD28B7LeVOMEUQfokwjQzJFL6ibSsNspOAamKujrmmxASZpacaqXhbSURFSHl6nDegokk9Tyg0Yg-/s1600/IMG_9785.JPG",
  "https://news.belmont.edu/wp-content/uploads/2022/12/i-zbhggnr-x3.jpg",
  "https://www.northampton.ac.uk/wp-content/uploads/2024/11/graduation-november-2024.jpg",
];

export default function CollegeImageGallery() {
  const duplicateCount = 2;
  const animateDistance = `-${100 / duplicateCount}%`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gradient-to-r from-[#fbfbfc] to-[#f7f7f7]"
    >
      <div className="w-[90%] lg:w-[85%] max-w-[1536px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-2 text-base bg-[#eceffe] text-text-purple border-bg-bg-violet">
              Campus Life
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#002058] mb-4">
              College Memories Gallery
            </h2>
            <p className="text-xl text-[#72768b] max-w-2xl mx-auto">
              Explore vibrant campus life through our collection of graduation
              ceremonies, events, and student activities.
            </p>
          </motion.div>
        </div>

        {/* Marquee Bento Gallery */}
        <div className="overflow-hidden relative rounded-3xl">
          <motion.div
            animate={{ x: ["0%", animateDistance] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-8 h-[800px]"
          >
            {[...Array(duplicateCount)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-3 md:grid-cols-4 grid-rows-9 md:grid-rows-5 gap-2 md:gap-4"
              >
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-xl shadow-md bg-gray-200 ${
                      // Match grid placement exactly like your HTML
                      idx === 0
                        ? "col-start-1 row-start-1 col-span-2 row-span-2 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2"
                        : idx === 1
                        ? "col-start-3 row-start-1 row-span-2 md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-3"
                        : idx === 2
                        ? "col-start-2 row-start-3 col-span-2 row-span-2 md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-2"
                        : idx === 3
                        ? "col-start-1 row-start-3 row-span-2 md:col-start-2 md:row-start-5 md:col-span-1 md:row-span-1"
                        : idx === 4
                        ? "col-start-1 row-start-5 col-span-3 row-span-2 md:col-start-3 md:row-start-4 md:col-span-2 md:row-span-2"
                        : idx === 5
                        ? "col-start-1 row-start-7 col-span-2 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-3"
                        : idx === 6
                        ? "col-start-3 row-start-7 row-span-2 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-1"
                        : idx === 7
                        ? "col-start-1 row-start-8 col-span-2 md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-2"
                        : ""
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      width={1000}
                      height={500}
                      quality={100} // Make image super clear
                      className="w-full h-full object-cover rounded-xl"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
