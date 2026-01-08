import { Heart, Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { DoodleHeart } from "./Doodles";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aevlin-prince-146887291/" },
    { icon: Github, label: "GitHub", href: "https://github.com/aevlin" },
    { icon: Mail, label: "Email", href: "mailto:aevlinprince@gmail.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
      
      {/* Doodle decoration */}
      <div className="absolute top-8 right-10 text-pink-500 opacity-20 hidden lg:block">
        <DoodleHeart />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent font-[Cormorant_Upright]">
                Aevlin Prince
              </span>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              UI/UX Designer crafting beautiful, intuitive digital experiences. 
              Let's work together to bring your vision to life! ✨
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-pink-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a 
                  href="mailto:aevlinprince@gmail.com"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  aevlinprince@gmail.com
                </a>
              </li>
              <li>Kottayam, Kerala, India</li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400">Available for work</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-sm text-center sm:text-left">
              <span>© {new Date().getFullYear()} Aevlin Prince.</span>
              <span className="flex items-center gap-2">
                Designed with
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
                and passion
              </span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-2.5 bg-white/5 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-200 hover:scale-105"
              aria-label="Scroll to top"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
