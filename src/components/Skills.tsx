import { motion } from "motion/react";
import { 
  Figma, 
  Palette, 
  Users, 
  BarChart, 
  Layers, 
  Code,
  Smartphone,
  Globe,
  Zap,
  Eye,
  MessageSquare,
  FileText
} from "lucide-react";
import { DoodleSquiggle, DoodleSparkle } from "./Doodles";

export function Skills() {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 95, icon: Figma },
        { name: "Canva", level: 90, icon: Palette },
        { name: "Photoshop", level: 85, icon: Layers },
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "UX Skills",
      skills: [
        { name: "User Research", level: 95, icon: Users },
        { name: "Wireframing", level: 90, icon: FileText },
        { name: "Usability Testing", level: 88, icon: Eye },
        { name: "User Interviews", level: 92, icon: MessageSquare },
      ],
      gradient: "from-pink-500 to-orange-500",
    },
    {
      title: "Specializations",
      skills: [
        { name: "Mobile Design", level: 93, icon: Smartphone },
        { name: "Web Design", level: 90, icon: Globe },
        { name: "Design Systems", level: 87, icon: Layers },
        { name: "Analytics", level: 85, icon: BarChart },
      ],
      gradient: "from-orange-500 to-purple-500",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Doodle decorations */}
      <motion.div
        className="absolute top-32 right-10 text-pink-300 opacity-15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
      >
        <DoodleSquiggle />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-16 text-purple-300 opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <DoodleSparkle />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full mb-6 border-2 border-purple-200">
            Skills & Expertise
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What I Bring to the Table
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set honed through years of creating exceptional user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: categoryIndex * 0.05 }}
              className="relative bg-white rounded-3xl p-8 border-2 border-purple-100 hover:border-pink-200 transition-all duration-200 hover:shadow-xl group"
            >
              {/* Decorative corner doodle */}
              <motion.div
                className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br ${category.gradient} rounded-full opacity-60`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <h3 className="mb-8 text-gray-800">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-gray-800">{skill.name}</span>
                            <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: categoryIndex * 0.05 + skillIndex * 0.05 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 text-white text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full opacity-5 translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <Code className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="mb-4">Development Knowledge</h3>
            <p className="max-w-2xl mx-auto opacity-90 leading-relaxed">
              I also have a strong understanding of HTML, CSS, and JavaScript, 
              enabling seamless collaboration with developers and pixel-perfect implementations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
