import Image from 'next/image';
import { workData } from './Work';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const WorkItem = ({ href, category, img, title }: workData) => {
	return (
		<Link href={href} target="_blank" className="group">
			<div className="relative overflow-hidden w-full h-[300px] mb-6 p-8 rounded-[30px] flex justify-center items-center bg-[#f4f4f4]">
				<Badge className="bg-primary text-base absolute top-6 left-6 capitalize z-40">
					{category}
				</Badge>
				<Image
					src={img}
					alt=""
					fill
					priority
					quality={100}
					className="object-cover group-hover:scale-105 transition duration-500"
				/>
			</div>
			<div className="flex justify-center items-center">
				<div className="flex-1">
					<h3 className="h3">{title}</h3>
				</div>
				<button className="bg-accent text-white w-[48px] h-[48px] flex justify-center items-center rounded-full -rotate-45  group-hover:rotate-0 duration-500">
					<FiArrowRight className="text-2xl" />
				</button>
			</div>
		</Link>
	);
};

export default WorkItem;
