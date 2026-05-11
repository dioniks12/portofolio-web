'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code2, Camera, Mail, Send } from 'lucide-react';

// Contact section - displays a contact form and social links with neobrutalism design
const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dioni-lodrigus',
      icon: Briefcase,
      color: 'bg-blue-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dioniks12',
      icon: Code2,
      color: 'bg-gray-300',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/dioniks._',
      icon: Camera,
      color: 'bg-pink-400',
    },
    {
      name: 'Email',
      url: 'mailto:dionilodrigus12@gmail.com',
      icon: Mail,
      color: 'bg-red-400',
    },
  ];

  return (
    <section className="w-full py-32 pb-40 px-4 bg-white mb-20 border-b-4 border-black flex justify-center" id="contact">
      <div className="max-w-4xl w-full mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter mb-2">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-yellow-400"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-[#faf8f3] border-2 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-black text-black tracking-tight mb-6">Send a Message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-black text-sm">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full p-4 bg-white border-2 border-black font-medium text-black outline-none focus:-translate-y-1 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-black text-sm">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full p-4 bg-white border-2 border-black font-medium text-black outline-none focus:-translate-y-1 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-black text-sm">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full p-4 bg-white border-2 border-black font-medium text-black outline-none focus:-translate-y-1 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full mt-2 py-4 bg-yellow-400 border-2 border-black font-black text-black text-lg flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-all"
              >
                Send Message
                <Send size={20} strokeWidth={3} />
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h3 className="text-3xl font-black text-black tracking-tight mb-4">Let's Connect</h3>
            <p className="text-lg text-black font-medium leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through the form or my social profiles!
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} border-2 border-black p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group`}
                  >
                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={24} strokeWidth={2.5} className="text-black" />
                    </div>
                    <span className="text-xl font-black text-black tracking-tight">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
