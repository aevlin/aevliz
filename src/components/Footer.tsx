export function Footer() {
  return (
    <footer className="py-12 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
         
         <div className="text-2xl font-black text-white tracking-tighter">
            AEVLIN<span className="text-[#D9FF00]">.</span>
         </div>

         <div className="flex gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-[#D9FF00]">Home</a>
            <a href="#about" className="hover:text-[#D9FF00]">About</a>
            <a href="#work" className="hover:text-[#D9FF00]">Work</a>
            <a href="#contact" className="hover:text-[#D9FF00]">Contact</a>
         </div>

         <p className="text-xs text-gray-600 font-mono">
            © 2026 Aevlin Prince. [ALL_RIGHTS_RESERVED]
         </p>
         
      </div>
    </footer>
  );
}
