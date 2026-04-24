import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const STATS = [
  { num: 200, suffix: "+", label: "Projects Delivered", color: "text-orange-400" },
  { num: 50, suffix: "+", label: "Happy Clients", color: "text-cyan-400" },
  { num: 120, suffix: "+", label: "Interns Placed", color: "text-purple-400" },
];

export default function Hero() {
  const statsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix;

          let cur = 0;
          const step = Math.ceil(target / 60);

          const timer = setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = cur + suffix;
            if (cur >= target) clearInterval(timer);
          }, 25);

          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    statsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative flex items-center justify-center text-center px-4 sm:px-6 py-20 mt-20 sm:py-24 md:py-28 overflow-hidden bg-[#0b0f19] text-white">

      {/* Background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(0,212,255,0.07),transparent_65%),
            radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(176,38,255,0.1),transparent_60%),
            radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(255,107,53,0.08),transparent_60%)]" 
      />

      {/* Grid */}
      <div className="absolute inset-0 
        bg-[linear-gradient(rgba(0,212,255,0.04)_1px,transparent_1px),
            linear-gradient(90deg,rgba(0,212,255,0.04)_1px,transparent_1px)]
        bg-[size:40px_40px] sm:bg-[size:60px_60px]" 
      />

      {/* Animated Orbs (Responsive) */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-purple-500/20 blur-[60px] sm:blur-[80px] rounded-full top-10 left-5 sm:left-10"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-cyan-400/20 blur-[60px] sm:blur-[80px] rounded-full top-28 right-5 sm:right-10"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-orange-400/20 blur-[60px] sm:blur-[80px] rounded-full bottom-10 left-1/2 -translate-x-1/2"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl"
      >

        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 mb-5 sm:mb-6 text-[10px] sm:text-xs font-semibold uppercase tracking-widest rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
          Innovating the Digital Future
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 sm:mb-6"
        >
          We Build <span className="text-orange-400">Digital</span> <br />
          Solutions That <span className="text-cyan-400">Scale</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl mx-auto mb-6 sm:mb-8"
        >
          SkillBridge Solutions helps local businesses grow with CRM systems,
          automation, and modern websites.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
            Explore Services
          </button>

          <button className="w-full sm:w-auto border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition">
            Join Internship ✦
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          {STATS.map((s, i) => (
            <div key={i}>
              <div
                className={`text-xl sm:text-2xl font-extrabold ${s.color}`}
                data-target={s.num}
                data-suffix={s.suffix}
                ref={(el) => (statsRef.current[i] = el)}
              >
                0{s.suffix}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}