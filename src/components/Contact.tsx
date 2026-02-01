import { motion } from "motion/react";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-4 bg-[#050505] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-[#111111] rounded-[40px] p-8 md:p-16 border border-white/10 flex flex-col md:flex-row gap-12 items-center justify-between relative overflow-hidden">
           
           {/* Decorative Glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9FF00] blur-[150px] opacity-10 pointer-events-none" />

           <div className="max-w-xl relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase">
                 Let's start <br/>
                 <span className="text-[#D9FF00] font-serif-italic font-normal lowercase">working together.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 font-mono text-sm">
                 &gt; Always open to new opportunities and collaborations.<br/>
                 &gt; Whether you have a specific project in mind or just want to chat about design, feel free to reach out.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <SocialPill icon={<Mail size={16} />} text="Email" href="mailto:aevlinprince@gmail.com" />
                 <SocialPill icon={<Linkedin size={16} />} text="LinkedIn" href="https://www.linkedin.com/in/aevlin-prince-146887291/" />
                 <SocialPill icon={<BehanceIcon size={16} />} text="Behance" href="https://www.behance.net/aevlinprince" />
              </div>
           </div>

           {/* 3D Button Cube */}
           <a href="mailto:aevlinprince@gmail.com" className="relative group perspective-1000">
             <div className="w-48 h-16 md:w-64 md:h-20 transform-style-3d group-hover:rotate-x-90 transition-transform duration-500 cursor-pointer">
               
               {/* Front Face */}
               <div className="absolute inset-0 bg-[#D9FF00] flex items-center justify-center border-2 border-[#D9FF00] translate-z-[32px] md:translate-z-[40px]">
                 <span className="text-black font-black uppercase tracking-widest text-lg md:text-xl flex items-center gap-2">
                   Get in touch <ArrowRight size={20} />
                 </span>
               </div>
               
               {/* Top Face (Hidden until hover) */}
               <div className="absolute inset-0 bg-black flex items-center justify-center border-2 border-[#D9FF00] -rotate-x-90 translate-z-[32px] md:translate-z-[40px]">
                 <span className="text-[#D9FF00] font-black uppercase tracking-widest text-lg md:text-xl flex items-center gap-2">
                   Send Email <Mail size={20} />
                 </span>
               </div>
               
             </div>
           </a>

        </div>

      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-x-90 {
          transform: rotateX(90deg);
        }
        .-rotate-x-90 {
          transform: rotateX(-90deg);
        }
        .translate-z-\[32px\] {
          transform: translateZ(32px);
        }
        .translate-z-\[40px\] {
          transform: translateZ(40px);
        }
      `}</style>
    </section>
  );
}

function SocialPill({ icon, text, href }: { icon: React.ReactNode, text: string, href: string }) {
   return (
      <a 
         href={href}
         target={href.startsWith('http') ? "_blank" : undefined}
         rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
         className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-[#D9FF00] hover:text-black hover:bg-[#D9FF00] transition-colors font-bold text-sm bg-black text-white"
      >
         {icon}
         {text}
      </a>
   );
}

function BehanceIcon({ size = 24 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 7h-5v2h5V7zm1 5h-6v2h6v-2zM4.7 6.4h5.3c2.4 0 3.8 1.4 3.8 3.5 0 1.5-.9 2.5-2 3 1.5.5 2.5 1.7 2.5 3.4 0 2.3-1.6 4.1-4.2 4.1H4.7V6.4zm5 4.3c0-1.2-.6-1.7-1.8-1.7H7.3v3.4h.7c1.1 0 1.7-.6 1.7-1.7zm.4 5.6c0-1.2-.6-1.8-2-1.8h-.8v3.6h.8c1.3 0 2-.6 2-1.8z" />
    </svg>
  );
}
