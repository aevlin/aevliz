import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import toneUpLogo from "figma:asset/962efa58d190b2be51c8cdb70d5f137275c0fa9a.png";
import toneUpHero from "figma:asset/8075cb80e5be6a4e52021cbb4b109d4402fec1f8.png";

interface ToneUpProps {
  onBack: () => void;
}

export function ToneUp({ onBack }: ToneUpProps) {
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
              <span className="uppercase tracking-wider text-sm">Mobile App Design</span>
            </div>
          </div>

          {/* Logo */}
          <div className="mb-16">
            <img src={toneUpLogo} alt="ToneUp Logo" className="h-24 md:h-32 w-auto" />
          </div>

          {/* Title */}
          <h1 className="text-black mb-12 leading-[0.85]">
            TONEUP
          </h1>

          {/* Description */}
          <p className="text-3xl text-neutral-600 max-w-4xl leading-relaxed mb-16">
            A Figma design concept for music learning that makes music education accessible and engaging for all skill levels through intuitive UI patterns and gamified interactions.
          </p>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
            {[
              { label: "Role", value: "UI/UX Designer" },
              { label: "Timeline", value: "3 Weeks" },
              { label: "Tools", value: "Figma" },
              { label: "Type", value: "Mobile App" }
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
              src={toneUpHero}
              alt="ToneUp Interface Design"
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
                ToneUp is a conceptual music learning application designed entirely in Figma. The project focuses on creating an intuitive and engaging interface that makes music education accessible to learners of all skill levels.
              </p>
              <p className="text-2xl text-neutral-700 leading-loose">
                Through gamified elements, progress tracking, and carefully crafted user flows, ToneUp transforms the traditional music learning experience into an interactive digital journey.
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
                  <h3 className="text-white mb-4">Balancing Complexity</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Making advanced music theory concepts accessible without oversimplifying the learning experience
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex gap-6">
                <div className="text-6xl opacity-20">02</div>
                <div>
                  <h3 className="text-white mb-4">Engagement & Motivation</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Creating a gamified system that keeps users motivated while maintaining focus on genuine skill development
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex gap-6">
                <div className="text-6xl opacity-20">03</div>
                <div>
                  <h3 className="text-white mb-4">Progress Tracking</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    Designing intuitive visualizations that help users understand their progress across multiple skills and instruments
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
              <div className="text-6xl mb-8">🎯</div>
              <h3 className="text-black mb-6">Intuitive Navigation</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Clear information hierarchy with bottom navigation and easily accessible lesson categories
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">🎮</div>
              <h3 className="text-black mb-6">Gamified Learning</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Achievement systems, progress bars, and interactive challenges that reward consistent practice
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">📊</div>
              <h3 className="text-black mb-6">Visual Progress</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Clean dashboards showing skill progression, completed lessons, and practice streaks
              </p>
            </div>

            <div className="bg-white p-12 shadow-brutal">
              <div className="text-6xl mb-8">🎨</div>
              <h3 className="text-black mb-6">Vibrant Interface</h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Colorful, energetic design that appeals to younger learners while maintaining professional aesthetics
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
                <h3 className="text-black mb-6">Structured Learning Paths</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Organized course structure with beginner to advanced levels, allowing users to progress at their own pace through carefully designed lesson sequences.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Interactive Lessons</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Engaging lesson interfaces with audio playback, visual guides, and practice exercises that provide immediate feedback on technique.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Progress Dashboard</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Comprehensive overview of learning journey with statistics, achievements, and personalized recommendations for next steps.
                </p>
              </div>

              <div>
                <div className="h-2 w-24 bg-black mb-6" />
                <h3 className="text-black mb-6">Practice Tools</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Built-in metronome, tuner, and recording features that help users practice effectively and track their improvement over time.
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
                <h3 className="text-black mb-4">Research & Analysis</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Studied existing music learning apps, analyzed user pain points, and identified opportunities for improvement in the onboarding and lesson flow experiences.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-200" />

            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">02</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">User Flow Mapping</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Created detailed user journey maps to ensure smooth navigation from sign-up through lesson completion and progress tracking.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-200" />

            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">03</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">Visual Design</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Developed a vibrant color palette and component library in Figma, focusing on accessibility and visual hierarchy throughout all screens.
                </p>
              </div>
            </div>

            <div className="h-px bg-neutral-200" />

            <div className="flex gap-8 items-start">
              <div className="text-7xl text-outline shrink-0">04</div>
              <div className="pt-8">
                <h3 className="text-black mb-4">Prototyping & Testing</h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                  Built interactive prototypes to validate design decisions and gather feedback on usability and engagement patterns.
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
                <h3 className="text-black mb-4">Simplicity is Key</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Even complex music concepts can be made approachable through clear visual design and progressive disclosure of information.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Motivation Matters</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Gamification elements significantly increase engagement when tied directly to real skill progression and meaningful achievements.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Feedback Loops</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Immediate visual and auditory feedback helps users understand their performance and builds confidence in their learning journey.
                </p>
              </div>
              <div>
                <h3 className="text-black mb-4">Accessibility First</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Designing for various skill levels from the start creates a more inclusive learning environment that scales with user growth.
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
            href="https://www.figma.com/design/aHQXhJg9NHEqZHWmJ4HJD0/Toneup-music-app?node-id=0-1&t=XUhXHM9fFhDk5TzK-1"
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
