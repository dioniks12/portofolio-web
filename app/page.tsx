import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

// Home page entry - renders sections with neobrutalism vibes
const Home = () => {
  return (
    <>
      <main className="min-h-screen w-full bg-[#faf8f3] flex flex-col gap-40 pb-40">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
