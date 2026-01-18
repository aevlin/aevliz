import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// A technical "Turbine/Reactor" icon that acts as a scroll indicator
const ScrollTurbine = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
    {/* Outer Ring */}
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="4 4" />
    
    {/* Center Hub */}
    <circle cx="50" cy="50" r="10" fill="currentColor" />
    
    {/* Blades */}
    <path d="M50 50 L50 5 L55 15 Z" />
    <path d="M50 50 L85 20 L80 30 Z" />
    <path d="M50 50 L95 50 L90 55 Z" />
    <path d="M50 50 L85 80 L80 75 Z" />
    <path d="M50 50 L50 95 L45 85 Z" />
    <path d="M50 50 L15 80 L20 75 Z" />
    <path d="M50 50 L5 50 L10 45 Z" />
    <path d="M50 50 L15 20 L20 25 Z" />
  </svg>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Rotate the turbine based on scroll progress (2 full rotations for the whole page)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "XP", href: "#experience" },
    { name: "WORK", href: "#work" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Top Left: Scroll Turbine (Replaces Logo) */}
      <motion.div className="fixed top-6 left-6 z-50 flex items-center gap-4 mix-blend-difference text-white pointer-events-none md:pointer-events-auto">
        <a href="#home" className="block relative group">
           <div className="w-10 h-10 relative">
              {/* Static Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                 <div className="w-full h-px bg-white/0" /> 
                 <div className="w-3 h-3 border border-white/50 rounded-full" />
              </div>
              
              {/* Rotating Turbine */}
              <motion.div 
                className="w-full h-full"
                style={{ rotate }}
              >
                 <ScrollTurbine />
              </motion.div>
           </div>
           
           {/* Label */}
           <div className="absolute -bottom-4 left-0 w-[200%] -translate-x-1/4 text-[8px] font-mono tracking-widest text-white/50 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              SCROLL_TURBINE
           </div>
        </a>
      </motion.div>

      {/* Top Right: Menu / Time */}
      <motion.div className="fixed top-6 right-6 z-50 mix-blend-difference text-white hidden md:flex flex-col items-end gap-1">
         <div className="font-mono text-xs tracking-[0.2em]">{new Date().toLocaleTimeString()}</div>
         <div className="flex gap-1">
            {navItems.map((item, i) => (
               <a 
                 key={item.name} 
                 href={item.href}
                 className="px-3 py-1 border border-white/30 text-xs font-bebas tracking-wider hover:bg-white hover:text-black transition-colors"
               >
                 {item.name}
               </a>
            ))}
         </div>
      </motion.div>

      {/* Mobile Toggle */}
      <div className="fixed top-6 right-6 z-50 md:hidden mix-blend-difference text-white">
         <button onClick={() => setIsOpen(!isOpen)} className="p-2 border border-white">
            {isOpen ? <X /> : <Menu />}
         </button>
      </div>

      {/* Bottom Bar HUD */}
      <motion.div className="fixed bottom-6 left-6 right-6 z-40 flex justify-between items-end pointer-events-none mix-blend-difference text-white">
         <div className="hidden md:block">
            <span className="font-mono text-[10px] opacity-50">ARMOR: 100% | AMMO: ∞</span>
         </div>
         <div className="hidden md:block">
            <span className="font-mono text-[10px] opacity-50">CURRENT_OBJ: EXPLORE_PORTFOLIO</span>
         </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-white text-black flex items-center justify-center md:hidden"
        >
          <div className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bebas hover:underline decoration-4 underline-offset-4"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
