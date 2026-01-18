import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import myPhoto from "figma:asset/96da5d86904a30632bffd3058c2407454130c1bb.png";

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xCard = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [-20, 0]);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white text-black relative overflow-hidden min-h-screen flex items-center justify-center">
      
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center perspective-1000">
        {/* Left: Professional Card */}
        <motion.div 
          style={{ x: xCard, opacity, rotateY, transformStyle: "preserve-3d" }}
          className="relative group"
        >
          {/* Card Container */}
          <div className="bg-white border border-black p-2 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:-translate-y-2">
            <div className="bg-gray-50 border border-black/10 p-6 flex flex-col gap-6 relative overflow-hidden">
               
               {/* Photo Section */}
               <div className="w-full aspect-square overflow-hidden border-2 border-black mb-4 bg-gray-100 flex items-center justify-center">
                  <img 
                    src={myPhoto}
                    alt="Aevlin Prince" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
               </div>

               <div className="flex justify-between items-start border-b-2 border-black pb-4">
                  <div>
                    <h2 className="text-4xl font-bebas leading-none">AEVLIN PRINCE</h2>
                    <span className="font-mono text-xs bg-black text-white px-1">UI/UX ENGINEER</span>
                  </div>
               </div>

               <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                     <span className="text-gray-500">FOCUS</span>
                     <span className="font-bold">INTERFACES & EXPERIENCE</span>
                  </div>
                  <div className="flex flex-col border-b border-gray-200 pb-1">
                     <span className="text-gray-500 mb-1">EDUCATION</span>
                     <span className="font-bold uppercase leading-tight">AMAL JYOTHI COLLEGE OF ENGINEERING</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                     <span className="text-gray-500">LOCATION</span>
                     <span className="font-bold">KERALA, INDIA</span>
                  </div>
               </div>

               {/* Barcode / ID Block for aesthetics instead of skills */}
               <div className="pt-4 flex justify-between items-end opacity-50">
                   <div className="flex gap-1 h-8 items-end">
                       {[...Array(20)].map((_,i) => (
                           <div key={i} className={`w-[2px] bg-black ${i % 3 === 0 ? 'h-full' : 'h-1/2'}`} />
                       ))}
                   </div>
                   <span className="font-mono text-[10px]">ID: 994-230-AEV</span>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Bio */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
           <div>
              <h2 className="text-6xl md:text-8xl font-bebas mb-6 flex items-center gap-4">
                 <span className="w-4 h-full bg-black block" />
                 ABOUT ME
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
                 Obsessed with the psychology of <span className="font-bold bg-black text-white px-1">User Experience</span>. 
                 I transform complex requirements into intuitive digital journeys. My process is rooted in empathy, data-driven decisions, and pixel-perfect execution to build interfaces that are not just beautiful, but deeply functional.
              </p>
           </div>
           
           {/* Minimal signature / statement instead of traits grid */}
           <div className="border-l-2 border-black pl-6 py-2">
               <p className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-2">Philosophy</p>
               <p className="font-bebas text-3xl">"DESIGN IS INTELLIGENCE MADE VISIBLE."</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
