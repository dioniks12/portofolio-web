"use client";

import { motion, Variants } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

// Experience section - displays professional timeline with neobrutalism design
const Experience = () => {
  const tagColors = [
    "bg-pink-300",
    "bg-orange-300",
    "bg-green-300",
    "bg-cyan-300",
    "bg-purple-300",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const experiences = [
    {
      role: "[Software Development Internship]",
      company: "PT Santai Berkualitas Syberindo",
      period: "Okt 2025 - Apr 2026",
      description:
        "Actively participate in the development and maintenance process of the LMS (Learning Management System) and CMS (Conference Management System).",
      techStack: ["PHP Laravel", "MySQL", "PostgreSQL", "Docker"],
      color: "bg-yellow-300",
    },
    {
      role: "[Software Development Internship]",
      company: "Dinas Komunikasi dan Informatika Kota Madiun",
      period: "Jan 2025 - Feb 2025",
      description:
        "Working on a internship project about CCTV monitoring system by integrating the RTSP protocol with Laravel for real-time live streaming",
      techStack: ["PHP Laravel", "MySQL", "PostgreSQL"],
      color: "bg-cyan-300",
    },
    {
      role: "[Volunteer Donor Darah Campus Event]",
      company: "Universitas Atma Jaya Yogyakarta",
      period: "Sep 2023",
      description:
        "Joined the publications division and successfully created infographics about the event and posted them on social media to encourage as many people as possible to become blood donors",
      techStack: ["Graphic Design", "Volunteer", "Teamwork"],
      color: "bg-pink-200",
    },
    {
      role: "[Active Member Java Programming Language Community]",
      company: "KSP UAJY",
      period: "Feb 2023 - Jun 2023",
      description:
        "Understanding the Java programming language to assist in the process of completing the final project for the course",
      techStack: ["Java"],
      color: "bg-green-300",
    },
    {
      role: "[Active Member C Programming Language Community]",
      company: "KSP UAJY",
      period: "Aug 2021 - May 2022",
      description:
        "Successfully finished assignment task in every sessions to improve critical thinking and problem solving skills",
      techStack: ["C#", "Flowchart", "Critical Thinking"],
      color: "bg-purple-300",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center px-4 pt-40 pb-20 bg-rose-200 overflow-x-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-12 right-12 w-20 h-20 bg-white border-2 border-black rotate-12 opacity-40 hidden md:block z-0" />
      <div className="absolute top-24 right-8 w-10 h-10 bg-purple-400 border-2 border-black -rotate-6 opacity-50 hidden md:block z-0" />
      <div className="absolute bottom-20 left-6 w-12 h-12 bg-yellow-400 border-2 border-black rotate-3 opacity-60 hidden md:block z-0" />
      {/* Diagonal stripes accent */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, black 0px, black 2px, transparent 2px, transparent 20px)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute top-12 left-4 w-32 h-48 opacity-10 hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
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
            04 — Where I've Worked
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
            Experience
          </h2>
          <div className="w-12 h-1.5 bg-purple-600" />
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
            <motion.div
              key={index}
              variants={itemVariants}
              className="ml-8 relative group"
            >
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute -left-[46px] top-4 w-6 h-6 bg-white border-4 border-black rounded-full group-hover:bg-purple-500 transition-colors cursor-pointer"
              />
              {/* Timeline line accent dot */}
              <div className="absolute -left-[54px] top-3 w-10 h-10 rounded-full bg-black/5 group-hover:bg-black/10 transition-colors" />

              {/* Experience Card */}
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
                }}
                className={`${exp.color} border-2 border-black p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col gap-8 relative`}
              >
                {/* Corner decoration */}
                <div className="absolute top-0 left-0 w-0 h-0 border-b-[28px] border-r-[28px] border-b-black border-r-transparent opacity-10" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl md:text-3xl font-black text-black tracking-tight flex items-center gap-3">
                      <BriefcaseBusiness
                        size={28}
                        strokeWidth={3}
                        className="shrink-0"
                      />
                      {exp.role}
                    </h3>
                    <p className="text-xl md:text-2xl font-bold text-black/80">
                      {exp.company}
                    </p>
                  </div>
                  <div className="shrink-0 mt-2 md:mt-0">
                    <span className="inline-block bg-white border-2 border-black px-5 py-2 font-bold text-sm text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-xl text-black font-medium leading-relaxed">
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
