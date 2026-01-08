import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import caveraLogo from "figma:asset/7967b8a04ba5f5e1d66b00807451573dc19f5823.png";
import caveraHero from "figma:asset/3f89057f37bf3828f2d1f36bf556d29c3879fea8.png";

interface CaveraProps {
  onBack: () => void;
}

export function Cavera({ onBack }: CaveraProps) {
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
              <span className="uppercase tracking-wider text-sm">E-Commerce Design</span>
            </div>
          </div>

          {/* Logo */}
          <div className="mb-16">
            <img src={caveraLogo} alt="Cavera Logo" className="h-24 md:h-32 w-auto brightness-0" />
          </div>

          {/* Title */}
          <h1 className="text-black mb-12 leading-[0.85]">
            CAVERA
          </h1>

          {/* Description */}
          <p className="text-3xl text-neutral-600 max-w-4xl leading-relaxed mb-16">
            A Figma design concept for a premium fashion brand combining elegant minimalism with modern e-commerce functionality for a sophisticated shopping experience.
          </p>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
            {[
              { label: "Role", value: "UI/UX Designer" },
              { label: "Timeline", value: "3 Weeks" },
              { label: "Tools", value: "Figma" },
              { label: "Type", value: "E-Commerce" }
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
          <div className="relative bg-neutral-100 shadow-brutal overflow-hidden">
            <img
              src={caveraHero}
              alt="Cavera Interface Design"
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
                Cavera is a conceptual fashion e-commerce platform designed entirely in Figma. The project focuses on creating a premium shopping experience that balances aesthetic elegance with functional e-commerce flows.
              </p>
              <p className="text-2xl text-neutral-700 leading-loose">
                Through minimalist design principles, generous whitespace, and high-quality product imagery, Cavera delivers a sophisticated digital storefront for luxury fashion brands.
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
                  <h3 className="text-white mb-4">Premium Perception</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Creating a digital experience that reflects the luxury and quality of high-end fashion products
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex gap-6">
                <div className="text-6xl opacity-20">02</div>
                <div>
                  <h3 className="text-white mb-4">Product Discovery</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Designing intuitive browsing and filtering systems that don't overwhelm users with too many options
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex gap-6">
                <div className="text-6xl opacity-20">03</div>
                <div>
                  <h3 className="text-white mb-4">Conversion Optimization</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Streamlining the checkout flow while maintaining the premium brand experience throughout the journey
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
              <div className="text-6xl mb-8">✨</div>
              <h3 className="text-black mb-6">Minimalist Aesthetic</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Clean layouts with generous whitespace that let product photography shine and create a premium feel
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">🖼️</div>
              <h3 className="text-black mb-6">Visual Storytelling</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Hero sections and lifestyle imagery that communicate brand values and product quality at first glance
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">🔍</div>
              <h3 className="text-black mb-6">Smart Filtering</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Intuitive category navigation and filter options that help users find exactly what they're looking for
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">🛒</div>
              <h3 className="text-black mb-6">Seamless Checkout</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Streamlined cart and checkout experience with clear progress indicators and trust signals
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
                <h3 className="text-black mb-6">Landing Page</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Impactful hero section with seasonal collections, editorial-style product showcases, and clear calls-to-action that drive exploration.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Product Catalog</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Grid-based product listings with hover effects, quick view options, and flexible filtering by category, price, size, and color.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Product Detail</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Comprehensive product pages with multiple image views, size guides, detailed descriptions, and styling suggestions.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Shopping Cart</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Clean cart interface with product summaries, quantity adjustments, and recommended items to increase order value.
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
                <h3 className="text-black mb-4">Brand Research</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Studied luxury fashion brands and their digital presence to understand what makes premium e-commerce experiences feel elevated and trustworthy.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-200" />

            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">02</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">User Journey Mapping</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Mapped the complete shopping journey from landing page through checkout, identifying key decision points and potential friction areas.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-200" />

            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">03</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">Visual Design</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Developed a minimalist design system with neutral colors, elegant typography, and spacious layouts that emphasize product photography.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-200" />

            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">04</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">Responsive Design</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Created mobile-first layouts ensuring the premium experience translates seamlessly across all device sizes and shopping contexts.
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
                <h3 className="text-black mb-4">Less is More</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  In luxury e-commerce, restraint in design creates sophistication. Every element must earn its place on the page.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Photography Quality</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Product photography is the hero—the interface should frame and enhance images, not compete with them for attention.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Trust Building</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Premium pricing requires premium trust signals—from security badges to clear return policies integrated naturally.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Mobile Commerce</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Luxury doesn't mean desktop-only—mobile shoppers expect the same elevated experience on smaller screens.
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
            href="https://www.figma.com/design/5P2jLJd1cG0tIRY7YN5tpo/Cavera?node-id=0-1&t=lxNBv5vBqI5TfNWA-1"
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
