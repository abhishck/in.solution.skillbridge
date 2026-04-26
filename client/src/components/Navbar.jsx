import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = ["about", "services", "portfolio", "internship", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 transition-all duration-300
      ${
        scrolled
          ? "bg-[#080c14]/95 border-b border-cyan-400/20 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-[#080c14]/70 border-b border-cyan-400/10 backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <div className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
        Skill<span className="text-cyan-400">Bridge Tech Solutions</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="relative px-3 py-1.5 text-sm text-gray-300 transition group"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}

            {/* underline animation */}
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </button>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ y: -2, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollTo("internship")}
        className="hidden md:block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-orange-500/30"
      >
        Apply Now
      </motion.button>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50"
      >
        <span
          className={`w-6 h-[2px] bg-white transition ${
            menuOpen ? "rotate-45 translate-y-[5px]" : ""
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-white transition ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-white transition ${
            menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#080c14]/95 backdrop-blur-xl border-b border-cyan-400/20 flex flex-col items-center py-6 gap-5 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-300 hover:text-cyan-400 text-lg transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("internship")}
              className="mt-2 bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold shadow-lg shadow-orange-500/30"
            >
              Apply Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}