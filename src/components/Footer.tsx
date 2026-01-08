import { motion } from "motion/react";
import { Heart } from "lucide-react";
import aevLogo from "figma:asset/a66830c7851bb82c782e1358886681bda9a1ffde.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src={aevLogo} 
              alt="Aev" 
              className="h-14 w-auto brightness-0 mb-6"
            />
            <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
              Designer & Developer
              <br />
              based in Kerala, India
            </p>
          </motion.div>

          {/* Center */}
          <div className="text-center">
            <div className="inline-block bg-black text-white px-8 py-4 border-4 border-black font-bold uppercase text-sm tracking-wider">
              Let's Build Together
            </div>
          </div>

          {/* Copyright */}
          <div className="md:text-right space-y-3">
            <p className="text-neutral-600 text-lg">
              © {currentYear} Aevlin Prince
            </p>
            <p className="text-neutral-600 flex items-center gap-2 justify-end">
              Made with <Heart className="w-5 h-5 fill-current" /> and lots of ☕
            </p>
          </div>
        </div>

        {/* Bottom text with better spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t-2 border-black text-center"
        >
          <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
            All projects are UI/UX design concepts created in Figma
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
