import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative px-4 sm:px-6 py-8 sm:py-10 overflow-hidden bg-[#050811] text-center text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-60px] sm:top-[-80px] left-1/2 -translate-x-1/2 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-60px] sm:bottom-[-80px] left-1/2 -translate-x-1/2 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Logo */}
        <div className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide">
          Skill<span className="text-cyan-400">Bridge</span> Technologies
        </div>

        {/* Copy */}
        <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
          © {new Date().getFullYear()} SkillBridge Technologies. Built with{" "}
          <span className="text-orange-400">♥</span> in Lucknow, India.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;