import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { ArrowUpRight, Crosshair, maximize } from "lucide-react";
import toneUpHero from "figma:asset/8075cb80e5be6a4e52021cbb4b109d4402fec1f8.png";
import toneUpLogo from "figma:asset/962efa58d190b2be51c8cdb70d5f137275c0fa9a.png";
import aevflixHero from "figma:asset/41acdb714fa1000a46e63447afa31354c55a16d4.png";
import caveraHero from "figma:asset/3f89057f37bf3828f2d1f36bf556d29c3879fea8.png";
import whatsappHero from "figma:asset/760f27b5eeb4c768dab283ca40665986b50979a0.png";

interface ProjectsProps {
  onProjectClick?: (caseStudy: string) => void;
}

function ProjectItem({ project, index, onProjectClick }: { project: any, index: number, onProjectClick?: (id: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer relative"
      onClick={() => project.caseStudy && onProjectClick?.(project.caseStudy)}
    >
      {/* Technical Frame */}
      <div className="absolute -inset-2 border border-transparent group-hover:border-black/10 transition-colors duration-300 pointer-events-none">
         {/* Corner Markers */}
         <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-black opacity-0 group-hover:opacity-100 transition-opacity" />
         <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-black opacity-0 group-hover:opacity-100 transition-opacity" />
         <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-black opacity-0 group-hover:opacity-100 transition-opacity" />
         <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-black opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 mb-4 border border-black group-hover:border-black transition-colors">
        {/* Overlay Grid */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-20 pointer-events-none bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
        />

        {/* Floating ID Tag */}
        <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 z-20">
           <span className="font-mono text-[10px] tracking-widest">PRJ-{String(index + 1).padStart(3, '0')}</span>
        </div>

        {/* Project Logo Overlay */}
        {project.logo && (
           <div className="absolute bottom-4 left-4 z-20 max-w-[120px]">
              <img src={project.logo} alt="brand logo" className="w-full h-auto drop-shadow-md grayscale group-hover:grayscale-0 transition-all duration-500 invert group-hover:invert-0" />
           </div>
        )}

        {/* View Project Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="bg-white border border-black px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-bebas text-lg tracking-wide text-black">VIEW CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
           </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex justify-between items-start border-b border-gray-200 pb-4 group-hover:border-black transition-colors">
        <div>
           <div className="flex items-center gap-2 mb-1">
              <h3 className="text-3xl font-bebas leading-none">{project.title}</h3>
              <div className="h-px w-8 bg-black/20 group-hover:bg-black transition-colors" />
           </div>
           <p className="font-mono text-xs text-gray-500 max-w-xs">{project.description}</p>
        </div>
        <div className="text-right">
           <span className="block font-mono text-[10px] text-gray-400 mb-1">CATEGORY</span>
           <span className="block font-bebas text-lg">{project.category}</span>
        </div>
      </div>
      
      {/* Tech Stack - Mini */}
      <div className="flex gap-2 mt-3 overflow-hidden">
         {project.tags.map((tag: string) => (
            <span key={tag} className="font-mono text-[9px] border border-gray-200 px-1 text-gray-400 group-hover:border-black group-hover:text-black transition-colors">
               {tag}
            </span>
         ))}
      </div>
    </motion.div>
  );
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const containerRef = useRef(null);
  
  // Subtle parallax for title
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const filters = ["ALL", "MOBILE", "WEB", "BRANDING", "RESEARCH"];

  const projects = [
    {
      title: "TONEUP",
      category: "MOBILE",
      description: "Music instrument learning app gamifying education.",
      image: toneUpHero,
      logo: toneUpLogo,
      tags: ["MOBILE UI", "FIGMA", "EDUCATION"],
      caseStudy: "toneup",
    },
    {
      title: "AEVFLIX",
      category: "WEB",
      description: "Streaming platform reimagining the Netflix experience.",
      image: aevflixHero,
      tags: ["WEB UI", "FIGMA", "ENTERTAINMENT"],
      caseStudy: "aevflix",
    },
    {
      title: "CAVERA",
      category: "WEB",
      description: "Sophisticated landing page for a clothing brand.",
      image: caveraHero,
      tags: ["WEB DESIGN", "FIGMA", "FASHION"],
      caseStudy: "cavera",
    },
    {
      title: "WHATSAPP 90S",
      category: "MOBILE",
      description: "Nostalgic concept reimagining WhatsApp with retro aesthetics.",
      image: whatsappHero,
      tags: ["MOBILE UI", "FIGMA", "RETRO"],
      caseStudy: "whatsapp1990s",
    },
  ];

  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white text-black relative min-h-screen">
       {/* Decorative Lines */}
       <div className="absolute top-0 left-6 right-6 h-px bg-black/10" />
       <div className="absolute bottom-0 left-6 right-6 h-px bg-black/10" />
       <div className="absolute left-6 top-0 bottom-0 w-px bg-black/10 hidden md:block" />
       <div className="absolute right-6 top-0 bottom-0 w-px bg-black/10 hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-2 border-black pb-8">
           <motion.div style={{ y: yTitle }}>
              <span className="block font-mono text-xs mb-2 text-gray-500 tracking-widest">SELECTED WORKS // 2023-24</span>
              <h2 className="text-8xl md:text-9xl font-bebas leading-[0.8]">
                 PROJECTS
              </h2>
           </motion.div>

           {/* Filters */}
           <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 md:mt-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-mono text-xs tracking-widest transition-all duration-300 relative group py-1 ${
                    activeFilter === filter ? "text-black font-bold" : "text-gray-400 hover:text-black"
                  }`}
                >
                  [{filter}]
                  {activeFilter === filter && (
                     <motion.div 
                        layoutId="activeFilter"
                        className="absolute bottom-0 left-0 w-full h-px bg-black"
                     />
                  )}
                </button>
              ))}
           </div>
        </div>

        {/* Projects Grid - Masonry-ish feel but strict grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
           {filteredProjects.map((project, index) => (
              <ProjectItem 
                key={project.title} 
                project={project} 
                index={index} 
                onProjectClick={onProjectClick} 
              />
           ))}
        </div>
        
        {/* Footer info for section */}
        <div className="mt-24 pt-6 border-t border-black/10 flex justify-between font-mono text-[10px] text-gray-400 uppercase">
           <span>Index: {filteredProjects.length} Items</span>
           <span>Status: All Systems Operational</span>
        </div>
      </div>
    </section>
  );
}
