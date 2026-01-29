import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, MoveHorizontal, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import Poster Assets
import img1 from "figma:asset/cc6dfb61437e98424f2f983b63d4de507eb4d6d3.png";
import img2 from "figma:asset/3745bba4d1bfc0c2dd12885f5c883cff03bee8ec.png";
import img3 from "figma:asset/713d18e433370fb2a9bf8d2c74ffabce167a063d.png";
import img4 from "figma:asset/3043ef5719405c1d985aa81c4af785ba9b315570.png";
import img5 from "figma:asset/8fc67c24ca25caa337d8296d96344d4cd052d0d8.png";
import imgNew from "figma:asset/ee8213233cb0a2302ed24bf131bbc7d87b54502b.png";

const posters = [
   { id: "01", src: imgNew, title: "Brain_Virus", tag: "DIGITAL" },
   { id: "02", src: img1, title: "Abstract_01", tag: "TYPE" },
   { id: "03", src: img2, title: "Neon_Nights", tag: "EVENT" },
   { id: "04", src: img3, title: "Cyber_Punk", tag: "ILLUST" },
   { id: "05", src: img4, title: "Glitch_Art", tag: "EXP" },
   { id: "06", src: img5, title: "Retro_Fut", tag: "COLLAGE" },
   { id: "07", src: imgNew, title: "System_Fail", tag: "WEB" },
   { id: "08", src: img1, title: "Data_Loss", tag: "PRINT" },
];

export function Posters() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Background Parallax
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={targetRef} className="py-24 bg-[#050505] text-white overflow-hidden relative min-h-screen flex flex-col">
      
      {/* BACKGROUND CHAOS */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-10 pointer-events-none select-none overflow-hidden mix-blend-color-dodge">
        <motion.div style={{ x }} className="whitespace-nowrap flex gap-8">
           {[...Array(4)].map((_, i) => (
             <h1 key={i} className="text-[25vw] font-black leading-none text-transparent stroke-text uppercase italic tracking-tighter">
               RAW DATA 
             </h1>
           ))}
        </motion.div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col h-full justify-center">
         
         {/* HEADER */}
         <div className="container mx-auto px-6 mb-12 md:mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9FF00] text-black font-bold font-mono text-xs uppercase -rotate-2 mb-4">
                     <Sparkles size={12} className="fill-black" />
                     Archive_2024
                  </div>
                  <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                     Poster <br/>
                     <span className="text-[#D9FF00] selection:bg-white selection:text-black">Archives</span>
                  </h2>
               </div>
               
               <div className="flex items-center gap-3 text-[#666] font-mono text-xs uppercase tracking-widest border-l-2 border-[#333] pl-4">
                  <MoveHorizontal size={16} className="animate-pulse text-[#D9FF00]" />
                  <span>Drag to browse</span>
               </div>
            </div>
         </div>

         {/* DRAGGABLE CAROUSEL WRAPPER */}
         <div 
            ref={containerRef} 
            className="w-full relative pl-[5vw] overflow-hidden active:cursor-grabbing cursor-grab"
         >
            {/* 
               Constraints Logic:
               We pass the containerRef to dragConstraints. 
               Framer Motion automatically handles the math:
               if children > container, it allows scrolling within bounds.
            */}
            <motion.div 
               className="flex gap-4 md:gap-8 pr-[10vw] w-max"
               drag="x"
               dragConstraints={containerRef}
               dragElastic={0.1}
               dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            >
               {posters.map((poster, index) => (
                  <GenZCard key={index} poster={poster} index={index} />
               ))}
            </motion.div>
         </div>

      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #333;
        }
      `}</style>
    </section>
  );
}

function GenZCard({ poster, index }: { poster: any, index: number }) {
   // Random rotation
   const rotation = (index % 2 === 0 ? 3 : -3) * ((index % 3) + 0.5);
   
   return (
      <motion.div 
         className="relative group min-w-[280px] md:min-w-[340px] aspect-[3/4] flex-shrink-0 select-none"
         initial={{ rotate: rotation }}
         whileHover={{ 
            rotate: 0, 
            scale: 1.05, 
            zIndex: 50,
            transition: { type: "spring", stiffness: 400, damping: 25 }
         }}
      >
         {/* The Card Structure */}
         <div className="w-full h-full bg-[#0a0a0a] border border-[#333] group-hover:border-[#D9FF00] transition-colors duration-200 relative pointer-events-none group-hover:pointer-events-auto">
            
            {/* Top Tape Strip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/10 backdrop-blur-sm transform rotate-1 z-20" />

            {/* Image Area */}
            <div className="absolute inset-2 bg-[#111] overflow-hidden">
               <ImageWithFallback 
                  src={poster.src} 
                  alt={poster.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:contrast-110 transition-all duration-500 pointer-events-none"
               />
               
               {/* Scanlines Overlay */}
               <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
            </div>

            {/* Floating Info Tag */}
            <div className="absolute bottom-4 left-0 w-full px-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30">
               <div className="bg-[#D9FF00] p-3 text-black shadow-[4px_4px_0px_#000]">
                  <h3 className="font-black text-xl uppercase leading-none tracking-tight">
                     {poster.title}
                  </h3>
                  <div className="flex justify-between items-center mt-1 border-t border-black/20 pt-1">
                     <span className="font-mono text-[10px] font-bold">{poster.tag}</span>
                     <ArrowRight size={12} />
                  </div>
               </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100">
               <div className="w-2 h-2 bg-[#D9FF00]" />
            </div>

         </div>
      </motion.div>
   );
}
