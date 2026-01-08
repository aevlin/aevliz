import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, ArrowRight, Filter } from "lucide-react";
import { DoodleStar, DoodleCircle, DoodleSparkle } from "./Doodles";
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
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Mobile", "Web", "Branding", "Research"];

  const projects = [
    {
      title: "ToneUp",
      category: "Mobile",
      description: "A music instrument learning app UI design that gamifies education with an intuitive interface.",
      image: toneUpHero,
      tags: ["Mobile UI", "Figma", "Music Education"],
      color: "from-purple-500 to-pink-500",
      caseStudy: "toneup",
    },
    {
      title: "AEVFLIX",
      category: "Web",
      description: "A streaming platform UI design reimagining the Netflix experience with enhanced discovery features.",
      image: aevflixHero,
      tags: ["Web UI", "Figma", "Entertainment"],
      color: "from-red-500 to-purple-500",
      caseStudy: "aevflix",
    },
    {
      title: "Cavera",
      category: "Web",
      description: "A sophisticated landing page design for a clothing brand blending minimalism with elegance.",
      image: caveraHero,
      tags: ["Web Design", "Figma", "Fashion"],
      color: "from-amber-600 to-orange-600",
      caseStudy: "cavera",
    },
    {
      title: "WhatsApp 1990s Retro vers.",
      category: "Mobile",
      description: "A nostalgic Figma concept reimagining WhatsApp with authentic 1990s mobile interface aesthetics.",
      image: whatsappHero,
      tags: ["Mobile UI", "Figma", "Retro Design"],
      color: "from-green-600 to-yellow-500",
      caseStudy: "whatsapp1990s",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Doodle decorations */}
      <motion.div
        className="absolute top-40 right-20 text-purple-300 opacity-20 rotate-12 hidden lg:block"
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.2, rotate: 12 }}
        viewport={{ once: true }}
      >
        <DoodleStar />
      </motion.div>

      <motion.div
        className="absolute bottom-60 left-16 text-orange-300 opacity-20 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
      >
        <DoodleCircle />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full mb-6 border-2 border-purple-200">
            Portfolio
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my approach to solving complex design challenges
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border-2 border-purple-100">
            <Filter className="w-4 h-4 text-purple-600" />
            <span className="text-gray-700 text-sm">Filter:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              className="group cursor-pointer"
              onClick={() => project.caseStudy && onProjectClick?.(project.caseStudy)}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-purple-200 h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${
                      project.title === "WhatsApp 1990s Retro vers." ? "bg-gradient-to-b from-amber-50 to-yellow-50" : ""
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* ToneUp Logo Overlay */}
                  {project.title === "ToneUp" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={toneUpLogo} alt="ToneUp" className="h-16 md:h-20 w-auto drop-shadow-2xl" />
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <ExternalLink className="w-5 h-5 text-gray-800" />
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs border-2 border-purple-200">
                    <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.category}
                    </span>
                  </div>
                  {/* Floating doodle */}
                  <motion.div
                    className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-60"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <DoodleSparkle />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {project.title === "AEVFLIX" ? (
                    <div className="mb-3">
                      <img src={aevflixLogo} alt="AEVFLIX" className="h-12 w-auto" />
                    </div>
                  ) : project.title === "ToneUp" ? (
                    <div className="mb-3">
                      <img src={toneUpLogo} alt="ToneUp" className="h-10 w-auto" />
                    </div>
                  ) : project.title === "Cavera" ? (
                    <div className="mb-3">
                      <img src={caveraLogo} alt="Cavera" className="h-10 w-auto brightness-[0.3] contrast-125" />
                    </div>
                  ) : project.title === "WhatsApp 1990s Retro vers." ? (
                    <h3 className="mb-3 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">{project.title}</h3>
                  ) : (
                    <h3 className="mb-3 text-gray-800">{project.title}</h3>
                  )}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-purple-600 group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm">View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
