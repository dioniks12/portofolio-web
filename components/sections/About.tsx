"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Zap, Target } from "lucide-react";

// About section — standalone page at /about.
// Describes Dioni's background, passion, and key highlight cards.
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const highlightCards = [
    {
      icon: BookOpen,
      title: "Teamwork",
      description:
        "Able to work within a team to maximize potential and achieve goals.",
      color: "bg-blue-300",
    },
    {
      icon: Zap,
      title: "Full-Stack Developer",
      description:
        "Skilled in building complete applications from frontend to backend infrastructure.",
      color: "bg-yellow-300",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description:
        "Dedicated to creating lean, impactful solutions that deliver measurable results.",
      color: "bg-pink-300",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center px-4 pt-40 pb-20 bg-emerald-200 overflow-x-hidden">
      {/* Neobrutalism decorative shapes */}
      <div className="absolute top-12 right-12 w-24 h-24 bg-white border-2 border-black rotate-12 opacity-50 hidden md:block z-0" />
      <div className="absolute top-20 right-20 w-12 h-12 bg-yellow-400 border-2 border-black -rotate-6 opacity-70 hidden md:block z-0" />
      <div className="absolute bottom-20 left-8 w-16 h-16 bg-black opacity-10 rotate-45 hidden md:block z-0" />
      {/* Horizontal stripe accent */}
      <div
        className="absolute top-0 left-0 w-full h-3 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(90deg, #000 0px, #000 12px, transparent 12px, transparent 24px)",
          opacity: 0.15,
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute bottom-12 right-4 w-40 h-40 opacity-10 hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <motion.div
        className="max-w-4xl w-full mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-3 py-1 bg-black text-white text-xs font-black tracking-widest uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
            01 — Who I Am
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter mb-4">
            About Me
          </h2>
          <div className="w-12 h-2 bg-blue-600" />
        </motion.div>

        {/* Main narrative */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-lg text-black leading-relaxed font-medium mb-8 border-l-4 border-black pl-5 md:pl-8 text-justify">
            I'm Dioni Krisna Saputra Lodrigus, an Informatics Engineering graduate with a deep
            passion for building impactful digital solutions. Throughout my
            academic journey and professional experience, I've developed
            expertise in full-stack web development, system design, and
            problem-solving with code.
          </p>
          <p className="text-base text-black leading-relaxed font-medium mb-6 text-justify">
            I'm a fresh graduate with a degree in Informatics Engineering, I have a strong foundation in a wide range of 
            programming concepts and technologies. My passion for software development led me to specialize in website 
            development, where I've gained hands-on experience using the Laravel framework. Through collaborative projects
            and self-guided learning, I've honed my skills in building robust, scalable, and user-friendly web applications.
          </p>
          {/* <p className="text-base text-black leading-relaxed font-medium">
            Today, I combine my engineering fundamentals with modern web
            technologies like Next.js, React, and Tailwind CSS to create
            applications that matter. I believe in clean code, continuous
            learning, and delivering value with every project.
          </p> */}
        </motion.div>

        {/* Highlight cards — 3 column grid */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {highlightCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                }}
                className={`${card.color} border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 relative`}
              >
                {/* Card number watermark */}
                <span className="absolute top-3 right-4 text-4xl font-black text-black/10 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <IconComponent
                      size={22}
                      strokeWidth={3}
                      className="text-black"
                    />
                  </div>
                  <h3 className="text-lg font-black text-black tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-black leading-relaxed font-medium">
                    {card.description}
                  </p>
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
