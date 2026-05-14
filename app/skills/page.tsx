import type { Metadata } from 'next';
import Skills from '@/components/sections/Skills';

// SEO metadata for the /skills route
export const metadata: Metadata = {
  title: 'Skills | Dioni Krisna',
  description:
    'Tech stack and skills of Dioni Krisna — Next.js, React, Tailwind CSS, PHP/Laravel, Docker, MySQL, PostgreSQL, and Firebase.',
};

// Skills page — renders the Skills section as a standalone page
const SkillsPage = () => {
  return <Skills />;
};

export default SkillsPage;
