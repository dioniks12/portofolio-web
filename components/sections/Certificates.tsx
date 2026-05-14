"use client";

import { motion, Variants } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from 'next/image';

// interface Certificate {
//   id: number;
//   title: string;
//   issuer: string;
//   date: string;
//   thumbnail: string; // Pastikan ini string, bukan string? (optional)
//   fileUrl: string;
//   color: string;
// }

// Certificates section — standalone page at /certificates.
// Displays a grid of certificates and achievements.
const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

  // Dummy certificates data
  const certificatesData = [
    {
      id: 1,
      title: "MagangHub Certificates by Sanbercode",
      issuer: "Kementerian Ketenagakerjaan RI",
      date: "Oct 2025 - Apr 2026",
      image: "/images/sertif1.jpg",
      fileUrl: "/images/sertif1.pdf",
      color: "bg-blue-300",
    },

    {
      id: 2,
      title: "Software Development Internship",
      issuer: "Dinas Komunikasi dan Informatika",
      date: "Jan 2025 - Feb 2025",
      image: "/images/sertif3.jpg", // Placeholder image path
      fileUrl: "/images/sertif3.pdf",
      color: "bg-pink-300",
    },
    {
      id: 3,
      title: "Active Member of Java Programming Language Community",
      issuer: "KSP UAJY",
      date: "Feb 2023 - Jun 2023",
      image: "/images/sertif2.jpg", // Placeholder image path
      fileUrl: "/images/sertif2.pdf",
      color: "bg-yellow-300",
    },
    {
      id: 4,
      title: "Active Member of C Programming Language Community",
      issuer: "KSP UAJY",
      date: "Aug 2021 - May 2022",
      image: "/images/sertif4.jpg", // Placeholder image path
      fileUrl: "/images/sertif4.pdf",
      color: "bg-purple-300",
    },
    {
      id: 5,
      title: "Active Member of MLBB E-Sports Community",
      issuer: "Unisec UAJY",
      date: "Aug 2021 - May 2023",
      image: "/images/sertif5.jpg", // Placeholder image path
      fileUrl: "/images/sertif5.pdf",
      color: "bg-green-300",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center px-4 pt-40 pb-20 bg-teal-200 overflow-x-hidden">
      {/* Decorative neobrutalism elements */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-white border-2 border-black rotate-12 opacity-50 hidden md:block z-0" />
      <div className="absolute top-32 left-10 w-12 h-12 bg-yellow-400 border-2 border-black -rotate-12 opacity-60 hidden md:block z-0" />
      <div className="absolute bottom-24 right-12 w-16 h-16 bg-pink-400 border-2 border-black rotate-45 opacity-50 hidden md:block z-0" />
      <div
        className="absolute top-10 left-10 w-48 h-48 opacity-10 hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants}
          className="mb-4 flex justify-center md:justify-start"
        >
          <span className="inline-block px-3 py-1 bg-black text-white text-xs font-black tracking-widest uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
            06 — Achievements
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants}
          className="mb-12 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter mb-4">
            Certifications
          </h2>
          <div className="w-12 h-2 bg-black" />
          <p className="mt-6 text-lg text-black font-medium max-w-2xl">
            A showcase of professional certifications and experiences that validate my skills and continuous learning journey.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
              className={`${cert.color} border-4 border-black p-4 flex flex-col shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-white border-2 border-black mb-4 overflow-hidden group">

              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "..." }} />

                {/* UNCOMMENT DAN UBAH DI SINI
                <Image 
                  src={cert.thumbnail} // Pakai properti thumbnail (gambar)
                  alt={cert.title} 
                  fill 
                  className="object-cover z-10 group-hover:scale-105 transition-transform duration-300"
                /> */}
                {/* Fallback pattern if image is missing */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, black 0px, black 2px, transparent 2px, transparent 10px)"
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black/30 font-bold flex flex-col items-center gap-2">
                    <Award size={32} />
                    Certificate Image
                  </span>
                </div>
                
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover z-10"
                  /> 

              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-xl text-black leading-tight mb-2 tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="font-bold text-black/80 text-sm mb-1">
                    {cert.issuer}
                  </p>
                  <p className="font-medium text-black/60 text-xs mb-4">
                    Issued: {cert.date}
                  </p>
                </div>
                
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 bg-black text-white font-bold text-sm border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors"
                >
                  View Credential <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
