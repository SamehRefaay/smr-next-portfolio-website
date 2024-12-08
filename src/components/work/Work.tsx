import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
//components
import AnimatedText from '../AnimatedText';
import WorkItem from './WorkItem';

export interface workData {
	href: string;
	category: string;
	img: string;
	title: string;
}

const data: workData[] = [
	{
		href: '',
		category: 'frontend',
		img: '/assets/work/thumb-1.png',
		title: 'Project one',
	},
	{
		href: '',
		category: 'frontend',
		img: '/assets/work/thumb-2.png',
		title: 'Project two',
	},
	{
		href: '',
		category: 'frontend',
		img: '/assets/work/thumb-3.png',
		title: 'Project three',
	},
	{
		href: '',
		category: 'fullstack',
		img: '/assets/work/thumb-4.png',
		title: 'Project four',
	},
	{
		href: '',
		category: 'fullstack',
		img: '/assets/work/thumb-5.png',
		title: 'Project five',
	},
	{
		href: '',
		category: 'fullstack',
		img: '/assets/work/thumb-6.png',
		title: 'Project six',
	},
	{
		href: '',
		category: 'fullstack',
		img: '/assets/work/thumb-7.png',
		title: 'Project seven',
	},
];

const Work = () => {
	const [tabValue, setTabValue] = useState('all');
	const [visableItems, setVisableItems] = useState(6);

	const uniqueCategories = Array.from(new Set(data.map(item => item.category)));

	const tabData: { category: string }[] = [
		{ category: 'all' },
		...uniqueCategories.map(item => ({ category: item })),
	];

	//filiter work item based on tab category
	const filiteredWork: workData[] =
		tabValue === 'all'
			? data.filter(item => item.category !== 'all')
			: data.filter(item => item.category === tabValue);

	// handle loading more items
	const loadMoreItems = () => setVisableItems(prev => prev + 2);

	return (
		<section className="py-24 min-h-[1000px]" id="work">
			<div className="container mx-auto">
				<Tabs defaultValue="all" className="w-full flex flex-col">
					<div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between">
						<AnimatedText text="My Latest Work" textStyle="h2 mb-[30px]" />
						<TabsList className="max-w-max h-full mb-[30px] ">
							{tabData.map((item, index) => (
								<TabsTrigger
									key={index}
									value={item.category}
									className="capitalize w-[120px]"
									onClick={() => setTabValue(item.category)}
								>
									{item.category}
								</TabsTrigger>
							))}
						</TabsList>
					</div>
					<TabsContent value={tabValue} className="w-full">
						<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
							<AnimatePresence>
								{filiteredWork.slice(0, visableItems).map((item, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3 }}
									>
										<WorkItem {...item} />
									</motion.div>
								))}
							</AnimatePresence>
						</div>
						{visableItems < filiteredWork.length && (
							<div className="flex justify-center mt-12">
								<button onClick={loadMoreItems} className="btn btn-accent">
									Load More
								</button>
							</div>
						)}
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};

export default Work;
