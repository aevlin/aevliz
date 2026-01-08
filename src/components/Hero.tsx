import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Sparkles, Download, Mail } from "lucide-react";
import { DoodleArrow, DoodleSparkle, DoodleStar, DoodleCircle, DoodleNameCircle } from "./Doodles";
import { useState, useEffect } from "react";

export function Hero() {
  const [designerType, setDesignerType] = useState(0);
  const designerTypes = ["product", "web", "UI/UX", "brand"];

  useEffect(() => {
    const interval = setInterval(() => {
      setDesignerType((prev) => (prev + 1) % designerTypes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-20 pb-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />

      {/* Doodle decorations */}
      <motion.div
        className="absolute top-32 right-32 text-purple-400 opacity-40 hidden lg:block"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 0.4, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <DoodleStar />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 text-pink-400 opacity-40 hidden lg:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <DoodleCircle />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-16 text-orange-400 opacity-30 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <DoodleSparkle />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-16 text-purple-400 opacity-30 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <DoodleSparkle />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/90 backdrop-blur-sm rounded-full border-2 border-purple-200 shadow-lg text-sm sm:text-base">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Available for freelance work
              </span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-6"
          >
            <p className="text-gray-700 mb-3">Hi there! I'm</p>
            <h1 className="relative inline-block">
              <motion.div
                className="absolute inset-0 text-pink-400/60 scale-110"
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <DoodleNameCircle />
              </motion.div>
              <span className="relative block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2 text-[48px] sm:text-[56px] md:text-[64px] px-4 sm:px-8 font-[Parisienne] font-bold">
                Aevlin Prince
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-6 sm:mt-8"
            >
              <div className="inline-block">
                <p className="text-gray-700 flex items-center gap-2 sm:gap-3 justify-center font-[Afacad] font-bold">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={designerType}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-[24px] sm:text-[28px] md:text-[32px]"
                    >
                      {designerTypes[designerType]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[24px] sm:text-[28px] md:text-[32px] font-[Afacad]">designer</span>
                </p>
                <motion.div
                  className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full mt-2"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            className="mb-8 sm:mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Crafting delightful digital experiences with a blend of creativity, empathy, and 
            pixel-perfect precision. I turn complex problems into beautiful, intuitive solutions 
            that users love. ✨
          </motion.p>

          <motion.div
            className="flex gap-3 sm:gap-4 justify-center flex-wrap mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a
              href="#work"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href="#contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 rounded-full border-2 border-purple-300 hover:border-pink-400 hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1mAapn-mZcyVfpkAVTHk5SHgYPQZ5FLsu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm">Scroll</span>
          <ArrowDown className="w-6 h-6 text-gray-500" />
        </div>
      </motion.div>
    </section>
  );
}
