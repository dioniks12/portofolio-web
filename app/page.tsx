
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';

// Home page entry - renders sections with neobrutalism vibes
const Home = () => {
  return (
    <main className="min-h-screen w-full bg-[#faf8f3]">
      <Hero />
      <About />
    </main>
  );
};

export default Home;
