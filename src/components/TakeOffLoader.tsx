import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Crisp, high-fidelity commercial airliner silhouette
const Airliner = () => (
  <svg viewBox="0 0 600 200" className="w-full h-full text-white fill-current">
    {/* Main Fuselage */}
    <path d="M 520 90 C 560 100, 560 120, 520 130 L 80 130 C 40 130, 20 110, 80 90 Z" />
    
    {/* Tail / Vertical Stabilizer - Classic shape */}
    <path d="M 85 90 L 120 20 L 180 20 L 160 90 Z" />
    
    {/* Wing (Foreground) - Angled for takeoff look */}
    <path d="M 260 100 L 220 150 L 380 150 L 420 100 Z" />
    
    {/* Engine (Under wing) */}
    <path d="M 280 140 L 280 155 L 340 155 L 345 140 Z" />
    
    {/* Cockpit */}
    <path d="M 500 95 L 500 105 L 525 105 C 530 105, 530 95, 525 95 Z" fillOpacity="0.5" />
    
    {/* Windows */}
    {[...Array(15)].map((_, i) => (
      <circle key={i} cx={180 + i * 20} cy="105" r="3" fill="black" />
    ))}
  </svg>
);

export function TakeOffLoader({ onComplete }: { onComplete: () => void }) {
  const [status, setStatus] = useState<"ROLL" | "V1" | "ROTATE" | "CLIMB" | "COMPLETE">("ROLL");

  useEffect(() => {
    // A clean, logical takeoff timeline
    const timeline = [
      { t: 100, s: "ROLL" as const },      // Start moving
      { t: 2000, s: "V1" as const },       // Speed committed
      { t: 3000, s: "ROTATE" as const },   // Nose up
      { t: 4000, s: "CLIMB" as const },    // Lift off
      { t: 5500, s: "COMPLETE" as const }, // Done
    ];

    const timers = timeline.map(item => setTimeout(() => setStatus(item.s), item.t));
    const finalTimer = setTimeout(onComplete, 6000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finalTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
      animate={{ 
        y: status === "COMPLETE" ? "-100%" : "0%"
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1] 
      }}
    >
      {/* 
        Container ensures the plane is centered but has room to climb.
        We use a fixed aspect ratio container to keep things predictable.
      */}
      <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center border-y border-white/10 bg-black">
        
        {/* RUNWAY STRIP: A clear reference point for speed */}
        <div className="absolute bottom-20 left-0 right-0 h-px bg-white/20" /> {/* Ground line */}
        
        <div className="absolute bottom-20 left-0 right-0 h-4 overflow-hidden">
          <motion.div 
            className="flex gap-40 absolute top-0 left-0"
            animate={{ x: status === "ROLL" ? -500 : -5000 }}
            transition={{ 
              duration: status === "ROLL" ? 5 : 2,
              ease: status === "ROLL" ? "easeIn" : "linear",
              repeat: Infinity 
            }}
          >
             {[...Array(30)].map((_, i) => (
                <div key={i} className="w-20 h-1 bg-white" />
             ))}
          </motion.div>
        </div>

        {/* THE PLANE */}
        <motion.div
           className="relative z-10 w-[400px] md:w-[600px] h-[200px]"
           initial={{ x: 0, y: 30 }} // Starting position on "ground"
           animate={{
             x: status === "ROLL" ? 0 : 
                status === "V1" ? 0 : 
                status === "ROTATE" ? 50 : 600, // Move forward on climb
             y: status === "ROTATE" ? 0 : 
                status === "CLIMB" ? -250 : 30, // Lift up significantly
             rotate: status === "ROTATE" ? -10 : 
                     status === "CLIMB" ? -20 : 0 // Pitch up
           }}
           transition={{
             x: { duration: 3, ease: "linear" },
             y: { duration: 2, ease: "easeInOut" },
             rotate: { duration: 1.5, ease: "easeInOut" }
           }}
        >
           <Airliner />
        </motion.div>

        {/* SPEEDOMETER / INFO (Kept separate to avoid visual overlap) */}
        <div className="absolute top-10 right-10 text-right">
           <div className="text-white text-6xl font-bebas tracking-tighter">
             <Counter 
               from={0} 
               to={status === "ROLL" ? 80 : status === "V1" ? 140 : status === "ROTATE" ? 160 : 250} 
               duration={2} 
             />
             <span className="text-lg ml-2 opacity-50 font-mono">KTS</span>
           </div>
           <div className="text-white/50 font-mono text-sm tracking-widest mt-1">
             STATUS: {status}
           </div>
        </div>

      </div>

    </motion.div>
  );
}

// Simple counter for the speed display
function Counter({ from, to, duration }: { from: number, to: number, duration: number }) {
  const [val, setVal] = useState(from);
  useEffect(() => {
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setVal(Math.floor(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);
  return <span>{val}</span>;
}
