import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-8 items-start">
          {/* About */}
          <div>
            
            <span className="text-xl font-bold mb-4 bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              RK GHAZI
            </span>

            <p className="text-gray-400 text-sm mb-4 mt-4">
              RK GHAZI is a modern beauty based on Hyderabad, known for quality products, expert professionals, and a luxurious experience.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <MapPin className="w-4 h-4 text-white" />
              <span>Hyderabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Phone className="w-4 h-4 text-white" />
              <span>+92 311 3927677</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-white" />
              <span>info@safaiwala.pk</span>
            </div>
          </div>

          {/* quik Links */}
          <div className="justify-self-start">
            <span className="text-xl font-bold mb-4 bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              QUIK LINKS
            </span>

              <div className="space-y-2 capitalize mt-4">
                <Link to="/" className="block text-gray-400 hover:text-white"> Home </Link>
                <Link to="/about" className="block text-gray-400 hover:text-white"> About </Link>
                <Link to="/services" className="block text-gray-400 hover:text-white"> Services </Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white"> Contact </Link>
              </div>
          </div>

          {/* Subscribe */}
          <div>
             <span className="text-xl font-bold mb-4 bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Subscribe
            </span>
            <p className="text-gray-400 text-sm mb-4 mt-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button className="bg-white text-purple-700 font-semibold px-4 rounded">
                Go
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-400">
              Call Now:{" "}
              <span className="text-white">+92 311 3927677</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-6 ">
        © 2026 RK GHAZI All Rights Reserved.
      </p>

    </footer>
  )
}