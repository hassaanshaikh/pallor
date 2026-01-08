// import { Sparkles, Menu, X } from "lucide-react";
// import { useState } from "react";
// import logo from "../assets/logo.PNG";

// export default function Header({ currentPage, setCurrentPage }) {
//   const [open, setOpen] = useState(false);

//   const nav = (page) => {
//     setCurrentPage(page);
//     setOpen(false);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <header className="fixed w-full bg-white/95 backdrop-blur shadow z-50">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <div onClick={() => nav("home")} className="flex items-center gap-2 cursor-pointer">
//           {/* <Sparkles className="text-pink-500" /> */}
//           {/* <img src={logo} alt="Logo" className="w-full h-full object-cover" /> */}
//           <span className="text-2xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//             RK GHAZI
//           </span>
//         </div>

//         <div className="hidden md:flex gap-8">
//           {["home","about","services","contact"].map(p => (
//             <button
//               key={p}
//               onClick={() => nav(p)}
//               className={currentPage === p ? "text-pink-500 font-semibold" : "text-gray-700"}
//             >
//               {p.charAt(0).toUpperCase() + p.slice(1)}
//             </button>
//           ))}
//         </div>

//         <button className="md:hidden" onClick={() => setOpen(!open)}>
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
//           {["home","about","services","contact"].map(p => (
//             <button key={p} onClick={() => nav(p)} className="block">
//               {p}
//             </button>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo1.PNG";

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

        {/* ================= LOGO ================= */}
        <div
          onClick={() => nav("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="RK Ghazi Logo"
            className="w-20 h-15 object-contain"
          />

          <span className="text-2xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            RK GHAZI
          </span>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex gap-8">
          {["home", "about", "services", "contact"].map((p) => (
            <button
              key={p}
              onClick={() => nav(p)}
              className={`capitalize transition ${
                currentPage === p
                  ? "text-pink-500 font-semibold"
                  : "text-gray-700 hover:text-pink-500"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* ================= MOBILE MENU ICON ================= */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-center">
          {["home", "about", "services", "contact"].map((p) => (
            <button
              key={p}
              onClick={() => nav(p)}
              className={`block w-full capitalize text-xl font-medium transition ${
                currentPage === p
                  ? "text-pink-500"
                  : "text-gray-700 hover:text-pink-500"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

