'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles, MapPin, Download } from 'lucide-react';

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
		<section className="relative w-full min-h-[100vh] flex items-center justify-center px-4 pt-[68px] pb-16 bg-[#faf8f3] border-b-4 border-black overflow-hidden">
			{/* Neobrutalism decorative shapes - background */}
			<div className="absolute top-20 right-8 w-16 h-16 bg-yellow-400 border-2 border-black rotate-12 opacity-70 hidden sm:block" />
			<div className="absolute top-40 right-24 w-8 h-8 bg-pink-400 border-2 border-black -rotate-6 opacity-60 hidden sm:block" />
			<div className="absolute bottom-24 left-8 w-20 h-20 bg-cyan-300 border-2 border-black rotate-3 opacity-60 hidden sm:block" />
			<div className="absolute bottom-16 left-28 w-10 h-10 bg-violet-400 border-2 border-black -rotate-12 opacity-50 hidden sm:block" />
			<div className="absolute top-1/3 left-4 w-6 h-6 bg-green-400 border-2 border-black rotate-45 opacity-60 hidden sm:block" />
			{/* Grid dot pattern - top right */}
			<div
				className="absolute top-24 right-0 w-48 h-48 opacity-10 hidden md:block"
				style={{
					backgroundImage: 'radial-gradient(circle, black 1.5px, transparent 1.5px)',
					backgroundSize: '16px 16px',
				}}
			/>
			{/* Grid dot pattern - bottom left */}
			<div
				className="absolute bottom-0 left-0 w-64 h-40 opacity-10 hidden md:block"
				style={{
					backgroundImage: 'radial-gradient(circle, black 1.5px, transparent 1.5px)',
					backgroundSize: '16px 16px',
				}}
			/>

			<motion.div
				className="max-w-3xl w-full flex flex-col gap-7 relative z-10"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Location + status pill */}
				<motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
					<span className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-black bg-white font-bold text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
						<MapPin size={13} strokeWidth={3} className="text-red-500" />
						Madiun City, East Java
					</span>
					<span className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-green-300 font-bold text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
						<span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
						Open to Work
					</span>
				</motion.div>

				{/* Badge */}
				<motion.div variants={itemVariants}>
					<span className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-white font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
						<Sparkles size={18} className="text-yellow-400" strokeWidth={3} />
						Fresh Graduate of Informatics Engineering
					</span>
				</motion.div>

				{/* Heading */}
				<motion.h1
					variants={itemVariants}
					className="text-5xl sm:text-6xl font-black text-black leading-tight tracking-tighter"
				>
					Dioni Krisna{' '}
					<span className="relative inline-block">
						<span className="relative z-10">Saputra</span>
						<span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-400 -z-0 opacity-80" />
					</span>{' '}
					Lodrigus
				</motion.h1>

				{/* Tagline */}
				<motion.p
					variants={itemVariants}
					className="text-lg font-bold text-blue-700 tracking-tight"
				>
					Fullstack Developer
				</motion.p>

				{/* Description */}
				<motion.p
					variants={itemVariants}
					className="text-base text-black max-w-xl font-medium leading-relaxed border-2 border-black bg-yellow-100 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
				>
					A passionate developer based in Madiun City, East Java. I specialize in Web Development
					using Laravel, MySQL, PostgreSQL, additionally, I have experience in Mobile Development
					using Flutter.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
					<a
						href="#contact"
						className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-400 text-black border-2 border-black font-bold text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
					>
						<Mail size={20} strokeWidth={3} />
						Get In Touch
					</a>
					<a
						href="#projects"
						className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black border-2 border-black font-bold text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
					>
						My Projects
						<ArrowRight size={20} strokeWidth={3} />
					</a>
					<a
						href="/cv.pdf"
						download
						className="inline-flex items-center gap-2 px-7 py-3 bg-black text-white border-2 border-black font-bold text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
					>
						<Download size={20} strokeWidth={3} />
						Resume
					</a>
				</motion.div>

				{/* Stats Row */}
				<motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
					{[
						{ value: '2+', label: 'Years Coding' },
						{ value: '5+', label: 'Projects Done' },
						{ value: '2', label: 'Internships' },
					].map((stat) => (
						<div
							key={stat.label}
							className="flex flex-col items-center justify-center px-6 py-4 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[90px]"
						>
							<span className="text-2xl font-black text-black">{stat.value}</span>
							<span className="text-xs font-bold text-black/60 text-center">{stat.label}</span>
						</div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
