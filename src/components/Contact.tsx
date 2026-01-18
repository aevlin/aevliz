import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yContent = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const scaleTitle = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const socialLinks = [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/aevlin-prince-146887291/" },
    { label: "GITHUB", href: "https://github.com/aevlin" },
    { label: "EMAIL", href: "mailto:aevlinprince@gmail.com" },
  ];

  return (
    <section ref={containerRef} className="py-40 px-6 bg-white text-black relative overflow-hidden perspective-1000" id="contact">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <motion.div style={{ y: yTitle, scale: scaleTitle }} className="mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="block text-gray-500 font-bebas text-3xl mb-4 tracking-widest"
          >
            CONTACT
          </motion.span>
          <h2 className="text-[10vw] md:text-[8rem] font-bebas leading-[0.8] mb-12 text-black break-words mix-blend-difference">
            LET'S WORK TOGETHER
          </h2>
          <div className="h-1 w-full bg-black mb-12"></div>
        </motion.div>

        <motion.div 
          style={{ y: yContent }}
          className="grid md:grid-cols-2 gap-24"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-3xl md:text-5xl font-bebas text-gray-600 leading-tight mb-16 max-w-lg">
              HAVE A PROJECT IN MIND? I'D LOVE TO HEAR ABOUT IT. DROP ME A MESSAGE AND LET'S CREATE SOMETHING AMAZING.
            </p>

            <div className="mb-16">
              <h3 className="text-gray-500 font-bebas text-2xl mb-4 tracking-widest">STATUS</h3>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg inline-block border border-black/10">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                <span className="text-3xl md:text-4xl font-bebas text-black">AVAILABLE FOR FREELANCE</span>
              </div>
            </div>

            <div>
              <h3 className="text-gray-500 font-bebas text-2xl mb-4 tracking-widest">LOCATION</h3>
              <p className="text-4xl md:text-6xl font-bebas text-black">KOTTAYAM, KERALA, INDIA</p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-between">
            <div>
               <h3 className="text-gray-500 font-bebas text-2xl mb-8 tracking-widest">SOCIALS</h3>
               <div className="space-y-6">
                 {socialLinks.map((social, index) => (
                   <motion.a
                     key={social.label}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="group flex items-center justify-between py-6 border-b border-gray-200 hover:border-black transition-colors duration-300"
                   >
                     <span className="text-5xl md:text-7xl font-bebas text-black group-hover:pl-6 transition-all duration-300">
                       {social.label}
                     </span>
                     <ArrowUpRight className="w-12 h-12 text-gray-400 group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
                   </motion.a>
                 ))}
               </div>
            </div>

            <div className="mt-16 md:mt-0">
               <a 
                 href="mailto:aevlinprince@gmail.com" 
                 className="block text-2xl md:text-4xl text-gray-400 hover:text-black transition-colors font-bebas tracking-wide"
               >
                 aevlinprince@gmail.com
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
