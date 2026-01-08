import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: "Design Lead",
      company: "National Service Scheme",
      period: "2023 - Present",
      description: "Leading UI/UX initiatives and creating digital solutions that serve the community.",
    },
    {
      role: "UI/UX Designer",
      company: "IEEE Student Branch",
      period: "2023 - Present",
      description: "Designing promotional materials and digital interfaces for technical events.",
    },
    {
      role: "Design Intern",
      company: "Cognifyz Technologies",
      period: "2024",
      description: "Worked on client projects involving web design and brand identity.",
    },
    {
      role: "UI/UX Design Intern",
      company: "Tisser Technologies",
      period: "2024",
      description: "Contributed to product design projects and user research initiatives.",
    },
    {
      role: "Creative Designer",
      company: "ACM Student Chapter",
      period: "2023 - Present",
      description: "Developing visual content for tech events and workshops.",
    },
    {
      role: "Design Volunteer",
      company: "LEO Club International",
      period: "2022 - Present",
      description: "Creating designs for social causes and community events.",
    },
  ];

  return (
    <section className="relative py-48 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-48">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4">
              <Briefcase className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-sm">Experience</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black mb-16 leading-[0.9]"
          >
            MY JOURNEY
            <br />
            <span className="text-outline">ROADMAP</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-neutral-600 max-w-3xl leading-loose"
          >
            Hover over each milestone to explore my professional journey
          </motion.p>
        </div>

        {/* Roadmap timeline */}
        <div className="relative pb-96">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-neutral-300 -translate-x-1/2" />

          <div className="space-y-32">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="relative"
                >
                  {/* Node on the line */}
                  <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 z-10">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.5 : 1,
                        backgroundColor: isActive ? "#000000" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 border-4 border-black rounded-full shadow-lg"
                    />
                  </div>

                  {/* Content card */}
                  <div className={`grid md:grid-cols-2 gap-16 md:gap-32`}>
                    <div className={`${isLeft ? 'md:text-right' : 'md:col-start-2'} pl-24 md:pl-0`}>
                      <motion.div
                        animate={{
                          x: isActive ? (isLeft ? -10 : 10) : 0,
                          scale: isActive ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`cursor-pointer ${isActive ? 'opacity-100' : 'opacity-80'}`}
                      >
                        {/* Period badge */}
                        <div className={`inline-flex items-center gap-2 bg-black text-white px-6 py-3 uppercase tracking-wider mb-8 ${isLeft ? 'md:float-right' : ''}`}>
                          {exp.period}
                        </div>

                        <div className="clear-both space-y-6">
                          <div>
                            <h3 className="text-5xl font-bold mb-4 leading-tight">
                              {exp.role}
                            </h3>
                            <p className="text-3xl text-neutral-600">{exp.company}</p>
                          </div>

                          <motion.div
                            animate={{
                              height: isActive ? 'auto' : '0px',
                              opacity: isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="h-1 w-24 bg-black mb-6" />
                            <p className="text-xl text-neutral-600 leading-loose">
                              {exp.description}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative pt-96"
          >
            <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2">
              <div className="w-12 h-12 bg-black flex items-center justify-center shadow-2xl">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
            <div className="pl-24 md:pl-0 md:text-center pt-20">
              <p className="text-3xl font-bold uppercase tracking-wider text-black">
                More to come...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}