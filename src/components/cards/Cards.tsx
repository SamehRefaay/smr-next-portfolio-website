import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

// components
import Card from './Card';

const journey = [
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
		logoUrl: '/assets/journey/education/coursera_logo.svg',
		qualification: 'IBM Front-End Developer Sepcialization',
		duration: 'Sep 2023 - Jan 2024',
		description:
			'in this Professional Certiﬁcate, learners developed the core skills needed to design and develop web and front-end applications. The Certiﬁcate holder has demonstrated the ability to build web pages using HTML, CSS, and JavaScript; apply user interface and user experience (UI/UX) best practices and principles; manage code using GitHub repositories and branches; create applications using front-end frameworks, such as React JS; test and debug applications; deploy applications using automated build tools...',
	},
	{
		type: 'education',
		institution: 'Udemy',
		logoUrl: '/assets/journey/education/logo-1.svg',
		qualification: 'Web Development Bootcamp',
		duration: 'Jan 2020 - Apr 2020',
		description:
			'Learned full-stack development concepts,focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.',
	},
	{
		type: 'education',
		institution: 'Udemy',
		logoUrl: '/assets/journey/education/logo-2.svg',
		qualification: 'Web Development Bootcamp',
		duration: 'Jan 2020 - Apr 2020',
		description:
			'Learned full-stack development concepts,focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.',
	},
	{
		type: 'education',
		institution: 'Udemy',
		logoUrl: '/assets/journey/education/logo-2.svg',
		qualification: 'Web Development Bootcamp',
		duration: 'Jan 2020 - Apr 2020',
		description:
			'Learned full-stack development concepts,focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.',
	},
	{
		type: 'education',
		institution: 'Udemy',
		logoUrl: '/assets/journey/education/logo-1.svg',
		qualification: 'Web Development Bootcamp',
		duration: 'Jan 2020 - Apr 2020',
		description:
			'Learned full-stack development concepts,focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.',
	},
	//certifications
	{
		type: 'certification',
		institution: 'Coursera',
		logoUrl: '/assets/journey/education/logo-1.svg',
		qualification: 'IBM Front-End Developer Specialization',
		duration: 'Jan 2024',
		certId: 'XJMPASFGPJTY',
		certUrl:
			'https://www.coursera.org/account/accomplishments/specialization/XJMPASFGPJTY',
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
			<TabsList className="max-w-max mb-[30px]">
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
							.filter(item => item.type === 'experience')
							.map((item, index) => (
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
							.filter(item => item.type === 'education')
							.map((item, index) => (
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
							.filter(item => item.type === 'certification')
							.map((item, index) => (
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
							.filter(item => item.type === 'skill')
							.map((item, index) => (
								<Card key={index} {...item} />
							))}
					</motion.div>
				</AnimatePresence>
			</TabsContent>
		</Tabs>
	);
};

export default Cards;
