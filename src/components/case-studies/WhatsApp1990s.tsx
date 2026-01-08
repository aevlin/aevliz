import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import whatsappUI from "figma:asset/fa2cf2fb22ec2e685b4392bdad23b00d94dbc3af.png";
import statusScreen from "figma:asset/7ca075c43e5f5edce081d31288cf24e574988815.png";
import statusViewScreen from "figma:asset/95d5b8feda4a85e340ea1f6096611b3720d136da.png";
import settingsScreen from "figma:asset/075a153ca284f6182186859824b47de21274c9ff.png";

interface WhatsApp1990sProps {
  onBack: () => void;
}

export function WhatsApp1990s({ onBack }: WhatsApp1990sProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Back button - Brutalist style */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-3 px-8 py-4 bg-black text-white shadow-brutal hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all uppercase tracking-wider"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Portfolio</span>
      </motion.button>

      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          {/* Category Tag */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4">
              <span className="uppercase tracking-wider text-sm">Concept Design</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-black mb-12 leading-[0.85]">
            WHATSAPP
            <br />
            <span className="text-outline">1990s</span>
          </h1>

          {/* Description */}
          <p className="text-3xl text-neutral-600 max-w-4xl leading-relaxed mb-16">
            A nostalgic Figma design concept reimagining WhatsApp with authentic 1990s mobile interface aesthetics, complete with retro UI elements and vintage screen designs.
          </p>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
            {[
              { label: "Role", value: "UI/UX Designer" },
              { label: "Timeline", value: "2 Weeks" },
              { label: "Tools", value: "Figma" },
              { label: "Type", value: "Retro Mobile UI" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="text-xs uppercase tracking-wider text-neutral-400 mb-3">{item.label}</div>
                <div className="text-xl text-black">{item.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative bg-neutral-100 shadow-brutal overflow-hidden p-12">
            <ImageWithFallback 
              src={whatsappUI} 
              alt="WhatsApp 1990s UI Design - 9 Screen Grid" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-black mb-8 leading-tight">
                PROJECT
                <br />
                <span className="text-outline">OVERVIEW</span>
              </h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="text-2xl text-neutral-700 leading-loose">
                WhatsApp 1990s is a Figma design concept that reimagines the modern WhatsApp interface through the lens of 1990s mobile technology, recreating the aesthetic of early mobile phones with their characteristic green monochrome displays and beige UI elements.
              </p>
              <p className="text-2xl text-neutral-700 leading-loose">
                The design captures the essence of vintage Nokia and early mobile interfaces, featuring all core WhatsApp functionalities while maintaining authentic retro visual language including pixel-perfect typography and classic icon designs.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-black text-white p-16 md:p-24 shadow-brutal">
            <h2 className="text-white mb-16 leading-tight">
              THE
              <br />
              CHALLENGE
            </h2>
            <div className="space-y-8 max-w-4xl">
              <div className="flex gap-6">
                <div className="text-6xl opacity-20">01</div>
                <div>
                  <h3 className="text-white mb-4">Historical Authenticity</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Recreating genuine 1990s mobile UI patterns including limited color palettes and pixel-based layouts
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex gap-6">
                <div className="text-6xl opacity-20">02</div>
                <div>
                  <h3 className="text-white mb-4">Modern Features in Retro Form</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Translating contemporary features like status updates and multimedia messaging into vintage constraints
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex gap-6">
                <div className="text-6xl opacity-20">03</div>
                <div>
                  <h3 className="text-white mb-4">Balancing Nostalgia & Usability</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Ensuring the retro aesthetic doesn't compromise user experience or functional clarity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Screen Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-black mb-16 leading-tight">
            SCREEN
            <br />
            <span className="text-outline">SHOWCASE</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Status Screen */}
            <div className="bg-white shadow-brutal overflow-hidden hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
              <div className="relative bg-neutral-50 p-8 flex items-center justify-center min-h-[400px]">
                <ImageWithFallback 
                  src={statusScreen} 
                  alt="WhatsApp Status Screen" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-8">
                <div className="inline-block bg-black text-white px-4 py-2 uppercase tracking-wider text-xs mb-4">
                  Status Updates
                </div>
                <h3 className="text-black mb-3">Status Screen</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Retro status list showing user updates with timestamps in classic mobile style
                </p>
              </div>
            </div>

            {/* Status View Screen */}
            <div className="bg-white shadow-brutal overflow-hidden hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
              <div className="relative bg-neutral-900 p-8 flex items-center justify-center min-h-[400px]">
                <ImageWithFallback 
                  src={statusViewScreen} 
                  alt="WhatsApp Status View Screen" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-8">
                <div className="inline-block bg-black text-white px-4 py-2 uppercase tracking-wider text-xs mb-4">
                  Status Viewer
                </div>
                <h3 className="text-black mb-3">Status View</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Full-screen dark status viewer with centered text and minimal design
                </p>
              </div>
            </div>

            {/* Settings Screen */}
            <div className="bg-white shadow-brutal overflow-hidden hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
              <div className="relative bg-neutral-50 p-8 flex items-center justify-center min-h-[400px]">
                <ImageWithFallback 
                  src={settingsScreen} 
                  alt="WhatsApp Settings Screen" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-8">
                <div className="inline-block bg-black text-white px-4 py-2 uppercase tracking-wider text-xs mb-4">
                  Settings Menu
                </div>
                <h3 className="text-black mb-3">Settings</h3>
                <p className="text-neutral-600 leading-relaxed">
                  User profile with account options in classic mobile interface style
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Design Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-black mb-16 leading-tight">
            DESIGN
            <br />
            <span className="text-outline">FEATURES</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">📱</div>
              <h3 className="text-black mb-6">Authentic Retro Aesthetic</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Green monochrome displays, beige backgrounds, and vintage icon styles carefully researched from 1990s mobile phones
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">🎨</div>
              <h3 className="text-black mb-6">Limited Color Palette</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Restricted color schemes typical of early mobile displays—primarily greens, beiges, and dark grays
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">⚡</div>
              <h3 className="text-black mb-6">Simplified Navigation</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Straightforward navigation patterns matching early mobile phones with bottom icon bars and list-based interfaces
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">💬</div>
              <h3 className="text-black mb-6">Classic Typography</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Pixel-style fonts and compact text layouts reminiscent of early mobile screens with limited display resolution
              </p>
            </div>
          </div>
        </motion.section>

        {/* All 9 Screens Breakdown */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-black mb-16 leading-tight">
            COMPLETE
            <br />
            <span className="text-outline">SCREEN SET</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Welcome Screen", desc: "Classic green gradient with WhatsApp logo" },
              { num: "02", title: "Chat List", desc: "Retro chat list with vintage timestamps" },
              { num: "03", title: "Chat Screen", desc: "Vintage message bubbles with beige background" },
              { num: "04", title: "Call Logs", desc: "Recent calls with retro icons and timestamps" },
              { num: "05", title: "Contact Info", desc: "Profile with avatar and action buttons" },
              { num: "06", title: "Notification", desc: "Push notification with vintage alert styling" },
              { num: "07", title: "Status Bar", desc: "User status list with profile pictures" },
              { num: "08", title: "Status View", desc: "Full-screen dark status viewer" },
              { num: "09", title: "Settings", desc: "User profile and account options menu" }
            ].map((screen, index) => (
              <motion.div
                key={screen.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="text-5xl text-outline opacity-30 mb-6">{screen.num}</div>
                <h3 className="text-black mb-3">{screen.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{screen.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-black mb-12 leading-tight sticky top-32">
                DESIGN
                <br />
                <span className="text-outline">APPROACH</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-16">
              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Historical Research</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Extensively studied Nokia 3310, Motorola, and other iconic 90s phones to ensure authentic UI patterns, color schemes, and visual elements that truly capture the era.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Constraint-Based Design</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Worked within technological limitations of 1990s displays—limited colors, low resolution, simple icons—to create an authentic retro experience.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Feature Adaptation</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Translated modern WhatsApp features into retro equivalents, maintaining functionality while respecting vintage interface conventions and user expectations.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Attention to Detail</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Added authentic touches like battery indicators, signal bars, and vintage button styles to enhance the nostalgic experience throughout all 9 screens.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Learnings */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-white p-16 md:p-24 shadow-brutal">
            <h2 className="text-black mb-16 leading-tight">
              KEY
              <br />
              <span className="text-outline">LEARNINGS</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
              <div>
                <h3 className="text-black mb-4">Constraints Spark Creativity</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Working within 1990s technological limitations sparked creative solutions and deepened appreciation for design evolution.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Research is Essential</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Authentic retro design requires thorough research of historical patterns, not just applying vintage filters to modern interfaces.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Functional Nostalgia</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Nostalgic aesthetics must still serve usability—the design should evoke memories without compromising modern UX principles.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Detail Makes the Difference</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Small touches like pixel-perfect typography and authentic icons are what separate genuine retro design from mere pastiche.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="https://www.figma.com/design/Qgr4ZdigW02AahROYE2cqm/Whatsapp-1990s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-16 py-8 bg-black text-white shadow-brutal hover:translate-x-3 hover:translate-y-3 hover:shadow-none transition-all uppercase tracking-wider"
          >
            <span>View on Figma</span>
            <ExternalLink className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
