import { motion } from "motion/react";
import { ArrowLeft, Figma, Palette, Layout, Users, Sparkles } from "lucide-react";
import { DoodleStar, DoodleCircle, DoodleSparkle, DoodleUnderline } from "../Doodles";
import caveraHero from "figma:asset/3f89057f37bf3828f2d1f36bf556d29c3879fea8.png";
import caveraLogo from "figma:asset/7967b8a04ba5f5e1d66b00807451573dc19f5823.png";

interface CaveraProps {
  onBack: () => void;
}

export function Cavera({ onBack }: CaveraProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 hover:border-orange-300 group"
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
            className="absolute -top-8 -right-8 text-orange-300 opacity-20 hidden lg:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <DoodleStar />
          </motion.div>

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src={caveraLogo} alt="Cavera Logo" className="h-16 w-auto brightness-[0.3] contrast-125" />
          </div>

          <div className="text-center mb-8">
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full mb-4 border-2 border-amber-200">
              Landing Page Design
            </span>
            <h1 className="mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
              Cavera
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A sophisticated landing page design for a clothing store that blends modern minimalism 
              with timeless elegance, creating an impactful first impression for fashion-forward customers.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12">
            <img 
              src={caveraHero} 
              alt="Cavera website hero section" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "🎯", label: "Role", value: "UI/UX Designer" },
              { icon: "⏱️", label: "Timeline", value: "2 Weeks" },
              { icon: "🛠️", label: "Tools", value: "Figma" },
              { icon: "🎨", label: "Type", value: "E-Commerce" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border-2 border-amber-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                <div className="text-gray-800">{metric.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <motion.div
            className="absolute -left-8 top-12 text-amber-300 opacity-20 hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <DoodleSparkle />
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
            Project Overview
            <motion.div 
              className="absolute -bottom-2 left-0 text-orange-400 opacity-40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            >
              <DoodleUnderline />
            </motion.div>
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200">
            <p className="text-gray-700 leading-relaxed mb-6">
              Cavera is a landing page concept for a premium clothing brand designed to capture 
              attention and set the tone for the shopping experience. The design emphasizes clean lines, 
              sophisticated color palettes, and elegant typography to create an impactful first impression 
              that reflects the brand's commitment to quality and timeless style.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-3 text-gray-800 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-amber-600" />
                  Design Goals
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Create a luxurious yet approachable brand identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Showcase products with high-quality imagery and layout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Design a captivating hero section that converts visitors</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-gray-800 flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  Target Audience
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Fashion-conscious individuals aged 25-40</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Customers seeking quality over quantity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Urban professionals with refined taste</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Design Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Design Highlights
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="mb-2 text-gray-800">Impactful Hero Section</h3>
              <p className="text-gray-600">
                Dark, sophisticated background with compelling copy: "Where trends bloom, and your style 
                becomes the story." The hero features lifestyle photography with warm, earthy tones that 
                immediately establish the brand's premium positioning and capture visitor attention.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="mb-2 text-gray-800">Editorial Visual Language</h3>
              <p className="text-gray-600">
                Arched frames showcase diverse models in curated outfits, creating a magazine-quality 
                editorial feel that sets this landing page apart from typical e-commerce designs.
              </p>
            </div>
            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="mb-2 text-gray-800">Minimal Navigation</h3>
              <p className="text-gray-600">
                Clean navigation bar with essential links (Home, Shop, Sale, Blog, Showcase) 
                and user actions (Cart, Login, Sign up) keeps focus on the hero content while maintaining usability.
              </p>
            </div>
            <div className="border-l-4 border-orange-400 pl-6">
              <h3 className="mb-2 text-gray-800">Distinctive Branding</h3>
              <p className="text-gray-600">
                The Cavera wordmark features an elegant serif typeface that communicates sophistication 
                and timeless style, working beautifully on both the dark hero and light backgrounds.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Design System */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <motion.div
            className="absolute -right-12 top-12 text-orange-300 opacity-20 hidden lg:block"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <DoodleCircle />
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Design System
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-100 shadow-md">
              <h3 className="mb-4 text-gray-800 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  🎨
                </div>
                Color Palette
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] border-2 border-gray-300" />
                  <div>
                    <div className="text-sm text-gray-800">Primary Dark</div>
                    <div className="text-xs text-gray-500">#1A1A1A</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] border-2 border-gray-300" />
                  <div>
                    <div className="text-sm text-gray-800">Background</div>
                    <div className="text-xs text-gray-500">#F5F5F5</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-300" />
                  <div>
                    <div className="text-sm text-gray-800">White</div>
                    <div className="text-xs text-gray-500">#FFFFFF</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-100 shadow-md">
              <h3 className="mb-4 text-gray-800 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                  ✏️
                </div>
                Typography
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl mb-1" style={{ fontFamily: 'serif' }}>CAVERA</div>
                  <div className="text-xs text-gray-500">Display - Serif</div>
                </div>
                <div>
                  <div className="text-lg mb-1">Heading Text</div>
                  <div className="text-xs text-gray-500">Headings - Sans Serif</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Body copy and descriptions</div>
                  <div className="text-xs text-gray-500">Body - Sans Serif Regular</div>
                </div>
              </div>
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
          <h2 className="mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Clear CTAs",
                description: "\"Explore Spring 2025 collection\" and \"Discover New Arrivals\" buttons provide clear next steps for engaged visitors"
              },
              {
                icon: "📱",
                title: "Responsive Layout",
                description: "Landing page structure is designed to adapt gracefully across desktop, tablet, and mobile devices"
              },
              {
                icon: "🖼️",
                title: "Editorial Presentation",
                description: "Magazine-style arched frames create a unique, memorable first impression that stands out"
              },
              {
                icon: "🎨",
                title: "Sophisticated Palette",
                description: "Dark hero with warm accent tones creates visual depth and premium brand perception"
              },
              {
                icon: "✨",
                title: "Visual Interest",
                description: "Thoughtful composition and spacing create visual rhythm that guides the eye naturally"
              },
              {
                icon: "🔍",
                title: "Strong Hierarchy",
                description: "Strategic typography and layout ensure the headline and CTAs capture immediate attention"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-100 hover:border-orange-200 transition-colors"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
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
          <h2 className="mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Design Decisions
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌑</span>
                <div>
                  <strong>Dark Hero Background:</strong> Creates immediate visual impact and drama, making 
                  the headline and featured imagery pop for a memorable first impression
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <strong>Arched Frames:</strong> Architectural arch shapes add elegance and sophistication 
                  while naturally drawing the eye to featured looks and creating visual interest
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <strong>Diverse Representation:</strong> Featuring models of different backgrounds creates 
                  relatability and reflects modern brand values for a broader appeal
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <strong>Emotional Messaging:</strong> "Where trends bloom, and your style becomes the story" 
                  connects emotionally rather than just promoting products, creating brand affinity
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <strong>Focused Layout:</strong> Minimal navigation and clean layout keep visitor attention 
                  on the hero message and conversion CTAs
                </div>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Key Learnings */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Key Learnings
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-100 shadow-md">
              <h3 className="mb-3 text-gray-800">First Impressions Matter</h3>
              <p className="text-gray-600 text-sm">
                Landing pages need immediate impact—the dark hero with compelling copy and editorial 
                imagery creates instant brand recognition and sets expectations
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Editorial Approach</h3>
              <p className="text-gray-600 text-sm">
                Treating fashion e-commerce like editorial content elevates the brand perception 
                and creates a more aspirational, engaging experience
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Minimalist Power</h3>
              <p className="text-gray-600 text-sm">
                Restraint in navigation and layout elements keeps focus on what matters most—the 
                brand message and the call to action
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-100 shadow-md">
              <h3 className="mb-3 text-gray-800">Brand Consistency</h3>
              <p className="text-gray-600 text-sm">
                Every element from typography to color choices reinforces the sophisticated, 
                timeless brand identity throughout the landing page
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
            href="https://www.figma.com/design/YOUR_FIGMA_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 items-center gap-2"
          >
            <Figma className="w-5 h-5" />
            <span>View on Figma</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
