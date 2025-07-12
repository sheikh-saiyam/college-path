import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gradient-to-br from-[#fbfbfc] py-6 to-[#f7f7f7]">
      <footer className="bg-gradient-to-r from-bg-violet/10 to-bg-pink/10 border text-text-black mb-0 py-6 rounded-xl mx-auto px-4 md:px-6 lg:px-8 max-w-[1396px] shadow">
        <div className="">
          {/* Main Footer Content */}
          <div className="flex items-center justify-center pb-3 border-b border-border-gray">
            {/* About Section (Typographic Logo & Description) */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center">
                <Link href="/">
                  <h1 className="text-3xl font-extrabold tracking-tight font-sans bg-gradient-to-r from-bg-violet to-bg-pink text-transparent bg-clip-text transition-all duration-300 hover:scale-105 transform origin-left">
                    College Path
                  </h1>
                </Link>
              </div>
              <p className="text-base text-center text-[#6b6e7e] mb-4 max-w-2xl mx-auto leading-relaxed">
                Explore top colleges worldwide, discover research opportunities,
                and find your academic home with our comprehensive college
                search platform.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-center items-center pt-6 text-sm text-text-black/75 font-medium space-y-4 md:space-y-0">
            <p>&copy; 2025 College Path. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
