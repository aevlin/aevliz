import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-32 px-6">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating geometric shapes - more subtle */}
      <motion.div
        className="absolute top-32 right-32 w-40 h-40 border-[3px] border-neutral-300 rotate-12 hidden lg:block"
        animate={{
          rotate: [12, 22, 12],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-48 left-32 w-32 h-32 bg-neutral-200 hidden lg:block"
        animate={{
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Following cursor element - subtle */}
      <motion.div
        className="absolute w-[500px] h-[500px] border border-neutral-200 pointer-events-none hidden lg:block"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 150,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto bg-[rgba(0,0,0,0)]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wider text-sm">Available for Work</span>
          </motion.div>

          {/* Main heading with better spacing */}
          <div className="space-y-6 mt-40">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-black"
            >
              AEVLIN
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-black text-outline -mt-8 lg:-mt-12"
            >
              PRINCE
            </motion.h1>
          </div>

          {/* Subtitle with moving background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative inline-block mt-32"
          >
            <div className="absolute inset-0 bg-neutral-900 -skew-x-12 scale-x-110 scale-y-125" />
            <h3 className="relative text-white px-16 py-8 uppercase tracking-[0.4em]">
              UI / UX&nbsp;&nbsp;&nbsp;Designer&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;Developer
            </h3>
          </motion.div>

          {/* Description with better spacing */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="max-w-3xl text-neutral-600 text-xl leading-relaxed mt-32"
          >
            Based&nbsp;&nbsp;&nbsp;in&nbsp;&nbsp;&nbsp;Kerala,&nbsp;&nbsp;&nbsp;India. I create digital experiences that are bold, functional, 
            and impossible to ignore. Currently studying at Amal Jyothi College of Engineering 
            and crafting interfaces that make people go "wow".
          </motion.p>

          {/* Divider Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full h-[2px] bg-black mt-48"
          />

          {/* CTA buttons with better spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-6 mt-24"
          >
            <a
              href="#work"
              className="group bg-black text-white px-10 py-5 inline-flex items-center gap-3 uppercase tracking-wider text-sm hover:bg-neutral-800 transition-colors shadow-brutal hover:translate-x-2 hover:translate-y-2 hover:shadow-none"
            >
              View Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="bg-white text-black px-10 py-5 uppercase tracking-wider text-sm border-4 border-black hover:bg-black hover:text-white transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1mAapn-mZcyVfpkAVTHk5SHgYPQZ5FLsu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[rgb(0,0,0)] px-10 py-5 border-4 border-black hover:bg-black hover:text-white transition-colors uppercase tracking-wider text-sm"
            >
              Resume
            </a>
          </motion.div>

          {/* Stats with better spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap gap-16 lg:gap-24 mt-48"
          >
            <div>
              <div className="text-7xl lg:text-8xl font-bold text-black font-['Bebas_Neue'] mb-2">6+</div>
              <div className="text-neutral-600 uppercase text-sm font-bold tracking-wider">Organizations</div>
            </div>
            <div>
              <div className="text-7xl lg:text-8xl font-bold text-black font-['Bebas_Neue'] mb-2">4</div>
              <div className="text-neutral-600 uppercase text-sm font-bold tracking-wider">Case Studies</div>
            </div>
            <div>
              <div className="text-7xl lg:text-8xl font-bold text-black font-['Bebas_Neue'] mb-2">100%</div>
              <div className="text-neutral-600 uppercase text-sm font-bold tracking-wider">Passion</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - much lower with more space */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Scroll Down</span>
          <div className="w-[2px] h-20 bg-black" />
        </div>
      </motion.div>
    </section>
  );
}