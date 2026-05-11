'use client';

import { motion } from 'framer-motion';
import { LayoutTemplate, Atom, Palette, Code2, Container, Database, Flame } from 'lucide-react';

// Skills section - displays tech stack with neobrutalism design
const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const skills = [
    { name: 'Next.js', icon: LayoutTemplate, color: 'bg-slate-300' },
    { name: 'React', icon: Atom, color: 'bg-cyan-300' },
    { name: 'Tailwind CSS', icon: Palette, color: 'bg-teal-300' },
    { name: 'PHP / Laravel', icon: Code2, color: 'bg-red-300' },
    { name: 'Docker', icon: Container, color: 'bg-blue-400' },
    { name: 'MySQL', icon: Database, color: 'bg-orange-300' },
    { name: 'PostgreSQL', icon: Database, color: 'bg-blue-300' },
    { name: 'Firebase', icon: Flame, color: 'bg-yellow-400' },
  ];

  return (
    <section className="w-full py-32 px-4 bg-[#faf8f3] my-20" id="skills">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter mb-2">
            Tech Stack
          </h2>
          <div className="w-12 h-1 bg-red-500"></div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${skill.color} border-2 border-black p-6 flex flex-col items-center justify-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer`}
              >
                <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center rounded-full">
                  <Icon size={28} strokeWidth={2.5} className="text-black" />
                </div>
                <span className="text-lg font-black text-black tracking-tight text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
