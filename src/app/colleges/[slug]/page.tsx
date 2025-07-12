import NotFound from "@/app/not-found";
import { colleges } from "@/lib/colleges";
import React from "react";

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default async function CollegeDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const college = colleges.find((c) => slugify(c.name) === slug);

  if (!college) return <NotFound />;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 max-w-4xl mx-auto bg-[var(--bg-lightest)] rounded-lg shadow-lg">
      <img
        src={college.image}
        alt={college.name}
        className="w-full max-w-xl rounded-lg object-cover mb-8 shadow-md"
      />

      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-bg-violet to-bg-pink bg-clip-text text-transparent mb-6">
        {college.name}
      </h1>

      <p className="text-[var(--bg-gray)] max-w-3xl mb-8 text-center">
        {college.details.description}
      </p>

      <section className="w-full max-w-3xl mb-8 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-[var(--bg-pink)]">
            Admission Process
          </h2>
          <p className="text-[var(--bg-gray)]">
            <strong>Dates:</strong> {college.admissionDates}
          </p>
          <p className="text-[var(--bg-gray)]">
            {college.details.admissionProcess}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-[var(--bg-pink)]">
            Events
          </h2>
          <ul className="list-disc list-inside text-[var(--bg-gray)] space-y-1">
            {college.events.map((event, i) => (
              <li key={i}>{event}</li>
            ))}
          </ul>
          <p className="mt-2 text-[var(--bg-gray)]">
            {college.details.eventsDetails}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-[var(--bg-pink)]">
            Research Works
          </h2>
          <ul className="list-disc list-inside text-[var(--bg-gray)] space-y-1">
            {college.researchHistory.map(({ title, link }, i) => (
              <li key={i}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--bg-violet)] hover:underline"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[var(--bg-gray)]">
            {college.details.researchWorks}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-[var(--bg-pink)]">
            Sports Categories
          </h2>
          <p className="text-[var(--bg-gray)]">
            {college.details.sportsCategories}
          </p>
          <ul className="list-disc list-inside text-[var(--bg-gray)] space-y-1 mt-2">
            {college.sports.map((sport, i) => (
              <li key={i}>{sport}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
