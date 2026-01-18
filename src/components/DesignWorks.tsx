import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useRef, useState } from "react";
import bugsToBucksImg from "figma:asset/8fc67c24ca25caa337d8296d96344d4cd052d0d8.png";
import firewalledGardenImg from "figma:asset/cc6dfb61437e98424f2f983b63d4de507eb4d6d3.png";
import scrapDriveImg from "figma:asset/3043ef5719405c1d985aa81c4af785ba9b315570.png";
import didYouKnowImg from "figma:asset/ee8213233cb0a2302ed24bf131bbc7d87b54502b.png";
import torqueImg from "figma:asset/9137115c1d00f4217d4f828859652240628bb14d.png";
import nilavilakkuImg from "figma:asset/3745bba4d1bfc0c2dd12885f5c883cff03bee8ec.png";

interface Design {
  title: string;
  category: string;
  image: string;
}

function MasonryItem({ design, index, onClick }: { design: Design, index: number, onClick: (d: Design) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onClick(design)}
      className="group relative cursor-pointer break-inside-avoid mb-8"
    >
      <div className="relative overflow-hidden bg-gray-100">
        <motion.img
          src={design.image}
          alt={design.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
           <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <ArrowUpRight className="w-6 h-6 text-black" />
           </div>
        </div>
      </div>

      <div className="mt-3 flex justify-between items-start opacity-60 group-hover:opacity-100 transition-opacity">
        <h3 className="text-xl font-bebas tracking-wide">{design.title}</h3>
        <span className="text-xs font-mono text-gray-500 border border-gray-300 px-2 py-0.5 rounded-full">{design.category}</span>
      </div>
    </motion.div>
  );
}

export function DesignWorks() {
  const containerRef = useRef(null);
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [100, -50]);

  const designs = [
    { title: "Bugs to Bucks", category: "IEEE Event", image: bugsToBucksImg },
    { title: "Firewalled Garden", category: "Poster", image: firewalledGardenImg },
    { title: "Did You Know?", category: "Series", image: didYouKnowImg },
    { title: "Torque", category: "Racing", image: torqueImg },
    { title: "Nilavilakku", category: "Cultural", image: nilavilakkuImg },
    { title: "Scrap Drive", category: "Campaign", image: scrapDriveImg },
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 bg-gray-50 text-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-black pb-8">
           <motion.div style={{ y: yTitle }}>
             <span className="block font-mono text-xs tracking-widest mb-2 text-gray-500">VISUAL ARCHIVES</span>
             <h2 className="text-[12vw] md:text-9xl font-bebas leading-[0.8]">DESIGN WORKS</h2>
           </motion.div>
           <p className="hidden md:block font-bebas text-2xl text-gray-400 max-w-sm text-right">
              Explore a collection of graphic experiments and promotional assets.
           </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
           {designs.map((design, i) => (
             <MasonryItem key={i} design={design} index={i} onClick={setSelectedDesign} />
           ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedDesign(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/20 rounded-full transition-colors">
               <X className="w-8 h-8" />
            </button>

            <motion.div 
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.9, y: 20 }}
               className="max-h-[90vh] max-w-4xl w-full bg-white p-2 overflow-hidden"
               onClick={(e) => e.stopPropagation()}
            >
               <img 
                 src={selectedDesign.image} 
                 alt={selectedDesign.title} 
                 className="w-full h-full object-contain max-h-[85vh]"
               />
               <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 font-bebas text-xl">
                  {selectedDesign.title}
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
