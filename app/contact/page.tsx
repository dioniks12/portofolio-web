import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

// SEO metadata for the /contact route
export const metadata: Metadata = {
  title: 'Contact | Dioni Krisna',
  description:
    'Get in touch with Dioni Krisna — send a message or connect via LinkedIn, GitHub, Instagram, or Email.',
};

// Contact page — renders the Contact section as a standalone page
const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
