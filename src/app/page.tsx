import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Search, Send, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-white font-inter">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-bg-lightest border-b border-border-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-bg-violet">College</span>{" "}
                <span className="text-bg-pink">Path</span>
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-text-black hover:text-bg-violet transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-text-black hover:text-bg-violet transition-colors"
              >
                Colleges
              </a>
              <a
                href="#"
                className="text-text-black hover:text-bg-violet transition-colors"
              >
                Admission
              </a>
              <a
                href="#"
                className="text-text-black hover:text-bg-violet transition-colors"
              >
                My College
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="rounded-lg border-border-gray text-text-black hover:bg-bg-light bg-transparent"
              >
                Login
              </Button>
              <Button className="bg-bg-violet hover:bg-bg-pink text-text-white rounded-lg">
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-black mb-6">
            Find Your Future,{" "}
            <span className="text-bg-violet">Path to Success</span>
          </h1>
          <p className="text-xl text-text-black mb-12 max-w-3xl mx-auto">
            Discover your ideal college journey with personalized
            recommendations and comprehensive booking services.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search for a college name..."
                className="h-14 text-lg bg-fill-white border-border-gray rounded-lg"
              />
            </div>
            <Button className="h-14 px-8 bg-bg-violet hover:bg-bg-pink text-text-white rounded-lg">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Colleges Section */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-black text-center mb-12">
            Featured Colleges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* College Card 1 */}
            <div className="bg-fill-white rounded-lg shadow-lg overflow-hidden border border-border-gray">
              <Image
                src="https://placehold.co/400x250/72768b/ffffff?text=Stanford+University"
                alt="Stanford University"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-black mb-2">
                  Stanford University
                </h3>
                <p className="text-text-black mb-2">
                  <strong>Application Deadline:</strong> Aug 30, 2024
                </p>
                <p className="text-text-black mb-2">
                  <strong>Open House:</strong> July 15, 2024
                </p>
                <p className="text-text-black mb-2">
                  <strong>Research:</strong> Pioneering AI Research
                </p>
                <p className="text-text-black mb-4">
                  <strong>Sports:</strong> Football, Basketball
                </p>
                <Button className="w-full bg-bg-pink hover:bg-bg-violet text-text-white rounded-lg">
                  Details
                </Button>
              </div>
            </div>

            {/* College Card 2 */}
            <div className="bg-fill-white rounded-lg shadow-lg overflow-hidden border border-border-gray">
              <Image
                src="https://placehold.co/400x250/72768b/ffffff?text=MIT"
                alt="MIT"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-black mb-2">
                  Massachusetts Institute of Technology
                </h3>
                <p className="text-text-black mb-2">
                  <strong>Application Deadline:</strong> Sep 15, 2024
                </p>
                <p className="text-text-black mb-2">
                  <strong>Open House:</strong> Aug 20, 2024
                </p>
                <p className="text-text-black mb-2">
                  <strong>Research:</strong> Quantum Computing Breakthroughs
                </p>
                <p className="text-text-black mb-4">
                  <strong>Sports:</strong> Rowing, Soccer
                </p>
                <Button className="w-full bg-bg-pink hover:bg-bg-violet text-text-white rounded-lg">
                  Details
                </Button>
              </div>
            </div>

            {/* College Card 3 */}
            <div className="bg-fill-white rounded-lg shadow-lg overflow-hidden border border-border-gray">
              <Image
                src="https://placehold.co/400x250/72768b/ffffff?text=Harvard+University"
                alt="Harvard University"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-black mb-2">
                  Harvard University
                </h3>
                <p className="text-text-black mb-2">
                  <strong>Application Deadline:</strong> Oct 1, 2024
                </p>
                <p className="text-text-black mb-2">
                  <strong>Open House:</strong> Sep 10, 2024
                </p>
                <p className="text-text-black mb-2">
                  <strong>Research:</strong> Medical Innovation Hub
                </p>
                <p className="text-text-black mb-4">
                  <strong>Sports:</strong> Crew, Tennis
                </p>
                <Button className="w-full bg-bg-pink hover:bg-bg-violet text-text-white rounded-lg">
                  Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Image Gallery Section */}
      <section className="py-20 bg-bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-black text-center mb-12">
            Our Graduates, Our Pride
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/300x200/b4a7f5/ffffff?text=Class+of+2023"
                alt="Graduates Class of 2023"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/300x200/b4a7f5/ffffff?text=Engineering+Grads"
                alt="Engineering Graduates"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/300x200/b4a7f5/ffffff?text=Medical+School"
                alt="Medical School Graduates"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/300x200/b4a7f5/ffffff?text=Business+Alumni"
                alt="Business Alumni"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Research Papers Section */}
      <section className="py-20 bg-bg-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-black text-center mb-12">
            Groundbreaking Research
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-fill-white p-6 rounded-lg border border-border-gray">
              <h3 className="text-xl font-bold text-text-black mb-3">
                Artificial Intelligence in Healthcare: Revolutionary Diagnostic
                Tools
              </h3>
              <p className="text-text-black mb-4">
                Exploring how machine learning algorithms are transforming
                medical diagnosis and patient care through predictive analytics
                and automated screening processes.
              </p>
              <a
                href="#"
                className="text-bg-violet hover:text-bg-pink transition-colors font-medium"
              >
                Read More →
              </a>
            </div>

            <div className="bg-fill-white p-6 rounded-lg border border-border-gray">
              <h3 className="text-xl font-bold text-text-black mb-3">
                Sustainable Energy Solutions: Next-Generation Solar Technology
              </h3>
              <p className="text-text-black mb-4">
                Breakthrough research in photovoltaic efficiency and energy
                storage systems that could revolutionize renewable energy
                adoption worldwide.
              </p>
              <a
                href="#"
                className="text-bg-violet hover:text-bg-pink transition-colors font-medium"
              >
                Read More →
              </a>
            </div>

            <div className="bg-fill-white p-6 rounded-lg border border-border-gray">
              <h3 className="text-xl font-bold text-text-black mb-3">
                Quantum Computing Applications in Cryptography
              </h3>
              <p className="text-text-black mb-4">
                Investigating the implications of quantum computing on current
                encryption methods and developing quantum-resistant security
                protocols.
              </p>
              <a
                href="#"
                className="text-bg-violet hover:text-bg-pink transition-colors font-medium"
              >
                Read More →
              </a>
            </div>

            <div className="bg-fill-white p-6 rounded-lg border border-border-gray">
              <h3 className="text-xl font-bold text-text-black mb-3">
                Climate Change Mitigation Through Urban Planning
              </h3>
              <p className="text-text-black mb-4">
                Comprehensive study on how smart city design and green
                infrastructure can significantly reduce urban carbon footprints
                and improve quality of life.
              </p>
              <a
                href="#"
                className="text-bg-violet hover:text-bg-pink transition-colors font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-black text-center mb-12">
            What Our Students Say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-fill-white p-6 rounded-lg border border-border-gray">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-text-black mb-4">
                College Path made my application process so much easier. The
                platform is intuitive and the support team was incredibly
                helpful throughout my journey.
              </p>
              <div>
                <p className="font-bold text-text-black">Sarah Johnson</p>
                <p className="text-text-black">Stanford University</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-fill-white p-6 rounded-lg border border-border-gray">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-text-black mb-4">
                I found my dream college through College Path. The detailed
                information and booking system saved me countless hours of
                research and planning.
              </p>
              <div>
                <p className="font-bold text-text-black">Michael Chen</p>
                <p className="text-text-black">MIT</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-fill-white p-6 rounded-lg border border-border-gray">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-text-black mb-4">
                The comprehensive college profiles and real student reviews
                helped me make an informed decision. Highly recommend College
                Path to all prospective students!
              </p>
              <div>
                <p className="font-bold text-text-black">Emily Rodriguez</p>
                <p className="text-text-black">Harvard University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-darker-gray text-text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-bg-violet">College</span>{" "}
                <span className="text-bg-pink">Path</span>
              </h3>
              <p className="text-text-dark-gray mb-4">
                Discover your ideal college journey with College Path. We
                connect students with top institutions and essential services,
                simplifying your admission process.
              </p>
            </div>

            {/* Explore Section */}
            <div>
              <h4 className="text-lg font-semibold text-text-white mb-4">
                Explore
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-text-dark-gray hover:text-bg-violet transition-colors"
                  >
                    All Colleges
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-dark-gray hover:text-bg-violet transition-colors"
                  >
                    Upcoming Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-dark-gray hover:text-bg-violet transition-colors"
                  >
                    Research Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-dark-gray hover:text-bg-violet transition-colors"
                  >
                    Student Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* My Account Section */}
            <div>
              <h4 className="text-lg font-semibold text-text-white mb-4">
                My Account
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-text-dark-gray hover:text-bg-violet transition-colors"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-dark-gray hover:text-bg-violet transition-colors"
                  >
                    Apply for Admission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-dark-gray hover:text-bg-violet transition-colors"
                  >
                    My Applications
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-dark-gray hover:text-bg-violet transition-colors"
                  >
                    Login / Register
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Subscription Section */}
            <div>
              <h4 className="text-lg font-semibold text-text-white mb-4">
                Stay Connected
              </h4>

              {/* Email Subscription */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-fill-white text-text-black border-border-gray rounded-lg"
                  />
                  <Button className="bg-bg-pink hover:bg-bg-violet text-text-white rounded-lg">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-bg-pink" />
                  <span className="text-text-dark-gray">
                    123 College Ave, University City, CA 90210
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-bg-pink" />
                  <span className="text-text-dark-gray">
                    info@collegepath.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-bg-pink" />
                  <span className="text-text-dark-gray">+1 123-456-7890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border-gray mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-text-dark-gray hover:text-bg-violet transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-text-dark-gray hover:text-bg-violet transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <p className="text-text-dark-gray">
              © 2024 College Path. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
