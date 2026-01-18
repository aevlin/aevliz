import { motion } from "motion/react";
import { ArrowLeft, Figma, ArrowUpRight, Crosshair, Cpu } from "lucide-react";
import Design from "../../imports/Design-137-600";
import toneUpLogo from "figma:asset/962efa58d190b2be51c8cdb70d5f137275c0fa9a.png";
import toneUpHero from "figma:asset/8075cb80e5be6a4e52021cbb4b109d4402fec1f8.png";

interface ToneUpProps {
  onBack: () => void;
}

export function ToneUp({ onBack }: ToneUpProps) {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
      `}</style>

      {/* Fixed Header / Nav */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md border-b border-black/10"
      >
        <button
            onClick={onBack}
            className="flex items-center gap-2 group"
        >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bebas text-xl tracking-wide">BACK TO INDEX</span>
        </button>
        <div className="hidden md:flex items-center gap-4 font-mono text-[10px] tracking-widest text-gray-500">
            <span>SYS.STATUS: ONLINE</span>
            <span>ID: PRJ-001</span>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative border-x border-black/5 min-h-screen">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-24"
        >
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16 border-b-2 border-black pb-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                 <img src={toneUpLogo} alt="ToneUp Logo" className="h-12 w-auto grayscale" />
                 <span className="font-mono text-xs bg-black text-white px-2 py-1">MOBILE APPLICATION</span>
              </div>
              <h1 className="text-8xl md:text-[10rem] font-bebas leading-[0.8] mb-6">
                TONEUP
              </h1>
              <p className="font-mono text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed uppercase tracking-wide">
                Gamified music education interface designed to lower the barrier of entry for aspiring musicians through intuitive UX patterns.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-full md:w-auto border-l border-black/10 pl-8">
              {[
                { label: "ROLE", value: "UI/UX DESIGNER" },
                { label: "TIMELINE", value: "3 WEEKS" },
                { label: "STACK", value: "FIGMA" },
                { label: "VERSION", value: "v1.0.4" }
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="text-[10px] font-mono tracking-widest text-gray-400 mb-1">{metric.label}</div>
                  <div className="text-xl font-bebas tracking-wide">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Hero Image Frame */}
          <div className="relative w-full bg-gray-100 mb-24 group border border-black">
             {/* Technical Markers */}
             <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-black z-20" />
             <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-black z-20" />
             <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-black z-20" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-black z-20" />
             
             {/* Crosshair Overlay */}
             <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <Crosshair className="w-12 h-12 text-white drop-shadow-md" strokeWidth={1} />
                </div>
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
             </div>

            <img 
              src={toneUpHero} 
              alt="ToneUp Hero" 
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 block"
            />
          </div>
        </motion.div>

        {/* UI Showcase Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="flex items-center gap-4 mb-12 border-b border-black/10 pb-4">
             <div className="w-2 h-2 bg-black" />
             <h2 className="text-5xl md:text-7xl font-bebas">SYSTEM INTERFACE</h2>
          </div>
          
          <div className="bg-gray-50 border border-black p-4 md:p-8 overflow-auto relative">
             <div className="absolute top-4 left-4 font-mono text-[10px] text-gray-400">RENDER_MODE: VECTOR</div>
            <div className="min-w-[1500px] h-[2200px] relative grayscale hover:grayscale-0 transition-all duration-500 origin-top-left scale-[0.8] md:scale-100">
              <Design />
            </div>
          </div>
        </motion.section>

        {/* Project Details Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 grid md:grid-cols-2 gap-16"
        >
          <div>
            <h3 className="font-mono text-xs text-gray-400 mb-4 tracking-widest">[01] OVERVIEW</h3>
            <h2 className="text-4xl md:text-5xl font-bebas mb-6 leading-none">THE CHALLENGE</h2>
            <div className="space-y-6 font-mono text-sm leading-relaxed text-gray-600">
               <p>
                 ToneUp addresses the steep learning curve of musical instruments. The primary objective was to gamify the education process without trivializing the theory.
               </p>
               <ul className="space-y-4 mt-6 border-l-2 border-black pl-6">
                 {[
                   "Information overload for beginners",
                   "Lack of structured progression feedback",
                   "Absence of daily motivation triggers"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4 items-start">
                     <span className="text-black font-bold">0{i+1} //</span>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono text-xs text-gray-400 mb-4 tracking-widest">[02] SOLUTION</h3>
            <h2 className="text-4xl md:text-5xl font-bebas mb-6 leading-none">INTERFACE LOGIC</h2>
            <div className="grid gap-6">
               {[
                 { title: "ADAPTIVE LEARNING PATHS", desc: "Dynamic curriculum adjustment based on user performance metrics." },
                 { title: "VISUAL FEEDBACK LOOPS", desc: "Immediate UI response systems for correct/incorrect inputs." },
                 { title: "PROGRESSION TRACKING", desc: "Data visualization for long-term skill acquisition." }
               ].map((item, i) => (
                  <div key={i} className="border border-black/10 p-6 hover:border-black hover:bg-black hover:text-white transition-all duration-300 group">
                     <h4 className="font-bebas text-2xl mb-2">{item.title}</h4>
                     <p className="font-mono text-xs text-gray-500 group-hover:text-gray-300">{item.desc}</p>
                  </div>
               ))}
            </div>
          </div>
        </motion.section>

        {/* Process Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-16 border-b border-black/10 pb-4">
             <div className="w-2 h-2 bg-black" />
             <h2 className="text-5xl md:text-7xl font-bebas">EXECUTION PROTOCOL</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-l border-black/10">
            {[
              { title: "DISCOVERY", desc: "User Interviews & Data Analysis" },
              { title: "DEFINE", desc: "User Personas & Journey Maps" },
              { title: "IDEATE", desc: "Wireframing & Logic Flows" },
              { title: "PROTOTYPE", desc: "High-Fidelity Interaction Design" },
              { title: "TEST", desc: "Usability Validation" }
            ].map((phase, index) => (
              <div key={index} className="border-r border-b border-black/10 p-6 hover:bg-black hover:text-white transition-colors duration-300 group min-h-[200px] flex flex-col justify-between">
                <span className="font-mono text-xs opacity-50">PHASE_0{index + 1}</span>
                <div>
                  <h3 className="text-3xl font-bebas mb-2">{phase.title}</h3>
                  <p className="font-mono text-[10px] opacity-60 max-w-[120px]">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t-2 border-black pt-16 flex flex-col items-center text-center"
        >
           <Cpu className="w-12 h-12 mb-6 text-black" strokeWidth={1} />
           <h2 className="text-4xl font-bebas mb-8">SOURCE FILES AVAILABLE</h2>
           
          <a 
            href="https://www.figma.com/design/94LASDImNBZld1HxxxhsYB/ToneUp?node-id=0-1&t=viX9az5xBZKWIW99-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-4 bg-black text-white font-bebas text-xl hover:bg-gray-800 transition-colors group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Figma className="w-5 h-5" />
            <span>ACCESS FIGMA DATA</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
          
          <div className="mt-12 font-mono text-[10px] text-gray-400 tracking-widest">
             SECURE CONNECTION ESTABLISHED // END OF FILE
          </div>
        </motion.div>
      </div>
    </div>
  );
}
