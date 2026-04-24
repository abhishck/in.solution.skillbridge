import React from "react";

const PILLS = [
  "Cloud Computing",
  "AI & ML",
  "Full-Stack Dev",
  "Cybersecurity",
  "Data Engineering",
  "DevOps",
  "Mobile Apps",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 py-20 sm:py-24 overflow-hidden bg-[#0a0f1c]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Orbital Visual */}
        <div className="relative aspect-square flex items-center justify-center max-w-[220px] sm:max-w-[280px] md:max-w-[320px] mx-auto">
          
          {/* Ring 1 */}
          <div
            className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-full border border-cyan-400/30 animate-spin"
            style={{ animationDuration: "18s" }}
          >
            <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-400 rounded-full top-[-4px] left-1/2 -translate-x-1/2 shadow-[0_0_12px_#00d4ff]" />
          </div>

          {/* Ring 2 */}
          <div
            className="absolute w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full border border-purple-500/40 animate-spin"
            style={{ animationDuration: "12s", animationDirection: "reverse" }}
          >
            <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-500 rounded-full top-[-4px] left-1/2 -translate-x-1/2 shadow-[0_0_12px_#b026ff]" />
          </div>

          {/* Ring 3 */}
          <div
            className="absolute w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-full border border-orange-400/40 animate-spin"
            style={{ animationDuration: "8s" }}
          >
            <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-400 rounded-full top-[-4px] left-1/2 -translate-x-1/2 shadow-[0_0_12px_#ff6b35]" />
          </div>

          {/* Center */}
          <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-extrabold text-sm sm:text-base md:text-lg shadow-[0_0_40px_rgba(0,212,255,0.4),0_0_80px_rgba(176,38,255,0.2)] z-10 hover:scale-110 transition">
            SBT
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <span className="text-xs sm:text-sm text-cyan-400 font-medium tracking-wide">
            About Us
          </span>

          <h2 className="mt-3 leading-tight text-white text-3xl sm:text-4xl md:text-5xl">
            Bridging Talent <br />
            With <span className="text-cyan-400">Technology</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-md sm:max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
            Founded with a mission to close the gap between emerging tech talent
            and real-world industry demands, SkillBridge Technologies powers
            businesses with smart IT solutions while nurturing the next
            generation of tech professionals.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
            {PILLS.map((p) => (
              <span
                key={p}
                className="text-[10px] sm:text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-cyan-400/10 hover:border-cyan-400/40 hover:text-cyan-400 transition-all"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;