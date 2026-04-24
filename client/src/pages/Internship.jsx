import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

const PERKS = [
  {
    icon: "🎯",
    title: "Live Project Experience",
    desc: "Work on real client projects from day one — no coffee-fetching, just real coding and design.",
  },
  {
    icon: "🧑‍🏫",
    title: "Expert Mentorship",
    desc: "Weekly 1-on-1 sessions with senior engineers.",
  },
  {
    icon: "📜",
    title: "Certified + Letter of Rec",
    desc: "Industry-recognized certificate and recommendation letter.",
  },
  {
    icon: "💰",
    title: "Paid Stipend",
    desc: "Performance-based stipend and bonuses.",
  },
];

const DOMAINS = [
  "Web Development",
  "Mobile App Development",
  "AI / Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Data Analytics",
  "UI/UX Design",
];

export default function Internship() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    domain: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.college ||
      !form.domain
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!form.domain) {
  toast.error("Please select a domain");
  return;
}

    const toastId = toast.loading("Submitting application...");

    try {
      const res = await axios.post(
        "https://in-solution-skillbridge.onrender.com/api/applications",
        form,
      );

      if (res.data.success) {
        toast.success("🎉 Application submitted successfully!", {
          id: toastId,
        });

        setSubmitted(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          college: "",
          domain: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);

      toast.error("❌ Submission failed. Try again.", {
        id: toastId,
      });
    }
  };

  return (
    <section className="px-4 py-20 bg-[#070d18] text-white"
     id="internship"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Internship <span className="text-yellow-400">Program</span>
          </h2>

          <div className="space-y-4">
            {PERKS.map((p, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <span>{p.icon}</span>
                <div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Apply for Internship</h3>

          {submitted ? (
            <div className="bg-green-400/10 border border-green-400/30 p-5 rounded-xl text-green-300 font-semibold text-sm text-center">
              🎉 Application submitted successfully! Check your email.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="FULL NAME"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <Input
                  label="EMAIL"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="PHONE"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <Input
                  label="COLLEGE"
                  name="college"
                  value={form.college}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">DOMAIN</label>
                <select
                  name="domain"
                  value={form.domain}
                  onChange={handleChange}
                  className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2"
                >
                  <option className="text-black" value="">Select a track...</option>
                  {DOMAINS.map((d) => (
                    <option className="text-black" key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-400">MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2"
                />
              </div>

              <button
                disabled={loading}
                className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application →"}
              </button>

              {submitted && (
                <p className="text-green-400 text-sm mt-3 text-center">
                  ✔ We’ve received your application. Check your email.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-xs text-gray-400">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2"
      />
    </div>
  );
}
