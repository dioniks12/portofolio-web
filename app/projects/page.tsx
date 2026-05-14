import type { Metadata } from 'next';
import Projects from '@/components/sections/Projects';

// SEO metadata for the /projects route
export const metadata: Metadata = {
  title: 'Projects | Dioni Krisna',
  description:
    'Featured projects by Dioni Krisna — including a Financial & Goods Management System and an Integrated CCTV Monitoring dashboard.',
};

// Projects page — renders the Projects section as a standalone page
const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
