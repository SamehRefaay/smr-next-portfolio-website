'use client';
import { animate, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
	content: ReactNode;
	direction: string;
	duration: number;
}

const RotatingShape = ({ content, direction, duration }: Props) => {
	//define the rotation animaiton
	const rotationAnimation = {
		animate: {
			//shape will rotate 360 degree based on the direction
			rotate: direction === 'right' ? 360 : direction === 'left' ? -360 : 0,
			transition: {
				duration: duration, // the duration of the animation
				ease: 'linear', //for smooth rotation
				repeat: Infinity, // numbers of repeat
			},
		},
	};

	return (
		<motion.div variants={rotationAnimation} animate="animate">
			{content}
		</motion.div>
	);
};

export default RotatingShape;
