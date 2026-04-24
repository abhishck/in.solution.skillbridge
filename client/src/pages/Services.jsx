import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Scalable, secure cloud architectures on AWS, Azure, and GCP.",
    color: "cyan",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "Custom ML models and intelligent automation tools.",
    color: "purple",
  },
  {
    icon: "💻",
    title: "Web & App Development",
    desc: "High-performance apps built with modern tech stacks.",
    color: "orange",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Threat monitoring, audits, and protection systems.",
    color: "yellow",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    desc: "Dashboards, pipelines, and BI solutions.",
    color: "green",
  },
  {
    icon: "⚙️",
    title: "DevOps & CI/CD",
    desc: "Automation, deployment pipelines, and scaling infra.",
    color: "pink",
  },
];

const styles = {
  cyan: {
    border: "hover:border-cyan-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(0,212,255,0.2)]",
    icon: "bg-cyan-400/10 text-cyan-400",
    glow: "from-cyan-500/10 to-transparent",
  },
  purple: {
    border: "hover:border-purple-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(176,38,255,0.2)]",
    icon: "bg-purple-400/10 text-purple-400",
    glow: "from-purple-500/10 to-transparent",
  },
  orange: {
    border: "hover:border-orange-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(255,107,53,0.2)]",
    icon: "bg-orange-400/10 text-orange-400",
    glow: "from-orange-500/10 to-transparent",
  },
  yellow: {
    border: "hover:border-yellow-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(255,214,0,0.2)]",
    icon: "bg-yellow-400/10 text-yellow-400",
    glow: "from-yellow-500/10 to-transparent",
  },
  green: {
    border: "hover:border-emerald-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(0,255,150,0.2)]",
    icon: "bg-emerald-400/10 text-emerald-400",
    glow: "from-emerald-500/10 to-transparent",
  },
  pink: {
    border: "hover:border-pink-400/50",
    shadow: "hover:shadow-[0_20px_60px_rgba(255,80,120,0.2)]",
    icon: "bg-pink-400/10 text-pink-400",
    glow: "from-pink-500/10 to-transparent",
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative px-4 sm:px-6 py-20 sm:py-24 overflow-hidden bg-[#070b14]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-[-80px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-purple-500/10 blur-3xl rounded-full" />
        <div className="absolute top-[40%] left-[40%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-orange-500/5 blur-3xl rounded-full" />

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-14"
        >
          <span className="text-xs sm:text-sm text-cyan-400 font-medium">
            What We Do
          </span>

          <h2 className="mt-3 text-white text-3xl sm:text-4xl md:text-5xl">
            Our Core <span className="text-orange-400">Services</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
            End-to-end IT services built to solve real problems and deliver measurable results.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left"
        >
          {SERVICES.map((s, i) => {
            const c = styles[s.color];

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`group relative rounded-2xl p-5 sm:p-6 bg-white/5 border border-white/10 backdrop-blur-sm transition ${c.border} ${c.shadow}`}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${c.glow} transition duration-300`}
                />

                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-xl mb-3 sm:mb-4 ${c.icon}`}
                >
                  {s.icon}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;