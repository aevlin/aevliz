import { motion, useMotionValue, useSpring } from "motion/react";
import myPhoto from "figma:asset/96da5d86904a30632bffd3058c2407454130c1bb.png";
import { Sparkles, Crown, Flame, Star, Mic2 } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Mouse position logic moved to global CursorEffect
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 px-4 bg-[#050505] overflow-hidden flex flex-col items-center group"
    >
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* --- NAME SECTION (TOP) --- */}
      <div className="relative z-10 text-center mb-12 w-full max-w-6xl mx-auto">
        
        {/* "2026" styled tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif-italic text-[#D9FF00] text-xl md:text-2xl mb-4 -rotate-6 inline-block border border-[#D9FF00] px-4 py-1 rounded-full"
        >
          2026 Portfolio
        </motion.div>

        {/* MASSIVE NAME */}
        <div className="relative leading-[0.8] flex flex-col items-center justify-center select-none">
            
            {/* FIRST NAME */}
            <NameRow 
               text="AEVLIN" 
               font="font-sans font-black" 
               delay={0} 
            />
            
            {/* SECOND NAME - Tightened Spacing */}
            <div className="relative z-20 -mt-2 md:-mt-6">
               <NameRow 
                  text="PRINCE" 
                  font="font-serif-italic" 
                  delay={0.1} 
                  isScript 
               />
            </div>

        </div>

        {/* SUBHEADER - UPDATED TO 3 ROLES */}
        <motion.div 
           initial={{ opacity: 0, scaleX: 0 }}
           animate={{ opacity: 1, scaleX: 1 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 gap-y-2 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-white/50 w-full max-w-4xl mx-auto"
        >
           <span className="hover:text-[#D9FF00] transition-colors whitespace-nowrap" data-cursor="hover">UI/UX Designer</span>
           <Star className="w-3 h-3 md:w-4 md:h-4 text-[#D9FF00] fill-[#D9FF00] animate-spin-slow shrink-0" />
           <span className="hover:text-[#D9FF00] transition-colors whitespace-nowrap" data-cursor="hover">Poster Designer</span>
           <Star className="w-3 h-3 md:w-4 md:h-4 text-[#D9FF00] fill-[#D9FF00] animate-spin-slow shrink-0" />
           <span className="hover:text-[#D9FF00] transition-colors whitespace-nowrap" data-cursor="hover">Singer-Songwriter</span>
        </motion.div>
      </div>

      {/* --- CONTENT GRID (BOTTOM) --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center mt-12 md:mt-24">

         {/* LEFT: PHOTO */}
         <div className="md:col-span-5 relative flex justify-center md:justify-end pr-0 md:pr-12 order-2 md:order-1">
            
            <svg className="absolute -top-10 -left-10 w-48 h-48 md:w-64 md:h-64 text-[#D9FF00] animate-pulse-slow z-0" viewBox="0 0 100 100">
               <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
               <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-30 50 50)" />
            </svg>

            <motion.div
               initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
               animate={{ rotate: -5, scale: 1, opacity: 1 }}
               whileHover={{ rotate: 0, scale: 1.05 }}
               transition={{ duration: 0.5 }}
               className="relative z-10 bg-white p-3 md:p-4 pb-8 md:pb-12 shadow-2xl rotate-[-5deg] max-w-[280px] md:max-w-[320px]"
            >
               <div className="absolute -top-6 -right-6 text-white z-20">
                  <Crown size={48} fill="white" stroke="black" strokeWidth={1} />
               </div>
               <div className="absolute -bottom-4 -left-6 text-[#D9FF00] z-20">
                  <Flame size={40} fill="#D9FF00" stroke="black" />
               </div>

               <div className="relative overflow-hidden bg-gray-200 aspect-[3/4]">
                  <img src={myPhoto} alt="Me" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
               </div>

               <div className="absolute bottom-2 left-4">
                  <span className="font-serif-italic text-black text-xl font-bold">Creative</span>
               </div>
               <div className="absolute bottom-2 right-4">
                  <span className="font-sans text-xs font-black uppercase text-black/50">Artist</span>
               </div>
            </motion.div>
         </div>

         {/* RIGHT: TEXT */}
         <div className="md:col-span-7 text-white text-center md:text-left relative order-1 md:order-2">
            <motion.div 
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="mb-6 relative inline-block"
            >
               <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none">
                  HI<span className="text-[#D9FF00] animate-pulse">!!</span>
               </h2>
               <div className="absolute -top-4 -right-8 md:-right-12">
                  <Sparkles className="text-white w-8 h-8 md:w-12 md:h-12 animate-bounce" />
               </div>
            </motion.div>

            <div className="space-y-6 max-w-md mx-auto md:mx-0">
               <p className="text-sm md:text-base text-gray-400 font-mono leading-relaxed border-l-2 border-[#D9FF00] pl-4">
                  My name is <span className="text-white font-bold">Aevlin Prince</span>, I'm a <span className="text-white">UI/UX Designer</span>, <span className="text-white">Poster Designer</span> & <span className="text-[#D9FF00] font-bold">Singer-Songwriter</span> based in Kerala.
               </p>

               <div className="relative">
                  <p className="font-serif-italic text-xl md:text-2xl leading-snug">
                     "<span className="text-[#D9FF00] font-black not-italic decoration-wavy underline decoration-[#D9FF00]">Always attractive</span>, maybe that is a good sentence to describe my relationship with design & music."
                  </p>
               </div>

               <div className="pt-4 flex flex-col gap-2">
                   <p className="text-xs text-gray-500 font-mono">
                      <span className="text-[#D9FF00] font-bold">Curious</span> and learning has been a principle for me in everything including design. YOLOOO !!!
                   </p>
                   <div className="flex items-center gap-2 mt-2 text-[#D9FF00] text-xs font-mono uppercase tracking-widest opacity-80">
                      <Mic2 size={12} />
                      <span>Available for Gigs & Design Work</span>
                   </div>
               </div>
            </div>
         </div>

      </div>

      <style>{`
        .animate-spin-slow {
           animation: spin 8s linear infinite;
        }
        @keyframes spin {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
           animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .font-impact {
            font-family: 'Impact', 'Anton', sans-serif;
        }
      `}</style>
    </section>
  );
}

function NameRow({ text, font, delay, isScript = false }: any) {
   const letters = text.split("");

   return (
      <motion.div 
         className={`flex justify-center ${font} ${isScript ? 'text-[16vw] md:text-[15vw]' : 'text-[20vw] md:text-[18vw]'} tracking-tighter leading-none`}
         initial={{ y: 100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
         {letters.map((char: string, i: number) => (
            <motion.span
               key={i}
               data-cursor="edit" // Trigger for custom cursor
               whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  filter: "blur(0px)",
                  color: "#D9FF00",
                  rotate: Math.random() * 10 - 5
               }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
               className={`inline-block transition-colors duration-100 relative px-[0.5vw] ${isScript ? '' : 'hover:font-serif-italic'}`}
               style={{ 
                  textShadow: isScript ? 'none' : '0 0 0px transparent' 
               }}
            >
               {char}
            </motion.span>
         ))}
      </motion.div>
   );
}
