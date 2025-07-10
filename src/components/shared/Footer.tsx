import Link from "next/link";
import { MapPin, Mail, Phone, Send } from "lucide-react"; // Lucide React icons for contact info

export default function Footer() {
  return (
    <footer className="bg-bg-lightest text-text-black py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-8 md:pb-12 border-b border-border-gray">
          {/* About Section (Typographic Logo & Description) */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <div className="text-2xl md:text-3xl font-bold mb-4 text-bg-violet">
              College <span className="text-bg-pink">Path</span>
            </div>
            <p className="text-sm text-text-dark-gray leading-relaxed max-w-xs mx-auto md:mx-0">
              Discover your ideal college journey with College Path. We connect
              students with top institutions and essential services, simplifying
              your admission process.
            </p>
          </div>

          {/* Quick Links Section 1 (Explore) */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold mb-2 text-text-black">
              Explore
            </h3>
            <ul className="text-center md:text-left">
              <li>
                <Link
                  href="/colleges"
                  className="text-text-dark-gray hover:text-bg-violet transition-colors duration-300"
                >
                  All Colleges
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-text-dark-gray hover:text-bg-violet transition-colors duration-300"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-text-dark-gray hover:text-bg-violet transition-colors duration-300"
                >
                  Research Works
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-text-dark-gray hover:text-bg-violet transition-colors duration-300"
                >
                  Student Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section 2 (My Account) */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold mb-2 text-text-black">
              My Account
            </h3>
            <ul className="text-center md:text-left">
              <li>
                <Link
                  href="/profile"
                  className="text-text-dark-gray hover:text-bg-violet transition-colors duration-300"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/admission"
                  className="text-text-dark-gray hover:text-bg-violet transition-colors duration-300"
                >
                  Apply for Admission
                </Link>
              </li>
              <li>
                <Link
                  href="/my-college"
                  className="text-text-dark-gray hover:text-bg-violet transition-colors duration-300"
                >
                  My Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-text-dark-gray hover:text-bg-violet transition-colors duration-300"
                >
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Subscription Section */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold mb-2 text-text-black">
              Stay Connected
            </h3>
            {/* Email Subscription */}
            <div className="w-full max-w-xs">
              <label htmlFor="email-subscribe" className="sr-only">
                Enter your email address
              </label>
              <div className="flex items-center border border-border-gray rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-bg-violet">
                <input
                  type="email"
                  id="email-subscribe"
                  placeholder="Enter your email address"
                  className="w-full p-2 text-sm bg-fill-white text-text-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-bg-pink text-text-white p-2 text-sm font-medium hover:bg-red transition-colors duration-300 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-sm text-text-dark-gray space-y-2 w-full max-w-xs text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="h-4 w-4 mr-2 text-bg-pink" />
                <span>123 College Ave, University City, CA 90210</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2 text-bg-pink" />
                <span>info@collegepath.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2 text-bg-pink" />
                <span>+1 123-456-7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-text-dark-gray space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="hover:text-bg-violet transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-bg-violet transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
          <p>&copy; 2024 College Path. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
