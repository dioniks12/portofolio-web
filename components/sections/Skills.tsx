"use client";

import { motion, Variants } from "framer-motion";
import {
  LayoutTemplate,
  Atom,
  Palette,
  Code2,
  Container,
  Database,
  Flame,
  Layers,
  Blocks,
  Leaf,
  Cuboid,
  Coffee,
  ToyBrick,
} from "lucide-react";

// Skills section — standalone page at /skills.
// Displays tech stack as an animated grid of neobrutalism cards.
const Skills = () => {
  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const skills = [
    { name: "Next.js", icon: LayoutTemplate, color: "bg-slate-300" },
    { name: "React", icon: Atom, color: "bg-cyan-300" },
    { name: "Tailwind CSS", icon: Palette, color: "bg-teal-300" },
    { name: "JavaScript", icon: Layers, color: "bg-cyan-400" },
    { name: "PHP / Laravel", icon: Code2, color: "bg-red-300" },
    { name: "C#", icon: Cuboid, color: "bg-pink-300" },
    { name: "Dart", icon: ToyBrick, color: "bg-slate-200" },
    { name: "Flutter", icon: Blocks, color: "bg-purple-400" },
    { name: "Java", icon: Coffee, color: "bg-pink-200" },
    { name: "Docker", icon: Container, color: "bg-blue-400" },
    { name: "MySQL", icon: Database, color: "bg-orange-300" },
    { name: "PostgreSQL", icon: Database, color: "bg-blue-300" },
    { name: "Firebase", icon: Flame, color: "bg-yellow-400" },
    { name: "MongoDB", icon: Leaf, color: "bg-green-400" },
    { name: "SQLite", icon: Database, color: "bg-orange-200" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center px-4 pt-40 pb-20 bg-violet-200 overflow-x-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white border-2 border-black opacity-40 -rotate-12 hidden md:block z-0" />
      <div className="absolute top-14 right-16 w-10 h-10 bg-black opacity-20 rotate-6 hidden md:block z-0" />
      <div className="absolute bottom-10 left-10 w-14 h-14 bg-yellow-400 border-2 border-black opacity-50 rotate-12 hidden md:block z-0" />
      {/* Diagonal stripe background texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none hidden md:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, black 0px, black 2px, transparent 2px, transparent 24px)",
        }}
      />
      {/* Dot grid top-left */}
      <div
        className="absolute top-8 left-4 w-32 h-32 opacity-10 hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        {/* Section label */}
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-black text-white text-xs font-black tracking-widest uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
            02 — What I Use
          </span>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter mb-2">
            Tech Stack
          </h2>
          <div className="w-12 h-1.5 bg-red-500" />
        </div>

        {/* Skills grid — animated with staggered entrance */}
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
                whileHover={{
                  y: -6,
                  boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                  rotate: -1,
                }}
                className={`${skill.color} border-2 border-black p-6 flex flex-col items-center justify-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer relative`}
              >
                {/* Corner accent triangle */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-black border-r-transparent opacity-20" />
                <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
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
