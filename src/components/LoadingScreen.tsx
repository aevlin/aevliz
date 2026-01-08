import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Linkedin, Instagram, Github, MapPin } from "lucide-react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    return () => {
      clearInterval(progressTimer);
    };
  }, [onLoadComplete]);

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/aevlin-prince/", label: "LinkedIn" },
    { icon: Instagram, url: "https://www.instagram.com/prince_the_artist/", label: "Instagram" },
    { icon: Github, url: "https://github.com/aevlinprince", label: "GitHub" },
  ];

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center overflow-hidden px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Center content */}
          <div className="relative z-10 text-center mb-8">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-black leading-[0.85] text-[50px] md:text-[80px] lg:text-[100px]">
                AEVLIN
                <br />
                <span className="text-outline">PRINCE</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8 md:mb-12"
            >
              <div className="bg-black text-white px-6 py-3 inline-block shadow-brutal">
                <span className="uppercase tracking-wider text-sm md:text-base">
                  UI/UX Designer × Developer
                </span>
              </div>
            </motion.div>

            {/* Progress Counter */}
            <motion.div
              className="text-[100px] md:text-[140px] lg:text-[180px] leading-none tabular-nums mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {Math.floor(progress)}
              <span className="text-5xl md:text-7xl lg:text-8xl align-top">%</span>
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Loading
            </motion.div>
          </div>

          {/* Social Links Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-white shadow-brutal p-4 md:p-6 relative z-10"
          >
            <div className="flex items-center gap-4 md:gap-6">
              {/* Location */}
              <div className="flex items-center gap-2 pr-4 md:pr-6 border-r-2 border-black">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm uppercase tracking-wider">Kottayam, IN</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 md:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 md:w-10 md:h-10 bg-black text-white flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Corner brackets */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-24 md:h-24 border-l-4 border-t-4 border-black" />
          <div className="absolute top-6 right-6 md:top-10 md:right-10 w-16 h-16 md:w-24 md:h-24 border-r-4 border-t-4 border-black" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-16 h-16 md:w-24 md:h-24 border-l-4 border-b-4 border-black" />
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 md:w-24 md:h-24 border-r-4 border-b-4 border-black" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
