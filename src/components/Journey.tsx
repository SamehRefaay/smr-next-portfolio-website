import React from 'react';
import AnimatedText from './AnimatedText';

// components
import Cards from './cards/Cards';

const Journey = () => {
	return (
		<section id="journey">
			<div className="container mx-auto">
				<AnimatedText
					text="My Professional Journey"
					textStyle="h2 mb-[30px] text-center"
				/>
				<Cards />
			</div>
		</section>
	);
};

export default Journey;
