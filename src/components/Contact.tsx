import { motion } from "motion/react";
import { Mail, Linkedin, Instagram, Github, MapPin, Sparkles } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/aevlin-prince/",
      icon: Linkedin,
    },
    {
      platform: "Instagram", 
      url: "https://www.instagram.com/prince_the_artist/",
      icon: Instagram,
    },
    {
      platform: "GitHub",
      url: "https://github.com/aevlinprince",
      icon: Github,
    }
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 md:px-6 bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 md:w-64 md:h-64 border-4 border-white opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white text-black px-5 py-2.5 mb-12 shadow-brutal"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider text-xs">Get In Touch</span>
          </motion.div>

          <h2 className="text-white leading-[0.85] text-[70px] md:text-[120px] lg:text-[160px] mb-8">
            LET'S
            <br />
            <span className="text-outline-white">TALK</span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        {/* Email Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <a
            href="mailto:aevlinprince@gmail.com"
            className="block group"
          >
            <div className="flex items-center gap-6 md:gap-8 group-hover:translate-x-2 transition-transform">
              <Mail className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:rotate-12 transition-transform flex-shrink-0" />
              
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Email Me
                </div>
                <div className="text-2xl md:text-4xl text-white break-all leading-tight group-hover:text-neutral-300 transition-colors">
                  aevlinprince@gmail.com
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Social + Location - Clean Flat Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 md:space-y-10"
        >
          {/* Location */}
          <div className="flex items-center gap-4 text-white">
            <MapPin className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Location</div>
              <div className="text-lg md:text-2xl uppercase tracking-wider">Kottayam, Kerala, India</div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 mb-4">Connect With Me</div>
            <div className="flex items-center gap-4 md:gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                    aria-label={social.platform}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-neutral-400 transition-colors group-hover:rotate-12 transition-transform" />
                    <span className="text-sm md:text-base uppercase tracking-wider text-white group-hover:text-neutral-400 transition-colors hidden md:inline">
                      {social.platform}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}