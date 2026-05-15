// Footer section - neobrutalism bottom bar (no nav links, navbar is only at top)
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black py-10 px-4 border-t-4 border-yellow-400 overflow-hidden">
      {/* Decorative dot grid */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Yellow corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-yellow-400 border-l-transparent opacity-60" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-white/50 font-medium text-sm text-center">
          copyright &copy; {currentYear} Dioni Krisna Saputra Lodrigus. All rights reserved.
        </p>

        {/* Tech stack credit */}
        <p className="text-white/30 text-xs font-medium text-center md:text-right">
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
