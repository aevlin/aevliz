import { motion } from "motion/react";
import { useState } from "react";
import { Grid3x3, ArrowUpRight } from "lucide-react";
import aevflixLogo from "figma:asset/811724d66642564227af9e8c0be5e21098f06ba7.png";
import toneUpLogo from "figma:asset/962efa58d190b2be51c8cdb70d5f137275c0fa9a.png";
import caveraLogo from "figma:asset/7967b8a04ba5f5e1d66b00807451573dc19f5823.png";
import aevflixHero from "figma:asset/41acdb714fa1000a46e63447afa31354c55a16d4.png";
import toneUpHero from "figma:asset/8075cb80e5be6a4e52021cbb4b109d4402fec1f8.png";
import caveraHero from "figma:asset/3f89057f37bf3828f2d1f36bf556d29c3879fea8.png";
import whatsappHero from "figma:asset/760f27b5eeb4c768dab283ca40665986b50979a0.png";

interface ProjectsProps {
  onProjectClick?: (caseStudy: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "ToneUp",
      category: "MOBILE APP",
      description: "Music learning app with gamified interface and intuitive design patterns",
      image: toneUpHero,
      logo: toneUpLogo,
      tags: ["UI/UX", "Mobile", "Education"],
      year: "2024",
      caseStudy: "toneup",
    },
    {
      title: "AEVFLIX",
      category: "WEB PLATFORM",
      description: "Streaming service redesign with enhanced discovery and personalization",
      image: aevflixHero,
      logo: aevflixLogo,
      tags: ["UI/UX", "Web", "Entertainment"],
      year: "2024",
      caseStudy: "aevflix",
    },
    {
      title: "Cavera",
      category: "E-COMMERCE",
      description: "Fashion brand landing page combining elegance with modern minimalism",
      image: caveraHero,
      logo: caveraLogo,
      tags: ["Web Design", "Branding", "Fashion"],
      year: "2024",
      caseStudy: "cavera",
    },
    {
      title: "WhatsApp 1990s",
      category: "CONCEPT DESIGN",
      description: "Nostalgic reimagining of WhatsApp with authentic retro mobile aesthetics",
      image: whatsappHero,
      logo: null,
      tags: ["UI/UX", "Mobile", "Retro"],
      year: "2024",
      caseStudy: "whatsapp1990s",
    },
  ];

  return (
    <section className="relative py-48 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-48">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4">
              <Grid3x3 className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-sm">Selected Work</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black mb-16 leading-[0.9]"
          >
            PROJECTS THAT
            <br />
            <span className="text-outline">MAKE IMPACT</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl text-neutral-600 max-w-3xl leading-relaxed"
          >
            UI/UX design concepts and case studies created entirely in Figma
          </motion.p>
        </div>

        {/* Projects - Magazine Editorial Style */}
        <div className="space-y-64">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => project.caseStudy && onProjectClick?.(project.caseStudy)}
                className="cursor-pointer group"
              >
                <div className={`grid md:grid-cols-12 gap-16 items-center ${isEven ? "" : "md:grid-flow-dense"}`}>
                  {/* Image */}
                  <div className={`md:col-span-7 ${isEven ? "" : "md:col-start-6"}`}>
                    <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Logo overlay for ToneUp */}
                      {project.logo && project.title === "ToneUp" && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <img src={project.logo} alt={project.title} className="h-32 drop-shadow-2xl" />
                        </div>
                      )}

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 0.7 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="bg-white text-black px-12 py-6 flex items-center gap-4"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{
                            scale: isHovered ? 1 : 0.8,
                            opacity: isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="uppercase tracking-wider">View Case Study</span>
                          <ArrowUpRight className="w-6 h-6" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:col-span-5 space-y-12 ${isEven ? "" : "md:col-start-1 md:row-start-1"}`}>
                    {/* Number */}
                    <motion.div
                      className="text-9xl leading-none text-outline opacity-30"
                      animate={{
                        x: isHovered ? 20 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      0{index + 1}
                    </motion.div>

                    {/* Tags */}
                    <div className="flex items-center gap-4">
                      <span className="bg-black text-white px-6 py-3 uppercase tracking-wider text-xs">
                        {project.category}
                      </span>
                      <span className="text-neutral-400 uppercase tracking-wider text-xs">
                        {project.year}
                      </span>
                    </div>

                    {/* Logo or Title */}
                    {project.logo && project.title !== "ToneUp" ? (
                      <div>
                        <img 
                          src={project.logo} 
                          alt={project.title} 
                          className="h-20 w-auto brightness-0"
                        />
                      </div>
                    ) : (
                      <h3 className="text-black leading-tight">{project.title}</h3>
                    )}

                    {/* Divider */}
                    <div className="h-1 w-24 bg-black" />

                    {/* Description */}
                    <p className="text-2xl text-neutral-600 leading-loose">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-6 py-3 bg-neutral-100 text-black uppercase tracking-wider text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="flex items-center gap-4 text-black uppercase tracking-wider text-sm"
                      animate={{
                        x: isHovered ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-64 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-black text-white px-16 py-8 brutalist-border-thick uppercase tracking-wider hover:translate-x-3 hover:translate-y-3 hover:shadow-none transition-all"
          >
            Let's Create Something Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
