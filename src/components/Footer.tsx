import { ArrowUp, ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "WORK", href: "#work" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="bg-white text-black relative overflow-hidden border-t border-black/10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
      `}</style>
      
      {/* Big text footer */}
      <div className="w-full border-b border-black/5">
        <h2 className="text-[12vw] font-bebas text-center leading-none text-black/5 hover:text-black/20 transition-colors duration-500 select-none py-12">
          AEVLIN PRINCE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* Copyright & Info */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-8 text-sm text-gray-500 font-mono tracking-widest">
              <span>© {new Date().getFullYear()} AEVLIN PRINCE</span>
              <span>KOTTAYAM, KERALA</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                AVAILABLE
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 md:gap-12">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xl font-bebas tracking-wide text-gray-400 hover:text-black transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
