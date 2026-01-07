import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h1>

        <p className="text-center text-gray-600 mb-12">
          We'd love to hear from you
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-pink-500" />
              <p>123 Beauty Street, Style City</p>
            </div>

            <div className="flex gap-4">
              <Phone className="text-pink-500" />
              <p>(555) 123-4567</p>
            </div>

            <div className="flex gap-4">
              <Mail className="text-pink-500" />
              <p>info@elegancesalon.com</p>
            </div>

            <div className="flex gap-4">
              <Clock className="text-pink-500" />
              <p>
                Mon-Sat: 9AM-7PM <br /> Sun: 10AM-5PM
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <a className="text-pink-500 hover:scale-110 transition" href="#">
                <Instagram />
              </a>
              <a className="text-pink-500 hover:scale-110 transition" href="#">
                <Facebook />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-Linear-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-lg"
              ></textarea>

              <button
                onClick={() =>
                  alert("Thanks! We will contact you soon.")
                }
                className="w-full bg-Linear-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
