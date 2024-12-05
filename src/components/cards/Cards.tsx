import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaNodeJs,
	FaFigma,
} from 'react-icons/fa';

// components
import Card from './Card';

const journey = [
	// experience
	{
		type: 'experience',
		company: 'UpWork',
		logoUrl: '/assets/journey/experience/logo-1.svg',
		position: 'Web Developer',
		duration: 'Jul 2021 - Present',
		description:
			'Built websites and web apps using Next.js, Tailwind, and Typescript. Worked on Scaleble, user-friendly solutions.',
	},
	{
		type: 'experience',
		company: 'Orange',
		logoUrl: '/assets/journey/experience/logo-2.svg',
		position: 'Full Stack Developer',
		duration: 'Mar 2019 - Jun 2021',
		description:
			'Developed full stack solutions using React and Node.js, Integrated fronted and backend Technologies.',
	},
	{
		type: 'experience',
		company: 'Arabia Inc',
		logoUrl: '/assets/journey/experience/logo-3.svg',
		position: 'Frontend Developer',
		duration: 'Aug 2015 - Dec 2016',
		description:
			'Developed responsive websites with HTML, CSS, and Javascript. Ensure seamless user experience.',
	},
	// education
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
		logoUrl: '/assets/journey/education/logo-1.svg',
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
		logoUrl: '/assets/journey/education/logo-1.svg',
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
	// skills
	{
		type: 'skill',
		name: 'HTML',
		icon: <FaHtml5 />,
		duration: 'Learned in 2016',
		description:
			'Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.',
	},
	{
		type: 'skill',
		name: 'HTML',
		icon: <FaHtml5 />,
		duration: 'Learned in 2016',
		description:
			'Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.',
	},
	{
		type: 'skill',
		name: 'HTML',
		icon: <FaHtml5 />,
		duration: 'Learned in 2016',
		description:
			'Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.',
	},
	{
		type: 'skill',
		name: 'HTML',
		icon: <FaHtml5 />,
		duration: 'Learned in 2016',
		description:
			'Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.',
	},
];

const Cards = () => {
	return (
		<Tabs
			defaultValue="experience"
			className="w-full flex flex-col items-center"
		>
			<TabsList className="max-w-max mb-[30px]">
				<TabsTrigger value="experience">Experience</TabsTrigger>
				<TabsTrigger value="education">Education</TabsTrigger>
				<TabsTrigger value="skills">My Skills</TabsTrigger>
			</TabsList>
			<TabsContent value="experience" className="w-full">
				<div>
					{journey
						.filter(item => item.type === 'experience')
						.map((item, index) => (
							<Card key={index} {...item} />
						))}
				</div>
			</TabsContent>
			<TabsContent value="education" className="w-full">
				<div>
					{journey
						.filter(item => item.type === 'education')
						.map((item, index) => (
							<Card key={index} {...item} />
						))}
				</div>
			</TabsContent>
			<TabsContent value="skills" className="w-full">
				<div>
					{journey
						.filter(item => item.type === 'skill')
						.map((item, index) => (
							<Card key={index} {...item} />
						))}
				</div>
			</TabsContent>
		</Tabs>
	);
};

export default Cards;
