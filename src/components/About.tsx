import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const About = () => {
	return (
		<section className="relative pt-12 pb-24" id="about">
			<div className="container mx-auto h-full">
				<div className="h-full flex justify-center items-center">
					{/*  image and shapes */}
					<div className="hidden xl:flex flex-1 pl-8">
						<div className="relative  w-full max-w-[380px]">
							{/* shape */}
							<div className="w-[160px] h-[160px] absolute bg-accent -top-5 -left-5 -z-10"></div>
							{/* image */}
							<div className="bg-[#e5f8f6] rounded-tl-[8px] rounded-tr-[120px] m-h-[475px] flex justify-center items-end">
								<Image
									src="/assets/about/profile.png"
									alt=""
									width={350}
									height={650}
									quality={100}
									priority
								/>
							</div>
							{/*  rotating shape */}
							<div className="absolute top-2/4 -right-[65px] flex justify-center items-center">
								<motion.div
									animate={{
										rotate: [0, 360],
									}}
									transition={{
										duration: 10,
										ease: 'linear',
										repeat: Infinity,
									}}
								>
									<Image
										src="/assets/about/shape-1.svg"
										alt=""
										width={160}
										height={160}
									/>
								</motion.div>
								<div className="absolute text-white text-center">
									<div className="text-5xl font-bold leading-none">10+</div>
									<div className="text-center leading-none">
										Years of
										<br />
										Experience
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* text */}
					<div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
						<div>
							<AnimatedText text="My name is Sameh" textStyle="h2 mb-2" />
							<p className="text-lg">Frontend Developer & Designer</p>
						</div>
						<p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
							I create visually stunning and functional websites using modern
							frontend technologies and design principles. Explore my work to
							see how I combine creativity with technical skills to deliver an
							expceptional digital experiences.
						</p>
						{/* info items */}
						<div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap items-center max-w-max mx-auto xl:mx-0">
							{/* item 1 */}
							<div className="max-w-max">
								<div className="uppercase font-bold text-primary">Age</div>
								<p className="text-sm">35 Years</p>
							</div>
							{/* item 2 */}
							<div className="max-w-max">
								<div className="uppercase font-bold text-primary">Born In</div>
								<p className="text-sm">Cairo, Egypt</p>
							</div>
							{/* item 3 */}
							<div className="max-w-max">
								<div className="uppercase font-bold text-primary">Phone</div>
								<p className="text-sm">+2 0111-7015-415</p>
							</div>
							{/* item 4 */}
							<div className="max-w-max">
								<div className="uppercase font-bold text-primary">Email</div>
								<p className="text-sm">samehrefaay89@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
