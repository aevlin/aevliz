import { motion } from "motion/react";
import { ArrowLeft, Figma } from "lucide-react";
import { DoodleStar, DoodleCircle, DoodleSparkle, DoodleUnderline } from "../Doodles";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import whatsappUI from "figma:asset/fa2cf2fb22ec2e685b4392bdad23b00d94dbc3af.png";

interface WhatsApp1990sProps {
  onBack: () => void;
}

export function WhatsApp1990s({ onBack }: WhatsApp1990sProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-yellow-50 to-white">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-200 hover:border-yellow-300 group"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:-translate-x-1 transition-transform" />
        <span className="text-gray-700">Back to Projects</span>
      </motion.button>

      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative"
        >
          <motion.div
            className="absolute -top-8 -right-8 text-green-300 opacity-20 hidden lg:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <DoodleStar />
          </motion.div>

          <div className="text-center mb-8">
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-green-100 to-yellow-100 text-green-700 rounded-full mb-4 border-2 border-green-200">
              Mobile UI Design
            </span>
            <h1 className="mb-4 bg-gradient-to-r from-green-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              WhatsApp 1990s Retro vers.
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A nostalgic Figma design concept reimagining WhatsApp with authentic 1990s mobile 
              interface aesthetics, complete with retro UI elements and vintage screen designs.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12 bg-gradient-to-b from-amber-50 to-yellow-50 min-h-[400px] flex items-center justify-center">
            <ImageWithFallback 
              src={whatsappUI} 
              alt="WhatsApp 1990s UI Design - 9 Screen Grid" 
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "🎯", label: "Role", value: "UI/UX Designer" },
              { icon: "⏱️", label: "Timeline", value: "2 Weeks" },
              { icon: "🛠️", label: "Tools", value: "Figma" },
              { icon: "🎨", label: "Type", value: "Retro Mobile UI" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border-2 border-green-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                <div className="text-gray-800">{metric.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Screen Breakdown */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-8 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
            Screen Breakdown
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Welcome Screen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 rounded-full text-sm">
                  Screen 1
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Welcome Screen</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Classic green gradient background with the iconic WhatsApp logo, evoking the 
                simplicity and nostalgia of 1990s mobile interfaces.
              </p>
            </motion.div>

            {/* Chat List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 rounded-full text-sm">
                  Screen 2
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Chat List</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Retro chat list with vintage typography, timestamp alignment, and battery 
                indicator reminiscent of early Nokia phones.
              </p>
            </motion.div>

            {/* Chat Screen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-lime-100 text-green-700 rounded-full text-sm">
                  Screen 3
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Chat Screen</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Vintage-style message bubbles with beige background and classic mobile 
                input interface showing authentic 90s conversation flow.
              </p>
            </motion.div>

            {/* Call Logs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-full text-sm">
                  Screen 4
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Call Logs</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Recent calls interface with retro icons, timestamps, and simple list 
                view matching early mobile phone designs.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-100 to-green-100 text-teal-700 rounded-full text-sm">
                  Screen 5
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Contact Info</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Contact profile with classic avatar placeholder, phone number, and 
                action buttons styled in retro beige tones.
              </p>
            </motion.div>

            {/* Notification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 rounded-full text-sm">
                  Screen 6
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Notification</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Push notification design with vintage alert styling, showing incoming 
                call interface with classic button layouts.
              </p>
            </motion.div>

            {/* Status Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm">
                  Screen 7
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Status Bar</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                User status list with profile pictures and retro status messages, 
                maintaining the vintage mobile aesthetic throughout.
              </p>
            </motion.div>

            {/* Status View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 rounded-full text-sm">
                  Screen 8
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Status</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Full-screen status viewer with dark background and centered text, 
                mimicking the minimal design of 1990s mobile status updates.
              </p>
            </motion.div>

            {/* Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-lime-100 text-green-700 rounded-full text-sm">
                  Screen 9
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Settings</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Settings menu with user profile, account options, and navigation 
                elements styled to match classic mobile phone interfaces.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <motion.div
            className="absolute -left-8 top-12 text-green-300 opacity-20 hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <DoodleSparkle />
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent relative inline-block">
            Project Overview
            <motion.div 
              className="absolute -bottom-2 left-0 text-green-400 opacity-40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            >
              <DoodleUnderline />
            </motion.div>
          </h2>
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl p-8 border-2 border-green-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              WhatsApp 1990s Retro vers. is a Figma design concept that reimagines the modern WhatsApp 
              interface through the lens of 1990s mobile technology. This nostalgic exploration recreates 
              the aesthetic of early mobile phones with their characteristic green monochrome displays, 
              beige UI elements, and simplified navigation patterns.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The design captures the essence of vintage Nokia and early mobile interfaces, featuring all 
              core WhatsApp functionalities - chat lists, conversations, calls, contacts, status updates, 
              and settings - while maintaining authentic retro visual language including pixel-perfect 
              typography, limited color palettes, and classic icon designs.
            </p>
          </div>
        </motion.section>

        {/* The Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
            The Challenge
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-green-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              Creating an authentic 1990s mobile interface while maintaining WhatsApp's modern functionality:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-yellow-600 rounded-full mt-2 flex-shrink-0" />
                <span>Balancing nostalgia with usability - ensuring the retro aesthetic doesn't compromise user experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-yellow-600 rounded-full mt-2 flex-shrink-0" />
                <span>Authentically recreating 1990s mobile UI patterns including limited color palettes and pixel-based layouts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-yellow-600 rounded-full mt-2 flex-shrink-0" />
                <span>Translating modern features like status updates and multimedia messaging into retro constraints</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-yellow-600 rounded-full mt-2 flex-shrink-0" />
                <span>Maintaining WhatsApp's brand identity while embracing vintage mobile design language</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Design Solution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
            Design Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="mb-3 text-gray-800">Authentic Retro Aesthetic</h3>
              <p className="text-gray-600 text-sm">
                Carefully researched and recreated the visual language of 1990s mobile phones with 
                green monochrome displays, beige backgrounds, and vintage icon styles
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="mb-3 text-gray-800">Limited Color Palette</h3>
              <p className="text-gray-600 text-sm">
                Used restricted color schemes typical of early mobile displays - primarily greens, 
                beiges, and dark grays to create genuine 90s authenticity
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-200">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="mb-3 text-gray-800">Simplified Navigation</h3>
              <p className="text-gray-600 text-sm">
                Designed straightforward navigation patterns matching early mobile phones with 
                bottom icon bars and simple list-based interfaces
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">💬</span>
              </div>
              <h3 className="mb-3 text-gray-800">Classic Typography</h3>
              <p className="text-gray-600 text-sm">
                Implemented pixel-style fonts and compact text layouts reminiscent of early 
                mobile screens with limited display resolution
              </p>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
            Key Features Designed
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-green-100">
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="mb-2 text-gray-800">Welcome & Chat Screens</h3>
                <p className="text-gray-600">
                  Classic green gradient welcome screen with WhatsApp logo, followed by retro chat 
                  list featuring vintage timestamps and battery indicators
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="mb-2 text-gray-800">Conversation Interface</h3>
                <p className="text-gray-600">
                  Beige message bubbles with authentic 90s styling, simple input field, and 
                  navigation icons matching early mobile chat interfaces
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="mb-2 text-gray-800">Calls & Contacts</h3>
                <p className="text-gray-600">
                  Call logs with retro icons, contact info screens with classic avatar placeholders, 
                  and notification designs inspired by vintage mobile alerts
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="mb-2 text-gray-800">Status & Settings</h3>
                <p className="text-gray-600">
                  Status bar with user profiles, dark status viewer screens, and settings menu 
                  maintaining the consistent retro visual language
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <motion.div
            className="absolute -right-8 top-12 text-yellow-300 opacity-20 hidden lg:block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <DoodleCircle />
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
            Design Considerations
          </h2>
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl p-8 border-2 border-green-200">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🕰️</span>
                <div>
                  <strong>Historical Accuracy:</strong> Extensively researched Nokia 3310, Motorola, 
                  and other iconic 90s phones to ensure authentic UI patterns and visual elements
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <strong>Functional Nostalgia:</strong> Balanced nostalgic aesthetics with modern 
                  usability - keeping interfaces recognizable while embracing retro constraints
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🖼️</span>
                <div>
                  <strong>Screen Consistency:</strong> Maintained cohesive visual language across 
                  all 9 screens with consistent color schemes, borders, and navigation patterns
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <strong>Detail Oriented:</strong> Added authentic touches like battery indicators, 
                  signal bars, and vintage button styles to enhance the retro experience
                </div>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Impact & Learnings */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
            Key Learnings
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-green-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Design Constraints as Creativity</h3>
              <p className="text-gray-600 text-sm">
                Working within 1990s technological limitations sparked creative solutions and 
                deepened appreciation for how far mobile design has evolved
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border-2 border-yellow-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Visual Language Research</h3>
              <p className="text-gray-600 text-sm">
                Gained expertise in researching and recreating historical design patterns while 
                maintaining modern design principles and accessibility
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border-2 border-teal-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Balancing Form & Function</h3>
              <p className="text-gray-600 text-sm">
                Learned to merge aesthetic goals with usability requirements, ensuring nostalgic 
                design doesn't compromise the user experience
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Attention to Detail</h3>
              <p className="text-gray-600 text-sm">
                Refined skills in recreating pixel-perfect interfaces with careful attention to 
                typography, spacing, and color accuracy
              </p>
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
            className="inline-flex px-8 py-4 bg-gradient-to-r from-green-600 via-yellow-600 to-orange-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 items-center gap-2"
          >
            <Figma className="w-5 h-5" />
            <span>View on Figma</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
