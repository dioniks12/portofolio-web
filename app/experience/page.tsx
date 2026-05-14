import type { Metadata } from 'next';
import Experience from '@/components/sections/Experience';

// SEO metadata for the /experience route
export const metadata: Metadata = {
  title: 'Experience | Dioni Krisna',
  description:
    'Professional experience of Dioni Krisna — Software Development internships at PT Santai Berkualitas Syberindo and Dinas Komunikasi dan Informatika Kota Madiun.',
};

// Experience page — renders the Experience section as a standalone page
const ExperiencePage = () => {
  return <Experience />;
};

export default ExperiencePage;
