import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const PROJECTS = [
  {
    icon: "🏥",
    title: "MedTrack — Healthcare Platform",
    desc: "A real-time patient management system with AI diagnostics assistance for a chain of 12 clinics across Uttar Pradesh.",
    gradient: "from-[#0f1a2e] to-[#0d2240]",
    patternColor: "text-cyan-400",
    tags: [
      { label: "React", color: "cyan" },
      { label: "Node.js", color: "green" },
      { label: "AI/ML", color: "purple" },
    ],
  },
  {
    icon: "🛒",
    title: "ShopNow — E-Commerce Engine",
    desc: "Scalable multi-vendor marketplace handling 50K+ daily transactions with smart recommendation algorithms.",
    gradient: "from-[#1a0f2e] to-[#220d40]",
    patternColor: "text-purple-400",
    tags: [
      { label: "Next.js", color: "purple" },
      { label: "AWS", color: "orange" },
      { label: "PostgreSQL", color: "cyan" },
    ],
  },
  {
    icon: "📈",
    title: "FinDash — Analytics Suite",
    desc: "Executive-level financial intelligence dashboard with predictive analytics for a leading NBFC in Lucknow.",
    gradient: "from-[#2e1a0f] to-[#401800]",
    patternColor: "text-orange-400",
    tags: [
      { label: "Python", color: "orange" },
      { label: "TensorFlow", color: "green" },
      { label: "Power BI", color: "cyan" },
    ],
  },
];

const tagStyles = {
  cyan: "bg-cyan-400/10 text-cyan-400",
  purple: "bg-purple-400/10 text-purple-400",
  orange: "bg-orange-400/10 text-orange-400",
  green: "bg-emerald-400/10 text-emerald-400",
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Internships & Career Opportunities</title>

        <meta
          name="description"
          content="Find internships, training programs, and career opportunities with Skill Bridge Solutions."
        />

        <meta
          name="keywords"
          content="internships, internship platform, career opportunities, students, jobs, training"
        />

        <meta property="og:title" content="Skill Bridge Solutions" />

        <meta
          property="og:description"
          content="Explore internships and career opportunities for students and freshers."
        />

        <meta property="og:url" content="https://www.skillbridgesolutions.in" />
      </Helmet>
      <section
        id="portfolio"
        className="relative px-4 sm:px-6 py-20 sm:py-24 overflow-hidden bg-[#070d18] text-white"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-[-100px] left-[-80px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-[-100px] right-[-80px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-purple-500/10 blur-3xl rounded-full" />
          <div className="absolute top-[40%] left-[40%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-orange-500/5 blur-3xl rounded-full" />

          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-12 text-center"
          >
            <span className="text-xs sm:text-sm text-cyan-400 font-medium">
              Our Work
            </span>

            <h2 className="mt-3 text-white text-3xl sm:text-4xl md:text-5xl">
              Featured <span className="text-purple-400">Projects</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
              A glimpse into the solutions we've crafted for clients across
              industries.
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
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative backdrop-blur-sm"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 transition duration-300" />

                {/* Thumbnail */}
                <div
                  className={`h-[160px] sm:h-[180px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
                >
                  <div
                    className={`absolute inset-0 opacity-20 ${p.patternColor} bg-[repeating-linear-gradient(45deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]`}
                  />

                  <motion.span
                    className="text-4xl sm:text-5xl z-10"
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {p.icon}
                  </motion.span>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5 relative z-10">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span
                        key={t.label}
                        className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[t.color]}`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
