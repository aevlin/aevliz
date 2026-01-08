import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import aevflixLogo from "figma:asset/811724d66642564227af9e8c0be5e21098f06ba7.png";
import aevflixHero from "figma:asset/41acdb714fa1000a46e63447afa31354c55a16d4.png";

interface AEVFLIXProps {
  onBack: () => void;
}

export function AEVFLIX({ onBack }: AEVFLIXProps) {
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
              <span className="uppercase tracking-wider text-sm">Web Platform Design</span>
            </div>
          </div>

          {/* Logo */}
          <div className="mb-16">
            <img src={aevflixLogo} alt="AEVFLIX Logo" className="h-24 md:h-32 w-auto brightness-0" />
          </div>

          {/* Title */}
          <h1 className="text-black mb-12 leading-[0.85]">
            AEVFLIX
          </h1>

          {/* Description */}
          <p className="text-3xl text-neutral-600 max-w-4xl leading-relaxed mb-16">
            A Figma design concept reimagining the streaming experience with enhanced content discovery, personalized recommendations, and an immersive viewing interface.
          </p>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
            {[
              { label: "Role", value: "UI/UX Designer" },
              { label: "Timeline", value: "4 Weeks" },
              { label: "Tools", value: "Figma" },
              { label: "Type", value: "Web Platform" }
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
          <div className="relative bg-neutral-900 shadow-brutal overflow-hidden">
            <img
              src={aevflixHero}
              alt="AEVFLIX Interface Design"
              className="w-full h-auto object-cover"
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
                AEVFLIX is a conceptual streaming platform designed entirely in Figma, focusing on creating an elevated entertainment experience that balances content discovery with immersive viewing.
              </p>
              <p className="text-2xl text-neutral-700 leading-loose">
                The design explores modern UI patterns for video streaming, personalization features, and responsive layouts that adapt seamlessly across devices and viewing contexts.
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
                  <h3 className="text-white mb-4">Content Overload</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Helping users navigate vast content libraries without feeling overwhelmed by choice paralysis
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex gap-6">
                <div className="text-6xl opacity-20">02</div>
                <div>
                  <h3 className="text-white mb-4">Personalization</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Creating recommendation systems that feel genuinely helpful rather than algorithmic and impersonal
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex gap-6">
                <div className="text-6xl opacity-20">03</div>
                <div>
                  <h3 className="text-white mb-4">Visual Hierarchy</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Balancing hero content presentation with secondary discovery features in a clean, uncluttered interface
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Design Solution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-black mb-16 leading-tight">
            DESIGN
            <br />
            <span className="text-outline">SOLUTION</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">🎬</div>
              <h3 className="text-black mb-6">Cinematic Interface</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Full-width hero sections with high-quality artwork that immerse users in content before they even start watching
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">🔍</div>
              <h3 className="text-black mb-6">Smart Discovery</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Intelligent categorization and filtering systems that surface relevant content based on viewing patterns
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">⚡</div>
              <h3 className="text-black mb-6">Fast Navigation</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Streamlined menus and search functionality that get users to their content with minimal friction
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">📱</div>
              <h3 className="text-black mb-6">Responsive Design</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Layouts that adapt beautifully across desktop, tablet, and mobile while maintaining visual consistency
              </p>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-black mb-12 leading-tight sticky top-32">
                KEY
                <br />
                <span className="text-outline">FEATURES</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-16">
              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Dynamic Homepage</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Personalized content feed with trending shows, continue watching sections, and curated collections that adapt to user preferences.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Enhanced Search</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Powerful search with filters by genre, year, rating, and cast, plus visual previews that help users find exactly what they're looking for.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Content Detail Pages</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Rich detail views with trailers, cast information, ratings, and similar recommendations presented in an engaging layout.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Watchlist Management</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Intuitive list creation and organization tools that let users save and categorize content for later viewing.
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
          className="mb-32"
        >
          <h2 className="text-black mb-16 leading-tight">
            DESIGN
            <br />
            <span className="text-outline">PROCESS</span>
          </h2>

          <div className="space-y-8">
            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">01</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">Competitive Analysis</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Analyzed leading streaming platforms to identify pain points, successful patterns, and opportunities for differentiation in the market.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-200" />

            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">02</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">Information Architecture</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Structured content hierarchy and navigation flows to ensure users can discover and access content effortlessly.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-200" />

            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">03</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">Visual Design System</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Developed a dark-themed interface with bold typography and vibrant accent colors that enhance content visibility.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-200" />

            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">04</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">Responsive Layouts</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Created flexible grid systems and component variations that work seamlessly across all screen sizes and orientations.
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
                <h3 className="text-black mb-4">Content is King</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  The interface should enhance, not compete with, the content. Visual hierarchy must prioritize what users came to see.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Performance Perception</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Fast-loading previews and skeleton states create the perception of speed even when content is still loading.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Dark UI Design</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Dark interfaces reduce eye strain for extended viewing sessions but require careful contrast management for accessibility.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Personalization Balance</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Users want recommendations but also value serendipitous discovery—the design must support both exploration modes.
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
            href="https://www.figma.com/design/KZRBo4wxWUYf4TmDjwYhVV/OTT-Platform?node-id=0-1&t=gXCQ1EfqKAn1iyAy-1"
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
