'use client';
import { useEffect } from 'react';
// components
import Hero from '@/components/Hero';
import FixedMenu from '@/components/FixedMenu';
import Services from '@/components/Services';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Testimonials from '@/components/Testimonials';
import Work from '@/components/work/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
		<>
			<Hero />
			<FixedMenu />
			<Services />
			<About />
			<Journey />
			<Work />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
