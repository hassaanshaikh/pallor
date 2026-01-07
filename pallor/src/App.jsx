import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "about" && <About />}
      {currentPage === "services" && <Services />}
      {currentPage === "contact" && <Contact />}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
