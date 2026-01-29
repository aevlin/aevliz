import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function TakeOffLoader({ onComplete }: { onComplete: () => void }) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Slightly longer duration to enjoy the cuteness
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505] text-[#D9FF00] flex flex-col items-center justify-center select-none"
      initial={{ opacity: 1 }}
      animate={{ 
         y: isComplete ? "-100%" : "0%",
         borderBottomLeftRadius: isComplete ? "100%" : "0%",
         borderBottomRightRadius: isComplete ? "100%" : "0%"
      }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative">
         
         {/* Orbiting Doodles */}
         <motion.div 
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
         >
            {/* Tiny Star */}
            <svg className="absolute -top-12 left-1/2 w-6 h-6 text-white" viewBox="0 0 24 24">
               <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            {/* Squiggle */}
            <svg className="absolute -bottom-10 right-0 w-8 h-8 text-[#D9FF00]" viewBox="0 0 24 24">
               <path d="M2 12C2 12 5 2 12 12C19 22 22 12 22 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
         </motion.div>

         {/* MAIN CHARACTER: The Happy Blob */}
         <svg width="240" height="240" viewBox="0 0 200 200" className="overflow-visible">
            
            {/* Wobbly Blob Outline */}
            <motion.path
               d="M 100 20 C 140 20 180 60 180 100 C 180 140 140 180 100 180 C 60 180 20 140 20 100 C 20 60 60 20 100 20 Z"
               fill="none"
               stroke="#D9FF00"
               strokeWidth="6"
               strokeLinecap="round"
               strokeLinejoin="round"
               initial={{ pathLength: 0 }}
               animate={{ 
                   pathLength: 1,
                   d: [
                      "M 100 20 C 140 20 180 60 180 100 C 180 140 140 180 100 180 C 60 180 20 140 20 100 C 20 60 60 20 100 20 Z",
                      "M 100 25 C 150 15 175 65 175 100 C 175 135 135 185 100 185 C 65 185 25 145 25 100 C 25 55 50 35 100 25 Z",
                      "M 100 20 C 140 20 180 60 180 100 C 180 140 140 180 100 180 C 60 180 20 140 20 100 C 20 60 60 20 100 20 Z"
                   ]
               }}
               transition={{ 
                   pathLength: { duration: 1.5, ease: "easeInOut" },
                   d: { duration: 2, repeat: Infinity, ease: "easeInOut" } // Wobbly effect
               }}
            />

            {/* EYES (Blinking) */}
            <motion.g
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
            >
               <motion.circle 
                  cx="70" cy="90" r="8" fill="white" 
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ delay: 2, duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
               />
               <motion.circle 
                  cx="130" cy="90" r="8" fill="white" 
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ delay: 2, duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
               />
            </motion.g>

            {/* SMILE (Drawing on) */}
            <motion.path
               d="M 70 120 Q 100 150 130 120"
               fill="none"
               stroke="white"
               strokeWidth="6"
               strokeLinecap="round"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
            />

            {/* CHEEKS */}
            <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8 }}>
               <circle cx="55" cy="110" r="6" fill="#D9FF00" opacity="0.5" />
               <circle cx="145" cy="110" r="6" fill="#D9FF00" opacity="0.5" />
            </motion.g>

         </svg>
      </div>

      <motion.div 
         className="mt-8 flex items-center gap-1"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.5 }}
      >
         <span className="font-mono text-xs font-bold tracking-widest text-white">LOADING</span>
         <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }} 
            className="w-1.5 h-1.5 bg-[#D9FF00] rounded-full inline-block"
         />
         <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} 
            className="w-1.5 h-1.5 bg-[#D9FF00] rounded-full inline-block"
         />
         <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} 
            className="w-1.5 h-1.5 bg-[#D9FF00] rounded-full inline-block"
         />
      </motion.div>

    </motion.div>
  );
}
