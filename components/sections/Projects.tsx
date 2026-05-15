"use client";

import { motion, Variants  } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import Image from 'next/image';

// Projects section - displays key projects with neobrutalism design
const Projects = () => {
  const tagColors = [
    "bg-pink-300",
    "bg-orange-300",
    "bg-green-300",
    "bg-cyan-300",
    "bg-purple-300",
  ];

  const containerVariants  = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants : Variants =  {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "Financial & Goods Management System for UMKM",
      description:
        "A comprehensive system for tracking inventory, financial records, and supply chain operations. Built with a focus on data accuracy and intuitive reporting interfaces.",
      techStack: ["Laravel", "MySQL", "Tailwind CSS"],
      color: "bg-green-200",
      image: "/images/project3.png",
      githubLink: "#",
      demoLink: "#",
      number: "01",
    },
    {
      title: "Monitoring CCTV System",
      description:
        "A real-time monitoring dashboard that integrates multiple CCTV feeds into a centralized web interface, featuring RTSP to support media live streaming.",
      techStack: ["Laravel", "Javascript", "MySQL", "PostgreSQL"],
      color: "bg-purple-300",
      image: "/images/project4.png",
      githubLink: "https://github.com/dioniks12/magangCCTV_Kominfo.git",
      demoLink: "#",
      number: "02",
    },
    {
      title: "Bakery and Sales System",
      description:
        "A bakery and order sales web and mobile based using Laravel, MySQL, and Flutter.",
      techStack: ["Laravel", "MySQL", "Flutter"],
      color: "bg-yellow-300",
      image: "/images/project2.png",
      githubLink: "https://github.com/dioniks12/P3L_Atma_Kitchen.git",
      demoLink: "#",
      number: "03",
    },
    {
      title: "Quick Fresh Laundry System",
      description:
        "Quick Fresh Laundry is a web-based platform designed to help customers manage their laundry transactions online, saving time and minimizing waiting lines at the physical store.",
      techStack: ["Laravel", "MySQL"],
      color: "bg-orange-200",
      image: "/images/project5.png",
      githubLink: "https://github.com/dioniks12/PW2023_D_2_Laravel.git",
      demoLink: "#",
      number: "04",
    },
    {
      title: "Conference Management System",
      description:
        "This project focuses on facilitating the conference experience by implementing a comprehensive online management system.",
      techStack: ["Laravel", "MySQL", "Docker", "Javascript"],
      color: "bg-blue-300",
      image: "/images/project1.png",
      githubLink: "#",
      demoLink: "#",
      number: "05",
    },
    {
      title: "Learning Management System",
      description:
        "This project provide various course for learn and used it for education based on any subject",
      techStack: ["Laravel", "MySQL", "Docker", "Tailwind CSS"],
      color: "bg-red-300",
      image: "/images/project6.png",
      githubLink: "#",
      demoLink: "#",
      number: "06",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center px-4 pt-40 pb-20 bg-amber-200 overflow-x-hidden">
      {/* Decorative elements */}
      <div className="absolute top-8 right-16 w-20 h-20 bg-white border-2 border-black rotate-6 opacity-40 hidden md:block z-0" />
      <div className="absolute top-16 right-10 w-10 h-10 bg-pink-400 border-2 border-black -rotate-12 opacity-50 hidden md:block z-0" />
      <div className="absolute bottom-16 left-8 w-16 h-16 bg-cyan-300 border-2 border-black rotate-3 opacity-50 hidden md:block z-0" />
      {/* Dot grid bottom-right */}
      <div
        className="absolute bottom-8 right-4 w-48 h-48 opacity-10 hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">
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
          className="mb-8"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -6,
                boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
              }}
              className={`${project.color} border-2 border-black flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative`}
            >
              {/* Project number watermark */}
              <span className="absolute top-3 right-4 text-6xl font-black text-black/10 select-none leading-none">
                {project.number}
              </span>

                <div
                className={`relative w-full h-48 border-b-2 border-black overflow-hidden ${project.image}`}
              >
                {/* 1. Hapus div dashed, ganti dengan Image */}
                <Image
                  src={project.image} // Ambil dari data objek
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* 2. Optional: Tambahkan overlay biar gaya Neobrutalism-nya makin dapet */}
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
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
                    href={project.githubLink}
                    className="flex-1 flex items-center justify-center gap-2 bg-black text-white border-2 border-black py-3 font-bold text-sm hover:bg-gray-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    Source Code
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
