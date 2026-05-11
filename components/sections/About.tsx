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
    },
    {
      icon: Zap,
      title: 'Full-Stack Developer',
      description: 'Skilled in building complete applications from frontend to backend infrastructure.',
      color: 'bg-yellow-300',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Dedicated to creating lean, impactful solutions that deliver measurable results.',
      color: 'bg-pink-300',
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-white" id="about">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter mb-2">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600"></div>
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
              <div
                key={index}
                className={`${card.color} border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
              >
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center mb-2">
                    <IconComponent size={22} strokeWidth={3} className="text-black" />
                  </div>
                  <h3 className="text-lg font-black text-black tracking-tight">{card.title}</h3>
                  <p className="text-sm text-black leading-relaxed font-medium">{card.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
