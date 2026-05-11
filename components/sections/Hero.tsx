'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

// Hero section - neobrutalism vibes: bold, playful, border tebal, hard shadow, accent color
const Hero = () => {
	// Animation variants for entrance
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.1 },
		},
	};
	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
	};

	return (
		<section className="w-full min-h-[80vh] flex items-center justify-center px-4 pt-20 pb-32">
			<motion.div
				className="max-w-3xl w-full flex flex-col gap-8"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Badge */}
				<motion.div variants={itemVariants}>
					<span className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-white font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
						<Sparkles size={18} className="text-yellow-400" strokeWidth={3} />
						Informatics Engineer
					</span>
				</motion.div>

				{/* Heading */}
				<motion.h1
					variants={itemVariants}
					className="text-5xl sm:text-6xl font-black text-black leading-tight tracking-tighter"
				>
					Dioni Krisna
				</motion.h1>

				{/* Tagline */}
				<motion.p
					variants={itemVariants}
					className="text-lg font-bold text-blue-700 mb-2 tracking-tight"
				>
					Web & Mobile Developer
				</motion.p>

				{/* Description */}
				<motion.p
					variants={itemVariants}
					className="text-base text-black max-w-xl font-medium leading-relaxed border-2 border-black bg-yellow-100 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
				>
					Passionate in building impactful digital solutions. Experienced in inventory systems, integrated monitoring, and modern web technology.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div variants={itemVariants} className="flex gap-4 mt-2">
					<a
						href="#contact"
						className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-400 text-black border-2 border-black font-bold text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-colors"
					>
						<Mail size={20} strokeWidth={3} />
						Hubungi Saya
					</a>
					<a
						href="#projects"
						className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black border-2 border-black font-bold text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors"
					>
						Lihat Projek
						<ArrowRight size={20} strokeWidth={3} />
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
