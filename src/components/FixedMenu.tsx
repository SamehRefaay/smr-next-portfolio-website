import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CgMenuGridR } from 'react-icons/cg';
import { AnimatePresence, motion } from 'framer-motion';
// components
import Nav from './Nav';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import Socials from './Socials';

const FixedMenu = () => {
	const [showMenuButton, setShowMenuButton] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [isMounted, setIsMounted] = useState(false); // check if the component is mounted

	const isMobile = useMediaQuery({ query: '(max-width:640px)' });

	// check if the component is mounted to prevent SSR mismatch
	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (isMounted) {
			const handleScroll = () => {
				// show the menu button after scrolling 150px
				setShowMenuButton(window.scrollY > 150);
			};
			if (!isMobile) {
				window.addEventListener('scroll', handleScroll);
				return () => window.removeEventListener('scroll', handleScroll);
			} else {
				// always show menu button on mobile screen
				setShowMenuButton(true);
			}
		}
	}, [isMobile, isMounted]);

	const toggleMenu = () => {
		setShowMenu(prev => !prev);
	};

	// prevent rendering before mounted
	if (!isMounted) return null;

	return (
		<div className="fixed w-full h-[400px] z-50 flex justify-center bg-transparent pointer-events-none">
			{/* menu */}
			<AnimatePresence>
				{showMenu && showMenuButton && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
						className="relative w-full max-w-md md:max-w-none h-400 bottom-[32rem] xl:bottom-[34rem] px-4 pointer-events-auto"
					>
						<div className="w-full h-full bg-white shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex gap-12 items-center rounded-lg">
							{/* nav */}
							<Nav
								containerStyles="w-full md:border-r border-secondary/20 md:pr-12 md:w-auto text-center md:text-left"
								listStyles="flex flex-col justify-center gap-4"
								linkStyles="font-primary text-4xl text-primary cursor-pointer"
								spy={true}
							/>
							{/* info */}
							<div className="hidden md:flex mx-auto">
								<div className="flex flex-col gap-8">
									<div className="flex gap-12 justify-between">
										{/* location */}
										<div className="flex flex-col">
											<div className="text-[28px] text-accent mb-2">
												<FiMapPin />
											</div>
											<p className="font-semibold text-lg text-primary">
												Location
											</p>
											<p>Cairo, Egypt</p>
										</div>
										{/* phone */}
										<div className="flex flex-col">
											<div className="text-[28px] text-accent mb-2">
												<FiPhoneCall />
											</div>
											<p className="font-semibold text-lg text-primary">
												Phone
											</p>
											<p>+2 0111 7015 415</p>
										</div>
										{/* email */}
										<div className="flex flex-col">
											<div className="text-[28px] text-accent mb-2">
												<FiMail />
											</div>
											<p className="font-semibold text-lg text-primary">
												Email
											</p>
											<p>samehrefaay89@gmail.com</p>
										</div>
									</div>
									<div>
										<Socials
											containerStyles="flex gap-8 items-center"
											iconStyles="text-primary text-[30px] flex justify-center items-center full-rounded "
										/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			{/* menu button */}
			{/* render menu button on mobile witout animation */}
			{isMobile ? (
				<div className="fixed z-50 bottom-8">
					<button
						onClick={toggleMenu}
						className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg flex justify-center items-center cursor-pointer select-none pointer-events-auto"
					>
						<CgMenuGridR className="text-4xl text-white" />
					</button>
				</div>
			) : (
				showMenuButton && (
					<AnimatePresence>
						<motion.div
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 100, opacity: 0 }}
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 40,
							}}
							className="fixed z-50 bottom-16 pointer-events-auto"
						>
							<button
								onClick={toggleMenu}
								className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg flex justify-center items-center cursor-pointer select-none"
							>
								<CgMenuGridR className="text-4xl text-white" />
							</button>
						</motion.div>
					</AnimatePresence>
				)
			)}
		</div>
	);
};

export default FixedMenu;
