import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Sparkles } from "lucide-react";
import { DoodleHeart, DoodleStar, DoodleSparkle } from "./Doodles";

export function Contact() {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aevlin-prince-146887291/", color: "from-blue-500 to-blue-600" },
    { icon: Github, label: "GitHub", href: "https://github.com/aevlin", color: "from-gray-700 to-gray-900" },
    { icon: Mail, label: "Email", href: "mailto:aevlinprince@gmail.com", color: "from-purple-500 to-pink-500" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aevlinprince@gmail.com",
      href: "mailto:aevlinprince@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kottayam, Kerala, India",
      href: "#",
      color: "from-orange-500 to-purple-500",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50 via-purple-50 to-white relative overflow-hidden">
      {/* Doodle decorations */}
      <motion.div
        className="absolute top-20 right-20 text-pink-300 opacity-20 hidden lg:block"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <DoodleHeart />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 text-purple-300 opacity-20 hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <DoodleStar />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 text-orange-300 opacity-15 hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <DoodleSparkle />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full mb-6 border-2 border-purple-200">
            Get In Touch
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together! ✨
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info & Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact info cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-pink-200"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-gray-500 text-sm mb-1">{info.label}</div>
                      <div className="text-gray-800 group-hover:text-purple-600 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <DoodleSparkle />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-700">Available for freelance</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I'm currently available for freelance projects and open to new opportunities.
                </p>
              </div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl p-5 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-sm mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Let's Connect
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
