import Hero from "@/components/sections/Hero";

// Home page — only renders the Hero section.
// All other sections are accessible via their own routes (/about, /skills, etc.)
const Home = () => {
  return <Hero />;
};

export default Home;
