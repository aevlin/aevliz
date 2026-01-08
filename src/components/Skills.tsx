import { motion } from "motion/react";
import { Wrench } from "lucide-react";

export function Skills() {
  const designSkills = [
    "Figma",
    "Adobe XD",
    "Canva",
    "Prototyping",
    "Wireframing",
    "User Research",
    "Visual Design",
    "Typography",
    "Color Theory",
    "Layout Design"
  ];

  const devSkills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "Responsive Design",
    "Git & GitHub",
    "Web Animation",
    "UI Development",
    "Frontend Dev"
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
      {/* Black Box Container */}
      <div className="max-w-7xl mx-auto bg-black p-8 md:p-12 lg:p-16 shadow-brutal relative">
        {/* Grid background */}
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white text-black px-5 py-2.5 mb-8 shadow-brutal">
              <Wrench className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider text-xs">Toolkit</span>
            </div>

            <h2 className="text-white leading-[0.85] text-[60px] md:text-[100px] mb-6">
              MY
              <br />
              <span className="text-outline-white">SKILLS</span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
              A diverse skill set spanning design, development, and creative problem-solving.
            </p>
          </motion.div>

          {/* Infinite Scrolling Skills - First Row */}
          <div className="mb-8 md:mb-12">
            <div className="text-xl md:text-2xl uppercase tracking-wider mb-6 text-neutral-400">
              Design Skills
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex gap-4 md:gap-6 animate-scroll-left">
                {[...designSkills, ...designSkills, ...designSkills].map((skill, index) => (
                  <div
                    key={`design-${index}`}
                    className="flex-shrink-0 bg-white text-black px-8 md:px-10 py-6 md:py-8 shadow-brutal"
                  >
                    <div className="text-xl md:text-2xl uppercase tracking-wider whitespace-nowrap">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Infinite Scrolling Skills - Second Row (Opposite Direction) */}
          <div className="mb-12 md:mb-16">
            <div className="text-xl md:text-2xl uppercase tracking-wider mb-6 text-neutral-400">
              Development Skills
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex gap-4 md:gap-6 animate-scroll-right">
                {[...devSkills, ...devSkills, ...devSkills].map((skill, index) => (
                  <div
                    key={`dev-${index}`}
                    className="flex-shrink-0 bg-white text-black px-8 md:px-10 py-6 md:py-8 shadow-brutal"
                  >
                    <div className="text-xl md:text-2xl uppercase tracking-wider whitespace-nowrap">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { value: "20+", label: "Skills" },
              { value: "2", label: "Disciplines" },
              { value: "110+", label: "Projects" },
              { value: "3 Yrs", label: "Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-black text-white p-6 md:p-8 shadow-brutal text-center"
              >
                <div className="text-4xl md:text-5xl mb-2 md:mb-3 leading-none">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}