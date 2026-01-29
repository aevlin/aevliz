import { motion } from "motion/react";
import { ArrowRight, Mail, Instagram, Linkedin } from "lucide-react";

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
                 <SocialPill icon={<Instagram size={16} />} text="Instagram" href="#" />
              </div>
           </div>

           {/* Giant Circle Button */}
           <motion.a 
              href="mailto:aevlinprince@gmail.com"
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-48 h-48 md:w-64 md:h-64 bg-[#D9FF00] rounded-full flex flex-col items-center justify-center text-black gap-2 cursor-pointer shadow-[0_0_30px_rgba(217,255,0,0.3)] hover:shadow-[0_0_50px_rgba(217,255,0,0.5)] transition-all group relative z-10"
           >
              <span className="text-lg font-black uppercase tracking-widest">Get in touch</span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
           </motion.a>

        </div>

      </div>
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
