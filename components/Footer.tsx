// Footer section - simple neobrutalism bottom bar
const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 px-4 border-t-8 border-yellow-400 mt-40">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white font-bold text-center md:text-left">
          
        </p>
        <p className="text-white/80 font-medium text-sm text-center md:text-right">
          copyright &copy; {new Date().getFullYear()} Dioni Krisna Saputra Lodrigus.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
