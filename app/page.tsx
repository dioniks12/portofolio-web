import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';

// Home page entry - renders sections with neobrutalism vibes
const Home = () => {
  return (
    <main className="min-h-screen w-full bg-[#faf8f3] flex flex-col gap-40 pb-40">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
};

export default Home;
