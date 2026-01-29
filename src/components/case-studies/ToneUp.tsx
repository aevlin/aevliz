import { motion } from "motion/react";
import { ArrowLeft, Figma, ArrowUpRight, Crosshair, Cpu, Star } from "lucide-react";
import Design from "../../imports/Design-137-600";
import toneUpLogo from "figma:asset/962efa58d190b2be51c8cdb70d5f137275c0fa9a.png";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ToneUpProps {
  onBack: () => void;
}

export function ToneUp({ onBack }: ToneUpProps) {
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
            <span>PRJ-001 // TONEUP</span>
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
                   <Star size={12} className="fill-current" />
                   Mobile Application
                </div>
                <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-6">
                   TONE<span className="text-transparent text-stroke-yellow">UP</span>
                </h1>
                <p className="text-gray-400 max-w-xl text-lg leading-relaxed border-l-2 border-[#D9FF00] pl-6">
                   Gamified music education interface designed to lower the barrier of entry for aspiring musicians through intuitive UX patterns.
                </p>
             </div>

             {/* Metadata Table */}
             <div className="w-full md:w-auto bg-[#111] border border-white/10 p-6 rounded-xl">
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                   <MetaItem label="ROLE" value="UI/UX Designer" />
                   <MetaItem label="TIMELINE" value="3 Weeks" />
                   <MetaItem label="STACK" value="Figma" />
                   <MetaItem label="VERSION" value="v1.0.4" />
                </div>
             </div>
          </div>

          {/* Clean Hero Image - Using Logo Asset since no hero image provided */}
          <div className="relative w-full aspect-video border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#111] flex items-center justify-center">
             <div className="w-1/3">
                <ImageWithFallback 
                  src={toneUpLogo} 
                  alt="ToneUp Logo" 
                  className="w-full h-auto object-contain"
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>


        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-12 gap-12 mb-32">
           
           {/* Left: Sticky Note Description */}
           <div className="md:col-span-4">
              <div className="sticky top-32">
                 <div className="bg-[#D9FF00] text-black p-8 relative shadow-[0_10px_40px_rgba(217,255,0,0.1)] -rotate-2">
                    <h3 className="font-black text-3xl mb-4">THE CHALLENGE</h3>
                    <p className="font-mono text-sm leading-relaxed opacity-80 mb-6">
                       ToneUp addresses the steep learning curve of musical instruments. The primary objective was to gamify the education process without trivializing the theory.
                    </p>
                    <ul className="space-y-2 font-bold text-xs uppercase tracking-wider">
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-black" /> Information Overload</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-black" /> Lack of Feedback</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-black" /> Motivation Loss</li>
                    </ul>
                 </div>
              </div>
           </div>

           {/* Right: Technical Details & SVG */}
           <div className="md:col-span-8 space-y-20">
              
              {/* Solution Section */}
              <section>
                 <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-[2px] bg-[#D9FF00]" />
                    <h3 className="text-2xl font-bold uppercase tracking-widest">Interface Logic</h3>
                 </div>
                 
                 <div className="grid gap-4">
                    <FeatureCard title="Adaptive Learning" desc="Dynamic curriculum adjustment based on user performance metrics." />
                    <FeatureCard title="Visual Feedback" desc="Immediate UI response systems for correct/incorrect inputs." />
                    <FeatureCard title="Progression Tracking" desc="Data visualization for long-term skill acquisition." />
                 </div>
              </section>

              {/* SVG Showcase (Keep original vector but framed) */}
              <section className="bg-[#111] border border-white/10 p-2 rounded-xl overflow-hidden relative group">
                 <div className="absolute top-4 right-4 bg-[#D9FF00] text-black text-[10px] font-bold px-2 py-1 z-10">VECTOR VIEW</div>
                 <div className="h-[600px] overflow-auto custom-scrollbar relative">
                    <div className="min-w-[1000px] origin-top-left scale-[0.8] md:scale-100 opacity-80 group-hover:opacity-100 transition-opacity">
                       <Design />
                    </div>
                 </div>
              </section>

           </div>
        </div>

        {/* EXECUTION PROCESS */}
        <section className="mb-32 border-t border-white/10 pt-20">
           <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-stroke-white text-transparent">EXECUTION PROTOCOL</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
              {[
                { title: "DISCOVERY", desc: "User Interviews" },
                { title: "DEFINE", desc: "User Personas" },
                { title: "IDEATE", desc: "Wireframing" },
                { title: "PROTOTYPE", desc: "Hi-Fi Design" },
                { title: "TEST", desc: "Validation" }
              ].map((step, i) => (
                 <div key={i} className="bg-[#050505] p-6 group hover:bg-[#111] transition-colors h-48 flex flex-col justify-between">
                    <span className="text-[#D9FF00] font-mono text-xs">0{i+1}</span>
                    <div>
                       <h3 className="font-bold text-xl mb-1">{step.title}</h3>
                       <p className="text-xs text-gray-500 font-mono">{step.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>


        {/* CTA */}
        <div className="flex justify-center">
           <a 
             href="https://www.figma.com/design/94LASDImNBZld1HxxxhsYB/ToneUp?node-id=0-1&t=viX9az5xBZKWIW99-1"
             target="_blank"
             rel="noopener noreferrer"
             className="group relative bg-[#D9FF00] text-black px-10 py-5 font-black text-xl uppercase tracking-wider hover:scale-105 transition-transform"
           >
              <div className="flex items-center gap-4 relative z-10">
                 <Figma size={24} />
                 <span>Access Figma File</span>
                 <ArrowUpRight size={24} />
              </div>
              {/* Button Shadow/Offset */}
              <div className="absolute top-2 left-2 w-full h-full border-2 border-white -z-10 group-hover:top-3 group-hover:left-3 transition-all" />
           </a>
        </div>

      </div>

      <style>{`
         .text-stroke-yellow {
             -webkit-text-stroke: 1px #D9FF00;
         }
         .text-stroke-white {
             -webkit-text-stroke: 1px rgba(255,255,255,0.3);
         }
         .custom-scrollbar::-webkit-scrollbar {
             width: 8px;
             height: 8px;
         }
         .custom-scrollbar::-webkit-scrollbar-track {
             background: #111;
         }
         .custom-scrollbar::-webkit-scrollbar-thumb {
             background: #333;
             border-radius: 4px;
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
