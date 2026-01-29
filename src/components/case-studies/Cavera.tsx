import { motion } from "motion/react";
import { ArrowLeft, Figma, ArrowUpRight, Crosshair, ShoppingBag, Star } from "lucide-react";
import caveraHero from "figma:asset/3f89057f37bf3828f2d1f36bf556d29c3879fea8.png";
import caveraLogo from "figma:asset/7967b8a04ba5f5e1d66b00807451573dc19f5823.png";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CaveraProps {
  onBack: () => void;
}

export function Cavera({ onBack }: CaveraProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D9FF00] selection:text-black">
      
      {/* Fixed Header / Nav */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/10"
      >
        <button
            onClick={onBack}
            className="flex items-center gap-2 group hover:text-[#D9FF00] transition-colors"
        >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold tracking-wider text-sm">BACK</span>
        </button>
        <div className="hidden md:flex items-center gap-4 font-mono text-[10px] tracking-widest text-gray-500">
            <span className="text-[#D9FF00]">● LIVE</span>
            <span>PRJ-003 // CAVERA</span>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-32 pb-24 relative min-h-screen">
        
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-24"
        >
          {/* Title Area */}
          <div className="flex flex-col md:flex-row gap-8 items-end mb-12 border-b border-white/10 pb-12">
             <div className="flex-1">
                <div className="inline-flex items-center gap-2 border border-[#D9FF00] px-3 py-1 rounded-full text-[#D9FF00] font-mono text-xs font-bold uppercase tracking-widest mb-6">
                   <ShoppingBag size={12} className="fill-current" />
                   E-Commerce UI
                </div>
                <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-6">
                   CAV<span className="text-transparent text-stroke-yellow">ERA</span>
                </h1>
                <p className="text-gray-400 max-w-xl text-lg leading-relaxed border-l-2 border-[#D9FF00] pl-6">
                   High-end fashion retail interface utilizing minimalistic layouts to emphasize product photography and brand narrative.
                </p>
             </div>

             {/* Metadata Table */}
             <div className="w-full md:w-auto bg-[#111] border border-white/10 p-6 rounded-xl">
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                   <MetaItem label="ROLE" value="UI/UX Designer" />
                   <MetaItem label="TIMELINE" value="2 Weeks" />
                   <MetaItem label="STACK" value="Figma" />
                   <MetaItem label="VERSION" value="v1.0.0" />
                </div>
             </div>
          </div>

          {/* Clean Hero Image - Using user provided asset */}
          <div className="relative w-full aspect-video border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#111]">
             <ImageWithFallback 
               src={caveraHero} 
               alt="Cavera Hero" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>


        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-12 gap-12 mb-32">
           
           {/* Left: Sticky Note Description */}
           <div className="md:col-span-4">
              <div className="sticky top-32">
                 <div className="bg-[#D9FF00] text-black p-8 relative shadow-[0_10px_40px_rgba(217,255,0,0.1)] -rotate-1">
                    <h3 className="font-black text-3xl mb-4">AESTHETIC GOALS</h3>
                    <p className="font-mono text-sm leading-relaxed opacity-80 mb-6">
                       Cavera required a landing page that communicated "quiet luxury". The challenge was to create impact through restraint—using negative space as an active design element.
                    </p>
                    <ul className="space-y-2 font-bold text-xs uppercase tracking-wider">
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-black" /> Minimalist Hierarchy</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-black" /> Editorial Layouts</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-black" /> Tactile Imagery</li>
                    </ul>
                 </div>
              </div>
           </div>

           {/* Right: Technical Details & Screens */}
           <div className="md:col-span-8 space-y-20">
              
              {/* Solution Section */}
              <section>
                 <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-[2px] bg-[#D9FF00]" />
                    <h3 className="text-2xl font-bold uppercase tracking-widest">Design Highlights</h3>
                 </div>
                 
                 <div className="grid gap-4">
                    <FeatureCard title="Editorial Grid" desc="Magazine-style layouts that break the traditional e-commerce grid." />
                    <FeatureCard title="Typographic Pairing" desc="Serif headings for elegance vs Sans-serif functional text." />
                    <FeatureCard title="Visual Rhythm" desc="Asymmetrical balance to create dynamic eye movement." />
                 </div>
              </section>

              {/* Component Matrix */}
              <section className="bg-[#111] p-8 rounded-xl border border-white/10">
                 <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <Star size={16} className="text-[#D9FF00] fill-current" />
                    COMPONENT MATRIX
                 </h3>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {["Clear CTAs", "Responsive", "Palette", "Visual Interest", "Hierarchy", "Navigation"].map((item, i) => (
                       <div key={i} className="group cursor-default">
                          <div className="w-full h-[1px] bg-white/10 mb-2 group-hover:bg-[#D9FF00] transition-colors" />
                          <h4 className="font-mono text-xs text-gray-400 mb-1">0{i+1}</h4>
                          <span className="font-bold text-lg">{item}</span>
                       </div>
                    ))}
                 </div>
              </section>
              
              {/* Original Hero Image embedded as a "detail" */}
              <div className="border border-white/10 p-2 rounded-lg bg-[#050505]">
                 <img src={caveraHero} alt="Cavera Detail" className="w-full h-auto opacity-80" />
              </div>

           </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center border-t border-white/10 pt-20">
           <a 
             href="https://www.figma.com/design/YOUR_FIGMA_LINK"
             target="_blank"
             rel="noopener noreferrer"
             className="group relative bg-[#D9FF00] text-black px-10 py-5 font-black text-xl uppercase tracking-wider hover:scale-105 transition-transform"
           >
              <div className="flex items-center gap-4 relative z-10">
                 <Figma size={24} />
                 <span>Access Figma File</span>
                 <ArrowUpRight size={24} />
              </div>
              <div className="absolute top-2 left-2 w-full h-full border-2 border-white -z-10 group-hover:top-3 group-hover:left-3 transition-all" />
           </a>
        </div>

      </div>

      <style>{`
         .text-stroke-yellow {
             -webkit-text-stroke: 1px #D9FF00;
         }
      `}</style>
    </div>
  );
}

function MetaItem({ label, value }: { label: string, value: string }) {
   return (
      <div>
         <div className="text-[10px] font-mono text-gray-500 mb-1 tracking-widest">{label}</div>
         <div className="text-white font-bold text-lg">{value}</div>
      </div>
   );
}

function FeatureCard({ title, desc }: { title: string, desc: string }) {
   return (
      <div className="border border-white/10 p-6 hover:border-[#D9FF00] transition-colors group">
         <h4 className="font-bold text-xl mb-2 group-hover:text-[#D9FF00]">{title}</h4>
         <p className="font-mono text-xs text-gray-400 leading-relaxed">{desc}</p>
      </div>
   );
}
