'use client';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
// components
import RotatingShape from './RotatingShape';
import Header from './Header';
import Stats from './stats/Stats';

const Hero = () => {
	return (
		<section id="home">
			<div className="h-[800px] relative bg-accent/10 xl:bg-white">
				{/* header */}
				<Header />
				{/* hero */}
				<div className="container mx-auto h-full">
					<div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
						<h1 className="h1 mb-2 max-w-[320px] xl:max-w-none ">
							<span className="text-accent">I Build and</span> Design Powerful
							<TypeAnimation
								preRenderFirstString={true}
								sequence={['Websites', 2000, 'Apps', 2000]}
								speed={50}
								repeat={Infinity}
								wrapper="span"
								cursor={false}
								className="ml-2 xl:ml-4"
							/>
						</h1>
						<p className="lead mb-7 max-w-[476px]">
							Delivering powerful, custom websites that blend aesthetics with
							performance.
						</p>
						<ScrollLink to="contact" smooth>
							<button className="btn btn-accent mb-8">Contact me</button>
						</ScrollLink>
						{/* states */}
						<Stats />
					</div>

					{/* image */}
					<div className="hidden xl:flex h-[800px] w-[55vw] absolute top-0 right-0 bg-accent">
						<div className="absolute w-[612px] h-[612px] left-12 bottom-0 z-40">
							<Image
								src="/assets/hero/profile-06.png"
								alt="developer picture"
								fill
								priority
								className="object-contain"
							/>
						</div>
						<div
							className="hidden xl:flex absolute left-[6vw] top-56"
							data-scroll
							data-scroll-speed="0.05"
						>
							<Image
								src="/assets/hero/arrow.svg"
								alt=""
								width={160}
								height={160}
							/>
						</div>
						{/* shape 1 */}
						<div
							className="absolute top-[600px] left-[3vw]"
							data-scroll
							data-scroll-speed="0.2"
						>
							<RotatingShape
								content={
									<Image
										src="/assets/hero/shape-1.svg"
										alt="shape-1"
										width={38}
										height={38}
									/>
								}
								direction="right"
								duration={6}
							/>
						</div>
						{/* shape 2 */}
						<div
							className="absolute top-[240px] xl:left-[30vw]"
							data-scroll
							data-scroll-speed="0.1"
						>
							<RotatingShape
								content={
									<Image
										src="/assets/hero/shape-2.svg"
										alt="shape-2"
										width={36}
										height={36}
									/>
								}
								direction="right"
								duration={5}
							/>
						</div>
						{/* shape 3 */}
						<div
							className="absolute top-[480px] xl:left-[40vw]"
							data-scroll
							data-scroll-speed="0.08"
						>
							<RotatingShape
								content={
									<Image
										src="/assets/hero/shape-3.svg"
										alt="shape-2"
										width={36}
										height={36}
									/>
								}
								direction="right"
								duration={7}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
