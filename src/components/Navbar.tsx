import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-8"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-black tracking-tighter text-white">
          AEVLIN<span className="text-[#D9FF00]">.</span>
        </a>

        {/* Center Mode Switch (Decorative) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
           <button className="border border-white/20 rounded-full px-6 py-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#D9FF00]" /> SYSTEM_READY
           </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-white hover:text-[#D9FF00] transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <button className="text-white hover:text-[#D9FF00]">
             <div className="w-6 h-0.5 bg-current mb-1.5" />
             <div className="w-4 h-0.5 bg-current ml-auto" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden absolute top-0 left-0 right-0 z-40 flex flex-col justify-center items-center"
          >
             <button 
                className="absolute top-8 right-6 text-white p-2"
                onClick={() => setIsOpen(false)}
             >
                <X size={24} />
             </button>
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-black text-white hover:text-[#D9FF00] uppercase italic"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
