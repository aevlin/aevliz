import { motion } from "motion/react";
import { MapPin, GraduationCap, Code, Palette, Award, Users } from "lucide-react";
import { DoodleHeart, DoodleSparkle, DoodleScribble } from "./Doodles";

export function About() {
  const highlights = [
    { 
      icon: MapPin, 
      label: "Based in", 
      value: "Kottayam, Kerala", 
      color: "from-purple-500 to-pink-500" 
    },
    { 
      icon: GraduationCap, 
      label: "Studying at", 
      value: "Amal Jyothi College of Engineering", 
      color: "from-pink-500 to-orange-500" 
    },
    { 
      icon: Code, 
      label: "Specialization", 
      value: "UI/UX & Web Dev", 
      color: "from-orange-500 to-yellow-500" 
    },
    { 
      icon: Award, 
      label: "Leadership", 
      value: "IEEE, ACM, NSS, LEO", 
      color: "from-purple-500 to-blue-500" 
    },
  ];

  const skills = [
    { name: "UI/UX Design", icon: Palette },
    { name: "Web Development", icon: Code },
    { name: "Brand Identity", icon: Award },
    { name: "Leadership", icon: Users },
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Doodle decorations */}
      <motion.div
        className="absolute top-20 right-10 text-pink-300 opacity-20 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
      >
        <DoodleHeart />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 text-purple-300 opacity-20 rotate-45 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
      >
        <DoodleScribble />
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full mb-6 border-2 border-purple-200">
              About Me
            </span>
            <h2 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Designing experiences that matter
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm Aevlin Prince, a passionate designer from Kottayam, Kerala, currently pursuing my 
              studies at Amal Jyothi College of Engineering. I specialize in creating meaningful 
              digital experiences that blend aesthetics with functionality.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With experience in UI/UX design, web development, and brand identity, I bring a holistic 
              approach to every project. My journey in design has been shaped by various leadership 
              roles in IEEE, ACM, NSS, and LEO Club International.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in design that tells stories, solves problems, and creates lasting impact. 
              Whether it's crafting intuitive interfaces, building responsive websites, or developing 
              brand identities, I approach each project with attention to detail and user-centered 
              thinking. ✨
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative bg-white p-5 rounded-2xl border-2 border-purple-100 hover:border-pink-200 transition-all duration-200 hover:shadow-lg group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-gray-500 text-xs mb-1">{highlight.label}</div>
                    <div className="text-gray-800 text-sm">{highlight.value}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Skills badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border-2 border-purple-100 hover:border-pink-200 transition-all duration-200 hover:shadow-md"
                  >
                    <Icon className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700 text-sm">{skill.name}</span>
                  </div>
                );
              })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
