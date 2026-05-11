'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

// Experience section - displays professional timeline with neobrutalism design
const Experience = () => {
  const tagColors = ['bg-pink-300', 'bg-orange-300', 'bg-green-300', 'bg-cyan-300', 'bg-purple-300'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const experiences = [
    {
      role: 'Software Development Internship',
      company: 'PT Santai Berkualitas Syberindo',
      period: 'Okt 2025 - April 2026',
      description: 'Terlibat penuh dalam proses development dan maintenance untuk sistem LMS (Learning Management System) dan CMS (Conference Management System).',
      techStack: ['PHP Laravel', 'MySQL', 'PostgreSQL', 'Docker'],
      color: 'bg-yellow-300',
    },
    {
      role: 'Software Development Internship',
      company: 'Dinas Komunikasi dan Informatika Kota Madiun',
      period: 'Januari 2025 - Feb 2025',
      description: 'Mengerjakan project utama berupa sistem Monitoring CCTV terintegrasi.',
      techStack: ['PHP Laravel', 'MySQL', 'PostgreSQL'],
      color: 'bg-cyan-300',
    },
  ];

  return (
    <section className="w-full py-32 px-4 bg-[#faf8f3] my-20" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter mb-2">
            Experience
          </h2>
          <div className="w-12 h-1 bg-purple-600"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative border-l-4 border-black ml-4 md:ml-8 flex flex-col gap-16 pb-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="ml-8 relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[46px] top-4 w-6 h-6 bg-white border-4 border-black rounded-full group-hover:bg-purple-500 transition-colors"></div>

              {/* Experience Card */}
              <div
                className={`${exp.color} border-2 border-black p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-3xl font-black text-black tracking-tight flex items-center gap-3">
                      <Briefcase size={28} strokeWidth={3} />
                      {exp.role}
                    </h3>
                    <p className="text-xl font-bold text-black/80 mt-2">{exp.company}</p>
                  </div>
                  <span className="inline-block bg-white border-2 border-black px-5 py-2 font-bold text-sm text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-lg text-black font-medium leading-relaxed mb-10">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 ${tagColors[i % tagColors.length]} border-2 border-black text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
