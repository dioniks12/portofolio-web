'use client';

import { motion } from 'framer-motion';
import { BookOpen, Zap, Target } from 'lucide-react';

// About section - narrative about Dioni as Informatics graduate with neobrutalism design
const About = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const highlightCards = [
    {
      icon: BookOpen,
      title: 'Informatics Engineer',
      description: 'Graduated with passion for solving real-world problems through technology.',
      color: 'bg-blue-300',
      accent: 'bg-blue-500',
    },
    {
      icon: Zap,
      title: 'Full-Stack Developer',
      description: 'Skilled in building complete applications from frontend to backend infrastructure.',
      color: 'bg-yellow-300',
      accent: 'bg-yellow-500',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Dedicated to creating lean, impactful solutions that deliver measurable results.',
      color: 'bg-pink-300',
      accent: 'bg-pink-500',
    },
  ];

  return (
    <section style={{ marginBottom: '80px' }} className="relative w-full pt-32 pb-40 px-4 bg-emerald-200 border-b-4 border-black flex justify-center overflow-hidden" id="about">
      {/* Decorative neobrutalism elements */}
      <div className="absolute top-12 right-12 w-24 h-24 bg-white border-2 border-black rotate-12 opacity-50 hidden md:block" />
      <div className="absolute top-20 right-20 w-12 h-12 bg-yellow-400 border-2 border-black -rotate-6 opacity-70 hidden md:block" />
      <div className="absolute bottom-20 left-8 w-16 h-16 bg-black opacity-10 rotate-45 hidden md:block" />
      {/* Striped accent band */}
      <div className="absolute top-0 left-0 w-full h-3 bg-repeating-stripes pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(90deg, #000 0px, #000 12px, transparent 12px, transparent 24px)',
          opacity: 0.15,
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute bottom-12 right-4 w-40 h-40 opacity-10 hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(circle, black 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />

      <motion.div
        className="max-w-4xl w-full mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Label */}
        <motion.div variants={itemVariants} className="mb-2">
          <span className="inline-block px-3 py-1 bg-black text-white text-xs font-black tracking-widest uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
            01 — Who I Am
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter mb-2">
            About Me
          </h2>
          <div className="w-12 h-1.5 bg-blue-600" />
        </motion.div>

        {/* Main Narrative */}
        <motion.div variants={itemVariants} className="mb-20">
          <p className="text-lg text-black leading-relaxed font-medium mb-8 border-l-4 border-black pl-8">
            I'm Dioni Krisna, an Informatics Engineering graduate with a deep passion for building impactful 
            digital solutions. Throughout my academic journey and professional experience, I've developed expertise 
            in full-stack web development, system design, and problem-solving with code.
          </p>
          <p className="text-base text-black leading-relaxed font-medium mb-6">
            My journey started with curiosity about how technology works, which evolved into a structured approach 
            to software development. I've worked on diverse projects ranging from inventory management systems to 
            integrated CCTV monitoring solutions, always focusing on creating solutions that are not just functional, 
            but also efficient and user-centric.
          </p>
          <p className="text-base text-black leading-relaxed font-medium">
            Today, I combine my engineering fundamentals with modern web technologies like Next.js, React, and Tailwind CSS 
            to create applications that matter. I believe in clean code, continuous learning, and delivering value with every project.
          </p>
        </motion.div>

        {/* Highlight Cards - 3 Column Grid */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
          {highlightCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4, boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
                className={`${card.color} border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 relative`}
              >
                {/* Card number accent */}
                <span className="absolute top-3 right-4 text-4xl font-black text-black/10 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <IconComponent size={22} strokeWidth={3} className="text-black" />
                  </div>
                  <h3 className="text-lg font-black text-black tracking-tight">{card.title}</h3>
                  <p className="text-sm text-black leading-relaxed font-medium">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
