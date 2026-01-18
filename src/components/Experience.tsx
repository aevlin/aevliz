import { motion, useScroll, useTransform } from "motion/react";
import { Circle, CircleDot, ChevronDown } from "lucide-react";
import { useRef } from "react";

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const experiences = [
    {
      title: "MEDIA LEAD",
      org: "NSS",
      date: "2025 - NOW",
      desc: "Leading visual communication strategies.",
      status: "ACTIVE"
    },
    {
      title: "DESIGN CO-LEAD",
      org: "IEEE SB AJCE",
      date: "2025 - NOW",
      desc: "Orchestrating design sprints and workshops.",
      status: "ACTIVE"
    },
    {
      title: "UI/UX INTERN",
      org: "COGNIFYZ",
      date: "APR 2025",
      desc: "Developed user interfaces for web apps.",
      status: "COMPLETED"
    },
    {
      title: "WEB INTERN",
      org: "TISSER TECH",
      date: "APR 2025",
      desc: "Frontend development assistance.",
      status: "COMPLETED"
    },
    {
      title: "DESIGN LEAD-W",
      org: "ACM CHAPTER",
      date: "2024 - 2025",
      desc: "Managed chapter branding assets.",
      status: "COMPLETED"
    },
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white text-black relative">
       <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
             <div className="h-px flex-1 bg-black/20" />
             <h2 className="text-6xl font-bebas">QUEST LOG</h2>
             <div className="h-px flex-1 bg-black/20" />
          </div>

          <div className="relative border-l-2 border-black/10 ml-4 md:ml-12 space-y-12">
             {experiences.map((exp, i) => (
                <QuestItem key={i} data={exp} index={i} />
             ))}
             
             {/* End Node */}
             <div className="absolute -bottom-2 -left-[9px] w-4 h-4 bg-black rounded-full" />
          </div>
       </div>
    </section>
  );
}

function QuestItem({ data, index }: { data: any, index: number }) {
  const isCompleted = data.status === "COMPLETED";
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-12"
    >
       {/* Timeline Node */}
       <div className="absolute -left-[9px] top-2 bg-white z-10">
          {isCompleted ? (
             <CircleDot className="w-5 h-5 text-gray-400 fill-gray-100" />
          ) : (
             <div className="w-5 h-5 border-4 border-black rounded-full animate-pulse bg-white" />
          )}
       </div>

       {/* Card */}
       <div className={`p-6 border ${isCompleted ? 'border-black/20 bg-gray-50' : 'border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'} transition-all hover:scale-[1.02]`}>
          <div className="flex justify-between items-start mb-2">
             <h3 className="text-3xl font-bebas tracking-wide">{data.title}</h3>
             <span className={`text-xs font-mono px-2 py-1 ${isCompleted ? 'bg-gray-200 text-gray-500' : 'bg-green-500 text-white animate-pulse'}`}>
                {data.status}
             </span>
          </div>
          <div className="flex justify-between items-center text-sm font-mono mb-4 text-gray-500">
             <span className="font-bold text-black">{data.org}</span>
             <span>{data.date}</span>
          </div>
          <p className="text-gray-700 font-light">{data.desc}</p>
       </div>
    </motion.div>
  );
}
