'use client';
import { useEffect } from 'react';
// components
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Work from '@/components/work/Work';
import Contact from '@/components/Contact';
import FixedMenu from '@/components/FixedMenu';

const Home = () => {
	// implement locomotive scroll
	useEffect(() => {
		const loadLocomotiveScroll = async () => {
			const locomotiveScroll = (await import('locomotive-scroll')).default;
			new locomotiveScroll();
		};
		loadLocomotiveScroll();
	}, []);

	return (
		<div>
			<Hero />
			<FixedMenu />
			<Services />
			<About />
			<Journey />
			<Work />
			<Contact />
			{/* temperory section */}
			<section className="h-[3000px]">temp</section>
		</div>
	);
};

export default Home;
