'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code2, Camera, Mail, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // You will need to replace these with your actual EmailJS credentials via environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
          () => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            if (formRef.current) formRef.current.reset();
            
            // Reset status after 5 seconds
            setTimeout(() => {
              setSubmitStatus('idle');
            }, 5000);
          },
          (error) => {
            console.error('FAILED...', error.text);
            setSubmitStatus('error');
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <section className="relative w-full pt-32 pb-48 px-4 bg-cyan-200 border-y-4 border-black flex justify-center overflow-hidden" id="contact">
      {/* Decorative neobrutalism elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white border-2 border-black rotate-12 opacity-40 hidden md:block" />
      <div className="absolute top-18 right-6 w-10 h-10 bg-yellow-400 border-2 border-black -rotate-6 opacity-60 hidden md:block" />
      <div className="absolute bottom-20 left-8 w-14 h-14 bg-violet-300 border-2 border-black rotate-3 opacity-50 hidden md:block" />
      <div
        className="absolute top-8 left-4 w-40 h-40 opacity-10 hidden md:block"
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
            05 — Say Hello
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
            Get In Touch
          </h2>
          <div className="w-12 h-1.5 bg-yellow-400" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-[#faf8f3] border-2 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <h3 className="text-2xl font-black text-black tracking-tight mb-6">Send a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-200 border-2 border-black flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle2 className="text-green-700" size={24} />
                <p className="font-bold text-green-900">Message sent successfully!</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-200 border-2 border-black flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <XCircle className="text-red-700" size={24} />
                <p className="font-bold text-red-900">Failed to send message. Please try again or check setup.</p>
              </div>
            )}

            <form ref={formRef} className="flex flex-col gap-6" onSubmit={sendEmail}>
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="font-bold text-black text-sm">
                  NAME
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full p-4 bg-white border-2 border-black font-medium text-black outline-none focus:-translate-y-1 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="font-bold text-black text-sm">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
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
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full p-4 bg-white border-2 border-black font-medium text-black outline-none focus:-translate-y-1 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-2 py-4 border-2 border-black font-black text-black text-lg flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all
                  ${isSubmitting 
                    ? 'bg-gray-300 opacity-70 cursor-not-allowed' 
                    : 'bg-yellow-400 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 size={20} strokeWidth={3} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} strokeWidth={3} />
                  </>
                )}
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
