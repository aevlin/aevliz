import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from "lucide-react";
import { DoodleSquiggle, DoodleStar, DoodleSparkle } from "./Doodles";

export function Experience() {
  const experiences = [
    {
      title: "Media Lead",
      organization: "National Service Scheme",
      location: "Amal Jyothi College of Engineering",
      period: "July 2025 - Present",
      duration: "4 months",
      type: "Current",
      color: "from-purple-500 to-pink-500",
      icon: Briefcase,
    },
    {
      title: "Design Co-Lead",
      organization: "IEEE SB Amal Jyothi College of Engineering",
      location: "Current",
      period: "March 2025 - Present",
      duration: "8 months",
      type: "Current",
      color: "from-pink-500 to-orange-500",
      icon: Briefcase,
    },
    {
      title: "UI/UX Intern",
      organization: "Cognifyz Technologies",
      location: "",
      period: "April 2025 - May 2025",
      duration: "2 months",
      type: "Internship",
      color: "from-blue-500 to-cyan-500",
      icon: Briefcase,
    },
    {
      title: "Web Design Intern",
      organization: "Tisser Technologies LLP",
      location: "Kottayam, Kerala, India",
      period: "April 2025",
      duration: "1 month",
      description: "Worked on building responsive web pages using HTML, CSS, Bootstrap, and JavaScript, focusing on layout design, interactivity, and user-friendly interfaces.",
      type: "Internship",
      color: "from-cyan-500 to-blue-500",
      icon: Briefcase,
    },
    {
      title: "Design Lead-W",
      organization: "ACM AJCE STUDENT CHAPTER",
      location: "",
      period: "April 2024 - March 2025",
      duration: "1 year",
      type: "Leadership",
      color: "from-orange-500 to-pink-500",
      icon: Award,
    },
    {
      title: "Arts Captain",
      organization: "Girideepam Bethany Higher Secondary School",
      location: "Kottayam, Kerala, India",
      period: "2022 - 2023",
      duration: "1 year",
      type: "Leadership",
      color: "from-purple-500 to-blue-500",
      icon: Award,
    },
    {
      title: "Club President",
      organization: "LEO Club International",
      location: "Kottayam, Kerala, India",
      period: "2020 - 2023",
      duration: "3 years",
      description: "Leo Club of Kottayam Buds (District 318 B)",
      type: "Leadership",
      color: "from-green-500 to-emerald-500",
      icon: Award,
    },
    {
      title: "Multiple District Vice President",
      organization: "LEO Club International",
      location: "Kerala, India",
      period: "2020 - 2022",
      duration: "2 years",
      description: "Secured 'Multiple District Vice President' position of Multiple District 318 throughout Kerala for two consecutive years.",
      type: "Leadership",
      color: "from-amber-500 to-orange-500",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* Doodle decorations */}
      <motion.div
        className="absolute top-32 right-16 text-orange-300 opacity-20 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
      >
        <DoodleSquiggle />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 text-purple-300 opacity-20 hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <DoodleStar />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 text-pink-300 opacity-15 hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <DoodleSparkle />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 rounded-full mb-6 border-2 border-orange-200">
            Experience
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional experience, leadership roles, and continuous growth in design and technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-orange-200 -translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative flex items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-8`}
                >
                  {/* Content card */}
                  <div className={`w-full lg:w-[calc(50%-2rem)] ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-pink-200">
                      {/* Type badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${exp.color} text-white rounded-full text-xs mb-4`}>
                        <Icon className="w-3 h-3" />
                        {exp.type}
                      </div>

                      {/* Title and organization */}
                      <h3 className="text-gray-800 mb-2">{exp.title}</h3>
                      <div className="mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {exp.organization}
                      </div>

                      {/* Location */}
                      {exp.location && (
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3 lg:justify-end">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}

                      {/* Period and duration */}
                      <div className="flex items-center gap-3 text-gray-600 text-sm mb-3 flex-wrap lg:justify-end">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 rounded-full">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Description */}
                      {exp.description && (
                        <p className="text-gray-600 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">
                          {exp.description}
                        </p>
                      )}

                      {/* Hover decoration */}
                      <div className={`absolute bottom-0 ${isEven ? "left-0" : "right-0"} w-0 h-1 bg-gradient-to-r ${exp.color} group-hover:w-full transition-all duration-500 rounded-full`} />
                    </div>
                  </div>

                  {/* Timeline dot - centered on desktop, left-aligned on mobile */}
                  <div className="absolute lg:left-1/2 left-0 lg:-translate-x-1/2 flex items-center justify-center my-4 lg:my-0">
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                      <Icon className="w-6 h-6 text-white" />
                      {/* Pulse effect for current positions */}
                      {exp.type === "Current" && (
                        <>
                          <span className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-full animate-ping opacity-75`} />
                          <span className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-full animate-pulse`} />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden lg:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="mb-2">8+</div>
              <div className="text-white/90 text-sm">Total Positions</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl p-6 text-white text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="mb-2">2</div>
              <div className="text-white/90 text-sm">Current Roles</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-purple-500 rounded-2xl p-6 text-white text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="mb-2">5+</div>
              <div className="text-white/90 text-sm">Leadership Roles</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
