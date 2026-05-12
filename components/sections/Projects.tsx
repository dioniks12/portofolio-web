'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

// Projects section - displays key projects with neobrutalism design
const Projects = () => {
  const tagColors = ['bg-pink-300', 'bg-orange-300', 'bg-green-300', 'bg-cyan-300', 'bg-purple-300'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const projects = [
    {
      title: 'Financial & Goods Management System',
      description:
        'A comprehensive system for tracking inventory, financial records, and supply chain operations. Built with a focus on data accuracy and intuitive reporting interfaces.',
      techStack: ['Laravel', 'MySQL', 'Tailwind CSS'],
      color: 'bg-green-300',
      imagePlaceholder: 'bg-green-100',
      githubLink: '#',
      demoLink: '#',
      number: '01',
    },
    {
      title: 'Integrated CCTV Monitoring',
      description:
        'A real-time monitoring dashboard that integrates multiple CCTV feeds into a centralized web interface, featuring alert management and system status tracking.',
      techStack: ['Next.js', 'React', 'Node.js'],
      color: 'bg-purple-300',
      imagePlaceholder: 'bg-purple-100',
      githubLink: '#',
      demoLink: '#',
      number: '02',
    },
  ];

  return (
    <section style={{ marginBottom: '80px' }} className="relative w-full pt-32 pb-40 px-4 bg-amber-200 border-y-4 border-black flex justify-center overflow-hidden" id="projects">
      {/* Decorative elements */}
      <div className="absolute top-8 right-16 w-20 h-20 bg-white border-2 border-black rotate-6 opacity-40 hidden md:block" />
      <div className="absolute top-16 right-10 w-10 h-10 bg-pink-400 border-2 border-black -rotate-12 opacity-50 hidden md:block" />
      <div className="absolute bottom-16 left-8 w-16 h-16 bg-cyan-300 border-2 border-black rotate-3 opacity-50 hidden md:block" />
      {/* Dot grid bottom-right */}
      <div
        className="absolute bottom-8 right-4 w-48 h-48 opacity-10 hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(circle, black 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mb-2"
        >
          <span className="inline-block px-3 py-1 bg-black text-white text-xs font-black tracking-widest uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
            03 — What I've Built
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1.5 bg-green-500" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: '10px 10px 0px 0px rgba(0,0,0,1)' }}
              className={`${project.color} border-2 border-black flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative`}
            >
              {/* Project number watermark */}
              <span className="absolute top-3 right-4 text-6xl font-black text-black/10 select-none leading-none">
                {project.number}
              </span>

              {/* Image Placeholder */}
              <div
                className={`w-full h-48 border-b-2 border-black flex items-center justify-center p-6 ${project.imagePlaceholder}`}
              >
                <div className="w-full h-full border-2 border-dashed border-black/30 flex items-center justify-center">
                  <span className="font-bold text-black/50 tracking-widest uppercase text-sm">
                    Project Preview
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-black tracking-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-black font-medium leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 ${tagColors[i % tagColors.length]} border-2 border-black text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demoLink}
                    className="flex-1 flex items-center justify-center gap-2 bg-black text-white border-2 border-black py-3 font-bold text-sm hover:bg-gray-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    Live Demo
                    <ArrowUpRight size={18} strokeWidth={3} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="w-12 h-12 flex items-center justify-center bg-white border-2 border-black text-black hover:bg-gray-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    aria-label="View Source Code"
                  >
                    <Code2 size={20} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
