import type { Metadata } from 'next';
import About from '@/components/sections/About';

// SEO metadata for the /about route
export const metadata: Metadata = {
  title: 'About | Dioni Krisna',
  description:
    'Learn about Dioni Krisna — an Informatics Engineering graduate passionate about full-stack web development, system design, and problem-solving.',
};

// About page — renders the About section as a standalone page
const AboutPage = () => {
  return <About />;
};

export default AboutPage;
