import { motion } from "motion/react";
import { ArrowLeft, Figma } from "lucide-react";
import { DoodleStar, DoodleCircle, DoodleSparkle, DoodleUnderline } from "../Doodles";
import Design from "../../imports/Design-17-914";
import toneUpLogo from "figma:asset/962efa58d190b2be51c8cdb70d5f137275c0fa9a.png";
import toneUpHero from "figma:asset/8075cb80e5be6a4e52021cbb4b109d4402fec1f8.png";

interface ToneUpProps {
  onBack: () => void;
}

export function ToneUp({ onBack }: ToneUpProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-purple-50 to-white">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200 hover:border-pink-300 group"
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
            className="absolute -top-8 -right-8 text-purple-300 opacity-20 hidden lg:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <DoodleStar />
          </motion.div>

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src={toneUpLogo} alt="ToneUp Logo" className="h-16 md:h-20 w-auto" />
          </div>

          <div className="text-center mb-8">
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full mb-4 border-2 border-purple-200">
              Mobile UI Design
            </span>
            <h1 className="mb-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ToneUp
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A Figma design concept for music learning that crafts interfaces to make music education 
              accessible and engaging for all skill levels.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12">

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "🎯", label: "Role", value: "UI/UX Designer" },
              { icon: "⏱️", label: "Timeline", value: "3 Weeks" },
              { icon: "🛠️", label: "Tools", value: "Figma" },
              { icon: "🎨", label: "Type", value: "Mobile UI" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border-2 border-purple-100 shadow-md hover:shadow-lg transition-shadow"
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
          <h2 className="mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
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
            A complete mobile experience showcasing the onboarding, level selection, and learning interface
          </p>
          
          <div className="bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 rounded-3xl p-4 md:p-8 overflow-auto shadow-2xl border-2 border-purple-200">
            <div className="min-w-[1500px] h-[2200px] relative">
              <Design />
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-4">
            Scroll horizontally and vertically to explore all screens
          </p>
        </motion.section>

        {/* Screen Breakdown */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-8 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            Screen Breakdown
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Screen 1: Front Page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm">
                  Screen 1
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Splash & Welcome</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Beautiful gradient background with the ToneUp logo creates an inviting first impression. 
                Clean, minimal design sets the tone for the app experience.
              </p>
            </motion.div>

            {/* Screen 2: Level Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm">
                  Screen 2
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Level Selection</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Personalized onboarding with four skill levels. Each level is color-coded with 
                clear descriptions to help users make the right choice for their journey.
              </p>
            </motion.div>

            {/* Screen 3: Learning Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-full text-sm">
                  Screen 3
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Learning Hub</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Step-by-step learning modules with visual progress indicators. Features "Song of the Day" 
                and organized curriculum to guide users through their musical journey.
              </p>
            </motion.div>

            {/* Screen 4: Instrument Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100"
            >
              <div className="mb-4 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm">
                  Screen 4
                </span>
              </div>
              <h3 className="mb-3 text-gray-800 text-center">Instrument Choice</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Interactive card-based selection with playful illustrations for Guitar, Piano, Drum, 
                and Vocal lessons. Personalized greeting makes users feel welcomed.
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
            className="absolute -left-8 top-12 text-cyan-300 opacity-20 hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <DoodleSparkle />
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
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
          <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-3xl p-8 border-2 border-purple-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              ToneUp is a UI/UX design concept for a mobile application that reimagines how people learn musical 
              instruments. The design supports multiple instruments including Guitar, Piano, Drums, and Vocal 
              training, showcasing a structured, step-by-step interface that would guide users from complete 
              beginners to confident players.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through an intuitive interface designed in Figma, ToneUp features personalized learning paths based 
              on skill levels (Elementary, Beginner, Intermediate, Advanced), making music education feel accessible 
              and less intimidating. The playful card-based instrument selection creates an engaging visual experience 
              that sets the tone for the learning journey.
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
          <h2 className="mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            The Challenge
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-cyan-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              Many aspiring musicians struggle with learning instruments due to:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                <span>Overwhelming amount of information without clear progression path</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                <span>Difficulty adapting learning materials to individual skill levels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                <span>Lack of structured daily practice guidance and motivation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                <span>High barrier to entry with expensive private lessons</span>
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
          <h2 className="mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            Design Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="mb-3 text-gray-800">Personalized Level Selection</h3>
              <p className="text-gray-600 text-sm">
                Visual design for skill level selection (Elementary, Beginner, Intermediate, Advanced) with 
                color-coded cards that would provide customized learning paths matching user abilities
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">📚</span>
              </div>
              <h3 className="mb-3 text-gray-800">Step-by-Step Curriculum</h3>
              <p className="text-gray-600 text-sm">
                Interface design for structured learning modules including "Tune your guitar", "Hold your Guitar", 
                "Learn your first chord", and "Play Your First Song"
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎵</span>
              </div>
              <h3 className="mb-3 text-gray-800">Daily Song Challenges</h3>
              <p className="text-gray-600 text-sm">
                Designed "Song of the Day" feature to keep users engaged with achievable goals like 
                "Strum along to 'Perfect' in just 2 chords"
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="mb-3 text-gray-800">Playful Visual Design</h3>
              <p className="text-gray-600 text-sm">
                Color-coded modules with soft pastels and playful icons make learning feel 
                approachable and reduce intimidation factor
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
          <h2 className="mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            Key Features Designed
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-cyan-100">
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="mb-2 text-gray-800">Onboarding & Level Selection</h3>
                <p className="text-gray-600">
                  Clean onboarding flow with beautiful gradient backgrounds and the ToneUp logo. 
                  Level selection screen with color-coded difficulty levels and clear descriptions
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="mb-2 text-gray-800">Learning Dashboard</h3>
                <p className="text-gray-600">
                  Step-by-step interface showcasing all learning modules with visual indicators, 
                  progress tracking, and playful decorative elements
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="mb-2 text-gray-800">Bottom Navigation</h3>
                <p className="text-gray-600">
                  Designed intuitive navigation bar with Home, Music, Tools, and User profile icons 
                  for quick access to key sections
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="mb-2 text-gray-800">Daily Engagement</h3>
                <p className="text-gray-600">
                  Featured "Song of the Day" with album artwork and achievable challenges to 
                  maintain daily practice habits
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
            className="absolute -right-8 top-0 text-purple-300 opacity-30 hidden lg:block"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <DoodleCircle />
          </motion.div>

          <h2 className="mb-8 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            Design Process
          </h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "User Research", desc: "Interviewed aspiring musicians to understand pain points in self-learning", color: "from-purple-600 to-pink-600" },
              { step: "02", title: "Information Architecture", desc: "Mapped out user flows for different skill levels and learning paths", color: "from-cyan-600 to-blue-600" },
              { step: "03", title: "Visual Identity", desc: "Developed color system using soft pastels to create approachable, friendly aesthetic", color: "from-orange-600 to-yellow-600" },
              { step: "04", title: "UI Design", desc: "Created high-fidelity mockups in Figma with attention to hierarchy and readability", color: "from-pink-600 to-purple-600" },
              { step: "05", title: "Micro-interactions", desc: "Designed playful animations and transitions to enhance engagement", color: "from-cyan-600 to-purple-600" }
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
          <h2 className="mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            Design Decisions
          </h2>
          <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-3xl p-8 border-2 border-cyan-200">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <strong>Color Psychology:</strong> Each skill level has its own color scheme 
                  (purple for Elementary, blue for Beginner, cyan for Intermediate, orange for Advanced) 
                  to create visual distinction and memorability
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <strong>Playful Elements:</strong> Star icons and decorative elements add personality 
                  without overwhelming the clean, organized layout
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <strong>Mobile-First:</strong> Designed specifically for mobile devices with 
                  thumb-friendly navigation and clear tap targets
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <strong>Clear Hierarchy:</strong> Used card-based design with subtle shadows and 
                  opacity to create depth and guide user attention
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
          <h2 className="mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            Key Learnings
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-cyan-100 shadow-md">
              <h3 className="mb-3 text-gray-800">User-Centered Design</h3>
              <p className="text-gray-600 text-sm">
                Learned the importance of adapting the interface to different skill levels - 
                what works for beginners might overwhelm elementary users
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Visual Consistency</h3>
              <p className="text-gray-600 text-sm">
                Maintaining a cohesive color system and design language across all screens 
                creates a professional, polished user experience
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-pink-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Gamification Balance</h3>
              <p className="text-gray-600 text-sm">
                Finding the sweet spot between playful engagement and educational credibility 
                is crucial for EdTech applications
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Accessibility Matters</h3>
              <p className="text-gray-600 text-sm">
                Large, readable text and clear iconography ensure the app is usable for 
                learners of all ages and abilities
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
            href="https://www.figma.com/design/94LASDImNBZld1HxxxhsYB/ToneUp?node-id=0-1&t=viX9az5xBZKWIW99-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 items-center gap-2"
          >
            <Figma className="w-5 h-5" />
            <span>View on Figma</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
