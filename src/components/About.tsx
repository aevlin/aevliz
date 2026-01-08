import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-neutral-50 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-black text-white px-5 py-2.5 mb-8 shadow-brutal">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider text-xs">About</span>
          </div>

          <h2 className="text-black leading-[0.85] text-[60px] md:text-[100px] mb-8">
            ABOUT
            <br />
            <span className="text-outline">ME</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16"
        >
          {/* Left - Story */}
          <div className="space-y-5 md:space-y-6">
            <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed">
              A <span className="bg-black text-white px-2 py-1">UI/UX designer</span> and developer from Kottayam, Kerala, 
              currently studying at Amal Jyothi College of Engineering.
            </p>
            
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              I craft digital experiences that merge aesthetics with functionality. 
              Every pixel, every interaction, every detail matters in creating 
              meaningful design that resonates with users.
            </p>

            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              My approach combines user research, visual design, and technical 
              implementation to build interfaces that are not just beautiful, 
              but truly work for the people using them.
            </p>
          </div>

          {/* Right - Quick Facts */}
          <div className="space-y-4 md:space-y-5">
            <div className="bg-black text-white p-6 md:p-8 shadow-brutal">
              <div className="text-5xl md:text-6xl mb-3 leading-none">110+</div>
              <div className="text-sm md:text-base uppercase tracking-wider text-neutral-400">
                Projects Completed
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 shadow-brutal">
              <div className="text-2xl md:text-3xl mb-3 uppercase tracking-wider">Student</div>
              <div className="text-sm md:text-base text-neutral-600">
                Amal Jyothi College of Engineering
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 shadow-brutal">
              <div className="text-2xl md:text-3xl mb-3 uppercase tracking-wider">Based In</div>
              <div className="text-sm md:text-base text-neutral-600">
                Kottayam, Kerala, India
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 shadow-brutal"
        >
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-6">My Belief</div>
            <blockquote className="text-2xl md:text-3xl text-neutral-800 leading-relaxed">
              "Great design is invisible. It solves problems, creates delight, 
              and makes technology feel <span className="text-outline">human</span>."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}