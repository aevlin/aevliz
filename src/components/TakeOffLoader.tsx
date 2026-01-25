import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function TakeOffLoader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"READY" | "FOLD" | "TAKEOFF" | "EXIT">("READY");

  useEffect(() => {
    // Cinematic 3.5s sequence
    const sequence = [
      { t: 100, p: "READY" as const },
      { t: 800, p: "FOLD" as const },      // Plane constructs itself
      { t: 2000, p: "TAKEOFF" as const },  // Launches
      { t: 3000, p: "EXIT" as const }      // Transition out
    ];

    const timeouts = sequence.map(s => setTimeout(() => setPhase(s.p), s.t));
    const finalTimer = setTimeout(onComplete, 3200);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finalTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black text-white flex flex-col items-center justify-center overflow-hidden font-mono"
      animate={{ 
         y: phase === "EXIT" ? "-100%" : "0%",
         opacity: phase === "EXIT" ? 0 : 1
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Dynamic Grid Background - Moving down to simulate upward motion */}
      <div className="absolute inset-0 perspective-[500px] overflow-hidden opacity-30">
        <motion.div
           className="absolute inset-0 bg-[linear-gradient(transparent_0%,#ffffff_100%)] opacity-20"
           animate={{ opacity: phase === "TAKEOFF" ? 0.5 : 0 }}
        />
        <motion.div 
           className="w-full h-[200%] absolute -top-[100%] left-0 grid grid-cols-6 grid-rows-12 gap-1 border-white/10"
           animate={{ y: phase === "TAKEOFF" ? "50%" : "0%" }}
           transition={{ duration: 1.5, ease: "circIn" }}
        >
           {[...Array(72)].map((_,i) => (
             <div key={i} className="border border-white/5" />
           ))}
        </motion.div>
      </div>

      {/* Centerpiece: The Plane */}
      <div className="relative z-10">
         <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
               scale: phase === "TAKEOFF" ? 0.5 : 1, 
               opacity: 1,
               y: phase === "TAKEOFF" ? -400 : 0
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
         >
            <svg width="200" height="200" viewBox="0 0 100 100" className="drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
               
               {/* Left Wing */}
               <motion.path 
                  d="M 50 20 L 20 80 L 50 60 Z" 
                  fill="white" 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: phase === "READY" ? 0 : 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               />
               
               {/* Right Wing */}
               <motion.path 
                  d="M 50 20 L 80 80 L 50 60 Z" 
                  fill="#e2e8f0" 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: phase === "READY" ? 0 : 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               />

               {/* Center Body */}
               <motion.path 
                  d="M 50 15 L 50 90" 
                  stroke="white" 
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
               />

               {/* Thrust/Engine Effect */}
               <motion.circle 
                  cx="50" cy="85" r="2" 
                  fill="white"
                  animate={{ 
                     scale: phase === "TAKEOFF" ? [1, 20] : 1,
                     opacity: phase === "TAKEOFF" ? [1, 0] : 0
                  }}
                  transition={{ duration: 0.8 }}
               />
            </svg>
         </motion.div>
      </div>

      {/* Loading Text / Coordinates */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2 text-xs tracking-[0.3em] text-white/50">
         <motion.div animate={{ opacity: phase === "TAKEOFF" ? 0 : 1 }}>
            {phase === "READY" ? "INITIALIZING..." : phase === "FOLD" ? "ASSEMBLING" : "LAUNCH"}
         </motion.div>
         <div className="w-24 h-px bg-white/20 overflow-hidden">
            <motion.div 
               className="h-full bg-white"
               initial={{ x: "-100%" }}
               animate={{ x: "0%" }}
               transition={{ duration: 3, ease: "linear" }}
            />
         </div>
      </div>

    </motion.div>
  );
}
