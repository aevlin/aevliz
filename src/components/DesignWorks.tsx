import { motion, AnimatePresence } from "motion/react";
import { Palette, ChevronLeft, ChevronRight, X } from "lucide-react";
import { DoodleStar, DoodleSparkle } from "./Doodles";
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
  color: string;
}

export function DesignWorks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const designs = [
    {
      title: "Bugs to Bucks",
      category: "IEEE Event",
      image: bugsToBucksImg,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "The Firewalled Garden",
      category: "Competition Poster",
      image: firewalledGardenImg,
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "Did You Know?",
      category: "IEEE Tech Facts",
      image: didYouKnowImg,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Torque",
      category: "RC Racing Event",
      image: torqueImg,
      color: "from-slate-600 to-blue-600",
    },
    {
      title: "Nilavilakku",
      category: "IEEE WIE Event",
      image: nilavilakkuImg,
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Scrap Collection Drive",
      category: "NSS Campaign",
      image: scrapDriveImg,
      color: "from-green-500 to-orange-500",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Doodle decorations */}
      <motion.div
        className="absolute top-20 left-10 text-orange-300 opacity-20 hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <DoodleStar />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-pink-300 opacity-20 hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <DoodleSparkle />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 rounded-full mb-6 border-2 border-orange-200">
            <Palette className="w-4 h-4" />
            Design Works
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Posters & Graphics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my poster designs and graphic works showcasing creativity and visual storytelling 🎨
          </p>
        </motion.div>

        {/* Scroll Navigation */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll("left")}
            className="group w-12 h-12 bg-white rounded-full shadow-lg border-2 border-orange-100 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="group w-12 h-12 bg-white rounded-full shadow-lg border-2 border-orange-100 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-orange-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-pink-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={scrollContainerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {designs.map((design, index) => (
              <motion.div
                key={design.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex-shrink-0 snap-center"
              >
                <button
                  onClick={() => setSelectedDesign(design)}
                  className="relative w-80 h-[500px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-pink-200 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${design.color} rounded-full text-xs mb-3`}>
                        {design.category}
                      </span>
                      <h3 className="text-white mb-2">{design.title}</h3>
                      <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Click to view full design
                      </p>
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${design.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ←
            </motion.span>
            Scroll to explore more designs
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </p>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedDesign(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setSelectedDesign(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/20 hover:scale-110 transition-all duration-300 z-50"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Design info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="absolute -top-16 left-0 right-0 text-center z-10"
              >
                <span className={`inline-block px-4 py-2 bg-gradient-to-r ${selectedDesign.color} rounded-full text-sm mb-2 text-white`}>
                  {selectedDesign.category}
                </span>
                <h3 className="text-white">{selectedDesign.title}</h3>
              </motion.div>

              {/* Full size image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
