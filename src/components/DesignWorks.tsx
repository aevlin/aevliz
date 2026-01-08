import { motion } from "motion/react";
import { Palette } from "lucide-react";

// Import images using figma:asset scheme
import scrapDriveImg from "figma:asset/3043ef5719405c1d985aa81c4af785ba9b315570.png";
import bugsToBucksImg from "figma:asset/8fc67c24ca25caa337d8296d96344d4cd052d0d8.png";
import firewalledGardenImg from "figma:asset/cc6dfb61437e98424f2f983b63d4de507eb4d6d3.png";
import arcadeMarketImg from "figma:asset/7d0aa58a4d9ade4a35a6d3134d09f9d5ad035d76.png";
import sharingWarmthImg from "figma:asset/713d18e433370fb2a9bf8d2c74ffabce167a063d.png";
import womenForWomenImg from "figma:asset/3745bba4d1bfc0c2dd12885f5c883cff03bee8ec.png";

export function DesignWorks() {
  const works = [
    {
      title: "Scrap Collection Drive",
      category: "Social Campaign",
      organization: "NSS Units 215 & 218",
      image: scrapDriveImg,
      color: "bg-green-600"
    },
    {
      title: "Bugs To Bucks",
      category: "Event Poster",
      organization: "IEEE Computer Society",
      image: bugsToBucksImg,
      color: "bg-blue-600"
    },
    {
      title: "The Firewalled Garden",
      category: "Competition Poster",
      organization: "IEEE SB AJCE",
      image: firewalledGardenImg,
      color: "bg-purple-600"
    },
    {
      title: "Arcade Marketplace",
      category: "Event Poster",
      organization: "Amal Jyothi College & NSS",
      image: arcadeMarketImg,
      color: "bg-orange-600"
    },
    {
      title: "Sharing Warmth",
      category: "Social Initiative",
      organization: "NSS Units 215 & 218",
      image: sharingWarmthImg,
      color: "bg-yellow-600"
    },
    {
      title: "Women For Women",
      category: "Event Poster",
      organization: "IEEE SB AJCE - WIE",
      image: womenForWomenImg,
      color: "bg-pink-600"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-black text-white px-5 py-2.5 mb-8 shadow-brutal">
            <Palette className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider text-xs">Design Portfolio</span>
          </div>

          <h2 className="text-black leading-[0.85] text-[60px] md:text-[100px] mb-6">
            MORE
            <br />
            <span className="text-outline">DESIGN</span>
            <br />
            WORKS
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            Selected poster designs created for various organizations and events.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrollable Gallery */}
      <div className="relative mb-12 md:mb-16">
        <div className="overflow-x-auto overflow-y-hidden pb-4 px-4 md:px-6 scrollbar-custom">
          <div className="flex gap-6 md:gap-8 w-max">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[320px] md:w-[400px] bg-white shadow-brutal group cursor-pointer"
              >
                <div className="relative h-[450px] md:h-[550px] overflow-hidden bg-neutral-100">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 ${work.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
                
                <div className="p-6 md:p-8 bg-white">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                    {work.organization}
                  </div>
                  <h3 className="text-2xl md:text-3xl uppercase tracking-wider leading-tight mb-2">
                    {work.title}
                  </h3>
                  <div className="text-sm text-neutral-600">{work.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Scroll hint */}
        <div className="text-center mt-6">
          <p className="text-sm text-neutral-500 uppercase tracking-wider">
            ← Scroll to explore more →
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {[
            { value: "50+", label: "Posters" },
            { value: "15+", label: "Brands" },
            { value: "6", label: "Organizations" },
            { value: "110+", label: "Total Works" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-black text-white p-6 md:p-8 shadow-brutal text-center hover:translate-y-2 transition-all"
            >
              <div className="text-4xl md:text-5xl mb-2 md:mb-3 leading-none">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 shadow-brutal"
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-wider text-neutral-500 mb-4">Note</div>
            <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed">
              All designs are created entirely in <span className="bg-black text-white px-2 py-1">Figma</span> as 
              UI/UX concepts and visual communications for various organizations.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: #000 #e5e5e5;
        }

        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: #e5e5e5;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #000;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </section>
  );
}
