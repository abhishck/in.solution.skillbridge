import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CARDS = [
  {
    icon: "📧",
    title: "Email Us",
    detail: "contact.skillbridgesolutions@gmail.com",
    link: "mailto:contact.skillbridgesolutions@gmail.com",
  },
  {
    icon: "📞",
    title: "Call Us",
    detail: "+91 9569065009",
    link: "tel:+919569065009",
  },
  {
    icon: "📍",
    title: "Location",
    detail: "Hazratganj, Lucknow, UP, India",
  },
  {
    icon: "🕐",
    title: "Office Hours",
    detail: "Mon–Sat, 9 AM – 7 PM IST",
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    color: "cyan",
    link: "https://www.linkedin.com/company/skillbridge-tech-solutions/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BHNiei8NAQlKMiXP2mxBkrA%3D%3D",
  },
  {
    label: "Twitter / X",
    color: "purple",
    link: "https://twitter.com",
  },
  {
    label: "Instagram",
    color: "orange",
    link: "https://www.instagram.com",
  },
  {
    label: "GitHub",
    color: "green",
    link: "https://github.com",
  },
];

const socialStyles = {
  cyan: "hover:border-cyan-400/50 hover:text-cyan-400",
  purple: "hover:border-purple-400/50 hover:text-purple-400",
  orange: "hover:border-orange-400/50 hover:text-orange-400",
  green: "hover:border-emerald-400/50 hover:text-emerald-400",
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>contact | Internships & Career Opportunities</title>

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
        id="contact"
        className="relative px-4 sm:px-6 py-20 sm:py-24 overflow-hidden bg-[#070b14] text-center text-white"
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
            viewport={{ once: true }}
            className="mb-10 sm:mb-12"
          >
            <span className="text-xs sm:text-sm text-cyan-400 font-medium">
              Get In Touch
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
              Have a project in mind or want to explore partnership? We'd love
              to hear from you.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {CARDS.map((c, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 backdrop-blur-sm hover:border-cyan-400/40 transition"
              >
                <div className="text-2xl sm:text-3xl mb-3">{c.icon}</div>

                <h4 className="font-semibold text-white text-sm sm:text-base">
                  {c.title}
                </h4>

                {c.link ? (
                  <a
                    href={c.link}
                    className="text-xs sm:text-sm text-gray-400 mt-1 block hover:text-cyan-400 transition"
                  >
                    {c.detail}
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {c.detail}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 sm:mt-12"
          >
            {SOCIALS.map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-semibold text-gray-300 transition ${socialStyles[s.color]}`}
              >
                {s.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
