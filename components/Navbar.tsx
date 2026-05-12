'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Navbar - neobrutalism style: bold border, hard shadow, accent highlights
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf8f3] border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]'
          : 'bg-[#faf8f3] border-b-4 border-black'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group"
          aria-label="Go to top"
        >
          <div className="w-9 h-9 bg-yellow-400 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
            <Code2 size={18} strokeWidth={3} className="text-black" />
          </div>
          <span className="font-black text-lg tracking-tighter text-black">
            Dioni<span className="text-blue-600">.</span>dev
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-2 font-black text-sm tracking-tight border-2 transition-all duration-150 
                    ${
                      isActive
                        ? 'bg-yellow-400 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black'
                        : 'border-transparent text-black hover:border-black hover:bg-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA Button - Desktop */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#contact');
          }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-black text-white border-2 border-black font-black text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Hire Me 🚀
        </a>

        {/* Mobile Hamburger */}
        <button
          id="navbar-mobile-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          className="md:hidden w-10 h-10 border-2 border-black bg-white flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-colors"
        >
          {isOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#faf8f3] border-b-4 border-black"
          >
            <ul className="flex flex-col px-4 py-4 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={`w-full text-left px-4 py-3 font-black text-base border-2 transition-all
                        ${
                          isActive
                            ? 'bg-yellow-400 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black'
                            : 'bg-white border-black text-black hover:bg-yellow-100'
                        }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contact');
                  }}
                  className="block w-full px-4 py-3 bg-black text-white border-2 border-black font-black text-base text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 transition-colors mt-2"
                >
                  Hire Me 🚀
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
