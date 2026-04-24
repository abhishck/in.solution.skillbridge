import React, { useState } from "react";
import { motion } from "framer-motion";

const PERKS = [
  {
    icon: "🎯",
    title: "Live Project Experience",
    desc: "Work on real client projects from day one — no coffee-fetching, just real coding and design.",
  },
  {
    icon: "🧑‍🏫",
    title: "Expert Mentorship",
    desc: "Weekly 1-on-1 sessions with senior engineers, designers, and product managers.",
  },
  {
    icon: "📜",
    title: "Certified + Letter of Rec",
    desc: "Industry-recognized certificate and a strong recommendation letter upon completion.",
  },
  {
    icon: "💰",
    title: "Paid Stipend",
    desc: "Competitive monthly stipend with performance-based bonuses.",
  },
];

const DOMAINS = [
  "Full-Stack Web Development",
  "Mobile App Development",
  "AI / Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Data Analytics",
  "UI/UX Design",
];

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

export default function Internship() {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="internship"
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
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="text-[10px] sm:text-xs tracking-widest px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
            OPPORTUNITIES
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Internship <span className="text-yellow-400">Program</span>
          </h2>

          <p className="text-gray-400 max-w-md sm:max-w-xl mx-auto mt-4 text-sm sm:text-base">
            Kickstart your tech career with hands-on experience, real projects,
            and mentorship from industry experts.
          </p>
        </motion.div>

        {/* Card */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            
            {/* Left */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-xs sm:text-sm mb-6">
                What you get when you join us:
              </p>

              <div className="space-y-4">
                {PERKS.map((p, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    whileHover={{ x: 6 }}
                    className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition"
                  >
                    <span className="text-lg sm:text-xl">{p.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white text-xs sm:text-sm">
                        {p.title}
                      </h4>
                      <p className="text-gray-400 text-[11px] sm:text-xs mt-1 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Apply for Internship
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-6">
                Rolling admissions — we review applications every 2 weeks.
              </p>

              {submitted ? (
                <div className="bg-cyan-400/10 border border-cyan-400/30 p-5 sm:p-6 rounded-xl text-center text-cyan-300 font-semibold text-sm">
                  ✅ Application submitted successfully!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="FULL NAME" name="name" onChange={handleChange} />
                    <Input label="EMAIL" name="email" type="email" onChange={handleChange} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="PHONE" name="phone" onChange={handleChange} />
                    <Input label="COLLEGE" name="college" onChange={handleChange} />
                  </div>

                  <div>
                    <label className="text-[10px] sm:text-xs text-gray-400 font-semibold">
                      DOMAIN OF INTEREST
                    </label>
                    <select
                      name="domain"
                      onChange={handleChange}
                      className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs sm:text-sm focus:border-cyan-400 outline-none"
                    >
                      <option>Select a track...</option>
                      {DOMAINS.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] sm:text-xs text-gray-400 font-semibold">
                      WHY SKILLBRIDGE?
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      onChange={handleChange}
                      placeholder="Tell us about your passion and goals..."
                      className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs sm:text-sm focus:border-cyan-400 outline-none"
                    />
                  </div>

                  <button className="w-full mt-4 py-3 rounded-full text-sm sm:text-base font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-lg hover:shadow-cyan-400/30 transition">
                    Submit Application →
                  </button>

                </form>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-[10px] sm:text-xs text-gray-400 font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs sm:text-sm focus:border-cyan-400 outline-none"
      />
    </div>
  );
}