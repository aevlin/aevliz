import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function GameLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 150);

    const textInterval = setInterval(() => {
      const texts = ["LOADING ASSETS...", "CALIBRATING OPTICS...", "SYNCING NEURAL NET...", "ESTABLISHING UPLINK...", "SYSTEM READY"];
      setText(texts[Math.floor(Math.random() * texts.length)]);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        onComplete();
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center text-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="w-full max-w-md px-6">
        <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-widest">
          <span>{text}</span>
          <span>{Math.min(100, Math.floor(progress))}%</span>
        </div>
        <div className="h-1 w-full bg-gray-200 overflow-hidden">
          <motion.div
            className="h-full bg-black"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>
        <div className="mt-8 grid grid-cols-4 gap-2 opacity-50">
           {[...Array(4)].map((_, i) => (
             <motion.div 
               key={i}
               className="h-1 bg-black"
               animate={{ opacity: [0.2, 1, 0.2] }}
               transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
             />
           ))}
        </div>
      </div>
      <h1 className="absolute bottom-12 text-6xl font-bebas tracking-tighter opacity-10 select-none">
        AEVLIN OS v2.0
      </h1>
    </motion.div>
  );
}
