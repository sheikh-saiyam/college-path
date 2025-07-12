"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "https://placeholder.com/400x300?text=Graduation+Ceremony+2024",
  "https://placeholder.com/300x400?text=Campus+Life",
  "https://placeholder.com/500x300?text=Research+Lab",
  "https://placeholder.com/300x300?text=Sports+Day",
  "https://placeholder.com/400x400?text=Cultural+Festival",
  "https://placeholder.com/350x250?text=Library+Study",
  "https://placeholder.com/450x350?text=Science+Fair",
  "https://placeholder.com/300x350?text=Art+Exhibition",
];

export default function CollegeImageGallery() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gradient-to-r from-[#fbfbfc] to-[#f7f7f7]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-[#e9f6f2] text-[#68b978] border-[#68b978]">
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

        {/* Marquee Gallery */}
        <div className="overflow-hidden mb-8">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex gap-6"
          >
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={320}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 h-96"
        >
          {galleryImages.slice(0, 8).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`
                  relative rounded-2xl overflow-hidden shadow-lg cursor-pointer
                  ${index === 0 ? "col-span-2 row-span-2" : ""}
                  ${index === 2 ? "col-span-2" : ""}
                  ${index === 4 ? "row-span-2" : ""}
                `}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
