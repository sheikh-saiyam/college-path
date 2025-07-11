import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-lightest border text-text-black mb-6 py-6 rounded-xl mx-auto px-4 md:px-6 lg:px-8 max-w-[1396px] shadow">
      <div className="">
        {/* Main Footer Content */}
        <div className="flex items-center justify-center pb-8 md:pb-12 border-b border-border-gray">
          {/* About Section (Typographic Logo & Description) */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center">
              <Link href="/">
                <h1 className="text-3xl font-extrabold tracking-tight font-sans bg-gradient-to-r from-bg-violet to-bg-pink text-transparent bg-clip-text transition-all duration-300 hover:scale-105 transform origin-left">
                  College Path
                </h1>
              </Link>
            </div>
            <p className="text-sm text-center text-gray-700 font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
              Discover your ideal college journey with College Path. We connect
              students with top institutions and essential services, simplifying
              your admission process.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-center items-center pt-6 text-sm text-black/60 font-medium space-y-4 md:space-y-0">
          <p>&copy; 2025 College Path. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
