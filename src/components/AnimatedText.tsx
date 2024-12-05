'use client';
import { animate, motion } from 'framer-motion';

const letterAnimation: any = {
	initial: {
		y: '100%',
		opacity: 0,
	},
	animate: (i: any) => ({
		y: 0,
		opacity: 1,
		transition: { duration: 0.3, ease: [0.2, 0, 0.1, 1], delay: i[0] },
	}),
};

const getLetter = (name: string) => {
	let letters: any = [];
	if (name) {
		name.split('').map((letter, index) => {
			return letters.push(
				<motion.span
					key={index}
					variants={letterAnimation}
					initial="initial"
					whileInView="animate"
					custom={[index * 0.02, (name.length - index) * 0.01]}
				>
					{letter}
				</motion.span>
			);
		});
	}

	return letters;
};

const AnimatedText = ({
	text,
	textStyle,
}: {
	text: string;
	textStyle: string;
}) => {
	return <div className={`${textStyle}`}>{getLetter(text)}</div>;
};

export default AnimatedText;
