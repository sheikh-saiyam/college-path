"use client";

import Image from "next/image";

const bentoImages = [
  {
    src: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGVzfGVufDB8fDB8fHww",
    alt: "Graduates Group 1",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://via.placeholder.com/200x400?text=Grad+2",
    alt: "Graduates Group 2",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://via.placeholder.com/400x200?text=Grad+3",
    alt: "Graduates Group 3",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://via.placeholder.com/200x200?text=Grad+4",
    alt: "Graduates Group 4",
  },
  {
    src: "https://via.placeholder.com/200x200?text=Grad+5",
    alt: "Graduates Group 5",
  },
  {
    src: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGVzfGVufDB8fDB8fHww",
    alt: "Graduates Group 6",
    className: "col-span-2 row-span-1",
  },
];

const marqueeImages = [...bentoImages, ...bentoImages, ...bentoImages];

export default function CollegeImageGallery() {
  return (
    <section className="py-12 bg-bg-lightest">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Our <span className="text-[#f6a7f5]">College</span>{" "}
          <span className="text-[#ff6575]">Graduates</span>
        </h2>

        {/* ✅ Bento Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] gap-4 mb-12">
          {bentoImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg border border-gray-200 shadow-md ${
                img.className ?? ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* ✅ Pure CSS Marquee */}
        <div className="overflow-hidden whitespace-nowrap border-t border-b border-gray-200 py-4 bg-white">
          <div className="animate-marquee flex gap-4 w-max">
            {marqueeImages.map((img, i) => (
              <div key={i} className="relative w-[180px] h-[135px] shrink-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="rounded-md border border-gray-200 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
