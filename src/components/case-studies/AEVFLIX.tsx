import { motion } from "motion/react";
import { ArrowLeft, Figma } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { DoodleStar, DoodleCircle, DoodleSparkle, DoodleUnderline } from "../Doodles";
import aevflixLogo from "figma:asset/811724d66642564227af9e8c0be5e21098f06ba7.png";
import aevflixHome from "figma:asset/41acdb714fa1000a46e63447afa31354c55a16d4.png";
import aevflixDetail from "figma:asset/86778278013cf222446ddeb883153a3a19d6c644.png";
import aevflixProfiles from "figma:asset/f17df54b1bdf2935e53bfea649bf5c196018d623.png";

interface AEVFLIXProps {
  onBack: () => void;
}

export function AEVFLIX({ onBack }: AEVFLIXProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-purple-50 to-white">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-200 hover:border-purple-300 group"
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
            className="absolute -top-8 -right-8 text-red-300 opacity-20 hidden lg:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <DoodleStar />
          </motion.div>

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src={aevflixLogo} alt="AEVFLIX Logo" className="h-20 md:h-24 w-auto" />
          </div>

          <div className="text-center mb-8">
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-red-100 to-purple-100 text-red-700 rounded-full mb-4 border-2 border-red-200">
              Web UI Design
            </span>
            <h1 className="mb-4 bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AEVFLIX
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A Figma design concept reimagining streaming platforms with enhanced discovery features 
              and personalized viewing experiences.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12">
            <img 
              src={aevflixHome} 
              alt="AEVFLIX home screen" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "🎯", label: "Role", value: "UI/UX Designer" },
              { icon: "⏱️", label: "Timeline", value: "4 Weeks" },
              { icon: "🛠️", label: "Tools", value: "Figma" },
              { icon: "🎨", label: "Type", value: "Web UI" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border-2 border-red-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                <div className="text-gray-800">{metric.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* UI Showcase Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
            Final Design
            <motion.div 
              className="absolute -bottom-2 left-0 text-purple-400 opacity-40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            >
              <DoodleUnderline />
            </motion.div>
          </h2>
          <p className="text-gray-600 mb-8">
            A complete streaming platform experience with home, detail, and profile screens
          </p>

          <div className="space-y-8">
            {/* Home Screen */}
            <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-3xl p-4 md:p-8 shadow-2xl border-2 border-red-200">
              <img 
                src={aevflixHome} 
                alt="AEVFLIX home screen" 
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Detail Screen */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-4 md:p-8 shadow-2xl border-2 border-purple-200">
              <img 
                src={aevflixDetail} 
                alt="AEVFLIX detail screen" 
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Profiles Screen */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-4 md:p-8 shadow-2xl border-2 border-pink-200">
              <img 
                src={aevflixProfiles} 
                alt="AEVFLIX profiles screen" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Screen Breakdown */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-8 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Screen Breakdown
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Screen 1: Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-sm">
                  Home Screen
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Browse & Discover</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Hero banner with featured content, curated rows of movies and shows organized by 
                category, and personalized recommendations for seamless discovery.
              </p>
            </motion.div>

            {/* Screen 2: Detail */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm">
                  Detail Screen
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Content Details</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Rich content information with large hero image, synopsis, cast details, 
                episode selector, and similar content recommendations.
              </p>
            </motion.div>

            {/* Screen 3: Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-red-100 text-pink-700 rounded-full text-sm">
                  Profile Screen
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">User Profiles</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Multi-profile selection with avatars and names, allowing family members to 
                maintain personalized viewing experiences and recommendations.
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
            className="absolute -left-8 top-12 text-red-300 opacity-20 hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <DoodleSparkle />
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
            Project Overview
            <motion.div 
              className="absolute -bottom-2 left-0 text-purple-400 opacity-40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            >
              <DoodleUnderline />
            </motion.div>
          </h2>
          <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-3xl p-8 border-2 border-red-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              AEVFLIX is a Figma design concept for a streaming platform that reimagines the viewing 
              experience with enhanced discovery features and personalized content curation. The design 
              takes inspiration from popular streaming services while introducing fresh visual elements 
              and improved user flows for content browsing and selection.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through a sleek, modern interface, AEVFLIX features a comprehensive home screen with 
              curated content rows, an immersive detail page with rich media information, and a 
              profile selection system for personalized viewing. The design emphasizes visual hierarchy, 
              high-quality imagery, and intuitive navigation to create an engaging entertainment hub.
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
          <h2 className="mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            The Challenge
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-red-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              Modern streaming platforms face several user experience challenges:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                <span>Content discovery paralysis - too many options without effective curation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                <span>Lack of visual hierarchy making it difficult to focus on featured content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                <span>Generic recommendations that don't feel personalized to individual users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                <span>Cluttered detail pages with poorly organized content information</span>
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
          <h2 className="mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Design Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-red-200">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎬</span>
              </div>
              <h3 className="mb-3 text-gray-800">Hero-Driven Discovery</h3>
              <p className="text-gray-600 text-sm">
                Large hero banner with featured content that immediately captures attention and 
                provides quick access to trending shows and movies
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="mb-3 text-gray-800">Organized Content Rows</h3>
              <p className="text-gray-600 text-sm">
                Curated horizontal rows organized by genre, mood, and user preferences with 
                high-quality thumbnails for easy browsing
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">📝</span>
              </div>
              <h3 className="mb-3 text-gray-800">Rich Detail Pages</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive content pages with synopsis, cast, episode selection, and 
                similar content recommendations all in one immersive view
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-red-50 rounded-2xl p-6 border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">👥</span>
              </div>
              <h3 className="mb-3 text-gray-800">Profile Personalization</h3>
              <p className="text-gray-600 text-sm">
                Multi-profile support with distinct avatars and names allowing family members 
                to have personalized content and viewing history
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
          <h2 className="mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Key Features Designed
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-red-100">
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="mb-2 text-gray-800">Dynamic Hero Banner</h3>
                <p className="text-gray-600">
                  Large, cinematic hero section showcasing featured content with play and info 
                  buttons for immediate engagement
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="mb-2 text-gray-800">Content Categories</h3>
                <p className="text-gray-600">
                  Organized rows including "Trending Now", "Popular on AEVFLIX", "Continue Watching", 
                  and genre-specific collections
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="mb-2 text-gray-800">Episode Navigator</h3>
                <p className="text-gray-600">
                  Intuitive episode selector with season dropdown and episode thumbnails with 
                  descriptions for series content
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="mb-2 text-gray-800">Profile Management</h3>
                <p className="text-gray-600">
                  Clean profile selection interface with "Add Profile" option for growing families 
                  and customizable avatars
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
            className="absolute -right-8 top-0 text-red-300 opacity-30 hidden lg:block"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <DoodleCircle />
          </motion.div>

          <h2 className="mb-8 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Design Process
          </h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Competitive Analysis", desc: "Analyzed leading streaming platforms to identify UX patterns and opportunities for improvement", color: "from-red-600 to-pink-600" },
              { step: "02", title: "User Flow Mapping", desc: "Mapped out typical user journeys from content discovery to playback", color: "from-purple-600 to-pink-600" },
              { step: "03", title: "Visual Design System", desc: "Created dark theme with vibrant accent colors for cinematic viewing experience", color: "from-pink-600 to-red-600" },
              { step: "04", title: "UI Components", desc: "Designed reusable components for content cards, navigation, and media players in Figma", color: "from-red-600 to-purple-600" },
              { step: "05", title: "Responsive Layouts", desc: "Ensured design works seamlessly across desktop, tablet, and TV interfaces", color: "from-purple-600 to-pink-600" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {phase.step}
                </div>
                <div className="flex-grow">
                  <h3 className="mb-2 text-gray-800">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Design Decisions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Design Decisions
          </h2>
          <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-3xl p-8 border-2 border-red-200">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <strong>Dark Theme:</strong> Chose a dark color scheme to reduce eye strain during 
                  extended viewing sessions and make content imagery stand out
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🖼️</span>
                <div>
                  <strong>Image-First Design:</strong> Prioritized high-quality thumbnails and hero images 
                  to create visual interest and help users make quick decisions
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📐</span>
                <div>
                  <strong>Grid System:</strong> Used consistent spacing and alignment for content cards 
                  to create order and improve scannability
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <strong>Clear CTAs:</strong> Designed prominent play and info buttons with high contrast 
                  to guide users toward key actions
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
          <h2 className="mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Key Learnings
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-red-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Content is King</h3>
              <p className="text-gray-600 text-sm">
                In streaming platforms, the content imagery should be the star - UI elements 
                should enhance rather than compete with the media
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Information Hierarchy</h3>
              <p className="text-gray-600 text-sm">
                Organizing content by categories and user behavior patterns makes discovery 
                more intuitive and reduces decision fatigue
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-pink-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Personalization Value</h3>
              <p className="text-gray-600 text-sm">
                Multiple user profiles with distinct experiences is crucial for household 
                streaming services to feel relevant to each viewer
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-red-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Visual Consistency</h3>
              <p className="text-gray-600 text-sm">
                Maintaining consistent card sizes, spacing, and typography across all screens 
                creates a cohesive, professional experience
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
            href="https://www.figma.com/design/lwVSPVIFi7H1Pd4e3OXaxF/AEVFLIX?node-id=0-1&t=0KDO71FS3NZ1zDYE-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 items-center gap-2"
          >
            <Figma className="w-5 h-5" />
            <span>View on Figma</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
