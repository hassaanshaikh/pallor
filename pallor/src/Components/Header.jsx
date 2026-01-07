import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const nav = (page) => {
    setCurrentPage(page);
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur shadow z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={() => nav("home")} className="flex items-center gap-2 cursor-pointer">
          <Sparkles className="text-pink-500" />
          <span className="text-2xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Elegance Salon
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          {["home","about","services","contact"].map(p => (
            <button
              key={p}
              onClick={() => nav(p)}
              className={currentPage === p ? "text-pink-500 font-semibold" : "text-gray-700"}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          {["home","about","services","contact"].map(p => (
            <button key={p} onClick={() => nav(p)} className="block">
              {p}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
