// Footer section - neobrutalism bottom bar with decorative elements
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full bg-black py-12 px-4 border-t-8 border-yellow-400 mt-40 overflow-hidden">
      {/* Decorative dot grid */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Yellow corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-yellow-400 border-l-transparent opacity-60" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Top row: Brand + Nav links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b-2 border-white/20">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="font-black text-2xl text-white tracking-tighter">
              Dioni<span className="text-yellow-400">.</span>dev
            </span>
            <span className="text-white/50 text-sm font-medium">
              Fullstack Developer · Open to Work
            </span>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 font-bold text-sm hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 font-medium text-sm text-center md:text-left">
            copyright &copy; {currentYear} Dioni Krisna Saputra Lodrigus. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-medium">
            Built with Next.js · Framer Motion · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
