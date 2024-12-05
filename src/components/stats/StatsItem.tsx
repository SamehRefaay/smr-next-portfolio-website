import React from 'react';
import CountUp from 'react-countup';

interface Props {
	endCountNum: number;
	endCountText: string;
	text: string;
}

const StatsItem = ({ endCountNum, endCountText, text }: Props) => {
	return (
		<div className="flex xl:flex-1 flex-col items-center text-center">
			<div className="text-primary font-primary text-4xl xl:text-5xl leading-0">
				<CountUp end={endCountNum} delay={1} duration={4} />
				<span>{endCountText}</span>
			</div>
			<p className="text-sm">{text}</p>
		</div>
	);
};

export default StatsItem;
