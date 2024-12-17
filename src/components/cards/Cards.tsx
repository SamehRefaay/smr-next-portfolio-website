import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

// components
import Card from './Card';

const journey: any[] = [
	// experience
	{
		type: 'experience',
		company: 'UpWork',
		logoUrl: '/assets/journey/experience/upwork-logo.svg',
		position: 'Web Developer (Freelancer)',
		duration: 'Jul 2021 - Present',
		description:
			'Built websites and web apps using Next.js, Tailwind, and Typescript. Worked on Scaleble, user-friendly solutions.',
	},
	{
		type: 'experience',
		company: 'Orange',
		logoUrl: '/assets/journey/experience/orange-logo.svg',
		position: 'Full Stack Developer',
		duration: 'Mar 2019 - Jun 2021',
		description:
			'Developed full stack solutions using React and Node.js, Integrated fronted and backend Technologies.',
	},
	{
		type: 'experience',
		company: 'Orange',
		logoUrl: '/assets/journey/experience/orange-logo.svg',
		position: 'Frontend Developer',
		duration: 'Aug 2015 - Dec 2016',
		description:
			'Developed responsive websites with HTML, CSS, and Javascript. Ensure seamless user experience.',
	},
	// education
	{
		type: 'education',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'IBM Front-End Developer Sepcialization',
		duration: 'Jul 2023 - Jan 2024',
		description:
			'in this Professional Certiﬁcate, learners developed the core skills needed to design and develop web and front-end applications. The Certiﬁcate holder has demonstrated the ability to build web pages using HTML, CSS, and JavaScript; apply user interface and user experience (UI/UX) best practices and principles; manage code using GitHub repositories and branches; create applications using front-end frameworks, such as React JS; test and debug applications; deploy applications using automated build tools...',
	},
	{
		type: 'education',
		institution: 'Udacity',
		logoUrl: '/assets/journey/education/udacity.svg',
		qualification: 'Professional Front-End Web Development Nanodegree',
		duration: 'Nov 2022 - Jan 2023',
		description:
			'The online Nanodegree program by Udacity aims to Learn how to build high-quality websites and dynamic applications to create stunning user experiences for the web by being able to construct responsive websites using CSS, Flexbox, and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML and connect a web application to backend server data using JavaScript.',
	},
	{
		type: 'education',
		institution: 'El Shorouk Academy',
		logoUrl: '/assets/journey/education/shorouk-acadmey.jpeg',
		qualification: 'Electrical, Electronics and Communications Engineering',
		duration: '2006 - 2011',
		description:
			'The B.Sc. in Electronics Engineering program seeks to provide a broad and solid background in the current theory and practice of electronics, communication and computer engineering, including familiarity with basic tools of math and science.Required science courses cover basic chemistry and physics, whereas math requirements cover calculus, linear algebra, differential equations, probability and statistics and numerical analysis.Computer programming skills is provided through an introductory course in programming and a specialized course on computer application in electrical engineering. The program offers the main components of modern electronics engineering curriculum. Core courses cover circuit theory, electronic circuits, digital systems, signals and systems, electromagnetics, communications, control systems, power systems and electrical machines.',
	},
	//certifications
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'IBM Front-End Developer Specialization',
		duration: 'Jan 2024',
		certId: 'XJMPASFGPJTY',
		certUrl: 'https://coursera.org/verify/professional-cert/XJMPASFGPJTY',
	},
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'Front-End Development Capstone Project',
		duration: 'Jan 2024',
		certId: 'JL7FW7JW4688',
		certUrl: 'https://www.coursera.org/verify/JL7FW7JW4688',
	},
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'Designing User Interfaces and Experiences (UI/UX)',
		duration: 'Dec 2023',
		certId: 'NF76U4ZWCHUP',
		certUrl: 'https://www.coursera.org/verify/NF76U4ZWCHUP',
	},

	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'Intermediate Web and Front-End Development',
		duration: 'Oct 2023',
		certId: 'XTMHKU5SBK9W',
		certUrl: 'https://www.coursera.org/verify/XTMHKU5SBK9W',
	},
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'Developing Front-End Apps with React',
		duration: 'Aug 2023',
		certId: 'BZE3TDCPCGSX',
		certUrl: 'https://www.coursera.org/verify/BZE3TDCPCGSX',
	},
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'Developing Cloud Native Applications',
		duration: 'Aug 2023',
		certId: 'P722AVEHBRNB',
		certUrl: 'https://www.coursera.org/verify/P722AVEHBRNB',
	},
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'Getting Started with Git and GitHub',
		duration: 'Jul 2023',
		certId: '95SLT4FJCLGM',
		certUrl: 'https://www.coursera.org/verify/95SLT4FJCLGM',
	},
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'Introduction to Web Development with HTML, CSS, JavaScript',
		duration: 'Jul 2023',
		certId: 'ERXHYUBQPBCA',
		certUrl: 'https://www.coursera.org/verify/ERXHYUBQPBCA',
	},
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/coursera-logo.svg',
		qualification: 'Introduction to Software Engineering',
		duration: 'Jul 2023',
		certId: 'SMWHKXCNW2HG',
		certUrl: 'https://www.coursera.org/verify/SMWHKXCNW2HG',
	},
	,
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/udacity.svg',
		qualification: 'Professional Front-End Web Development Nanodegree Program',
		duration: 'Jan 2023',
		certId: 'WGGAAWRM',
		certUrl:
			'https://www.udacity.com/certificate/e/85ec4100-7173-11ed-bc07-0fb2526eddee',
	},
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/udacity.svg',
		qualification: 'Web Development Challenger Nanodegree Program',
		duration: 'Jun 2022',
		certId: 'nd001-mena-nfp1',
		certUrl:
			'https://www.udacity.com/certificate/e/9380ef50-cda9-11ec-8943-0f8340407e02',
	},
	// skills
	{
		type: 'skill',
		name: 'HTML',
		icon: <FaHtml5 />,
		duration: 'Learned in 2018',
		description:
			'Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.',
	},
	{
		type: 'skill',
		name: 'CSS',
		icon: <FaCss3Alt />,
		duration: 'Learned in 2018',
		description:
			'Styled responsive web pages using CSS, enusuring an appealing user experience with modern design principles and layouts.',
	},
	{
		type: 'skill',
		name: 'Javascript',
		icon: <FaJs />,
		duration: 'Learned in 2018',
		description:
			'Implemented Javascript for interactivity, enhanceing user engagement on websites through dynamic content and features.',
	},
	{
		type: 'skill',
		name: 'React.js',
		icon: <FaReact />,
		duration: 'Learned in 2020',
		description:
			'Built dynamic user interfaces using React.js, optimizing component-driven design for seamless user experiences and efficiency.',
	},
	{
		type: 'skill',
		name: 'Typescript',
		icon: <SiTypescript />,
		duration: 'Learned in 2022',
		description:
			'Implemented Typescript insted of Javascript for interactivity, highlight unexpected behavior in code, lowering the chance of bugs. ',
	},
	{
		type: 'skill',
		name: 'Tailwind CSS',
		icon: <SiTailwindcss />,
		duration: 'Learned in 2022',
		description:
			'Using tailwind css instead of writing traditional css simplify the development process, get an efficient design with minimal code, allows for responsive design, offers you flexibility and customizability, get rapid development and improve website performance.',
	},
	{
		type: 'skill',
		name: 'NextJs',
		icon: <SiNextdotjs />,
		duration: 'Learned in 2023',
		description:
			"While React is a fantastic library for building user interfaces, Next.js takes it a step further by providing a structured framework and a wealth of features that simplify development and enhance performance. Next.js handles routing, data fetching, and other essential tasks out of the box, allowing you to focus on building your application's core functionality. Its built-in optimization tools and rendering strategies give your project a significant performance boost over a standard React application.",
	},
];

