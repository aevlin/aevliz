import { motion, useScroll, useTransform } from "motion/react";
import { Maximize } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  
  // Parallax Layers
  const yBack = useTransform(scrollY, [0, 1000], [0, 500]);
  const yMid = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-white text-black"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
      `}</style>

      {/* Background Grid - Architectural/Design feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      
      {/* Corner Markers */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-black" />
      <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-black" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-black" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-black" />

      {/* Main Content */}
      <motion.div 
        style={{ y: yMid }}
        className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto px-6"
      >
        <div className="flex items-center gap-2 mb-6 opacity-60">
           <Maximize className="w-4 h-4" />
           <span className="font-mono text-xs tracking-[0.2em] uppercase">Visual Interface Engineer</span>
        </div>

        {/* UPDATED FONT SIZE: text-[24vw] for mobile */}
        <h1 className="text-[24vw] md:text-[16rem] font-bebas leading-[0.85] tracking-tighter text-black z-20 relative mix-blend-hard-light">
          AEVLIN <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/40">PRINCE</span>
        </h1>

        <div className="mt-12 max-w-2xl text-center">
           <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed">
             Crafting <span className="font-semibold border-b-2 border-black">digital experiences</span> with precision and purpose. 
             Specialized in high-fidelity UI and intuitive user flows.
           </p>
        </div>
      </motion.div>

      {/* Bottom Area */}
      <motion.div 
        style={{ y: yBack }}
        className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-4"
      >
         <div className="h-16 w-px bg-black/20" />
         <span className="font-mono text-xs tracking-widest animate-bounce">SCROLL</span>
      </motion.div>
    </section>
  );
}
