import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full bg-[#1a1a2e] backdrop-blur shadow z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* ================= LOGO ================= */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="RK Ghazi Logo"
            className="w-12 h-12 object-contain"
          />

          <span className="text-2xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            RK GHAZI
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`capitalize transition ${
                location.pathname === item.path
                  ? "text-pink-400 font-bold"
                  : "text-white/90 hover:text-pink-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ================= MOBILE ICON ================= */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-white/10 px-6 py-6 space-y-4 text-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block text-xl font-medium transition ${
                location.pathname === item.path
                  ? "text-pink-400"
                  : "text-white/90 hover:text-pink-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