//

const Cards = () => {
	return (
		<Tabs
			defaultValue="experience"
			className="w-full flex flex-col items-center"
		>
			<TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row">
				<TabsTrigger value="experience">Experience</TabsTrigger>
				<TabsTrigger value="education">Education</TabsTrigger>
				<TabsTrigger value="certification">Certifications</TabsTrigger>
				<TabsTrigger value="skills">My Skills</TabsTrigger>
			</TabsList>
			<TabsContent value="experience" className="w-full">
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
					>
						{journey
							.filter((item: { type: string }) => item?.type === 'experience')
							.map((item: any, index: number) => (
								<Card key={index} {...item} />
							))}
					</motion.div>
				</AnimatePresence>
			</TabsContent>
			<TabsContent value="education" className="w-full">
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
					>
						{journey
							.filter((item: { type: string }) => item.type === 'education')
							.map((item: any, index: number) => (
								<Card key={index} {...item} />
							))}
					</motion.div>
				</AnimatePresence>
			</TabsContent>
			<TabsContent value="certification" className="w-full">
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
					>
						{journey
							.filter(
								(item: { type: string }) => item?.type === 'certification'
							)
							.map((item: any, index: number) => (
								<Card key={index} {...item} />
							))}
					</motion.div>
				</AnimatePresence>
			</TabsContent>
			<TabsContent value="skills" className="w-full">
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
					>
						{journey
							.filter((item: { type: string }) => item.type === 'skill')
							.map((item: any, index: number) => (
								<Card key={index} {...item} />
							))}
					</motion.div>
				</AnimatePresence>
			</TabsContent>
		</Tabs>
	);
};

export default Cards;
