import { div } from 'framer-motion/client';
import Image from 'next/image';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface Props {
	key: number;
	type: string;
	company?: string;
	logoUrl?: string;
	position?: string;
	description: string;
	duration?: string;
	institution?: string;
	qualification?: string;
	name?: string;
	icon?: ReactNode;
}

const Card = ({
	key,
	type,
	company,
	logoUrl,
	position,
	description,
	duration,
	institution,
	qualification,
	name,
	icon,
}: Props) => {
	return (
		<div className="w-full h-[300px] flex items-center top-12 sticky overflow-hidden">
			<div className="w-full h-[270px] border border-accent/20 bg-[#f4ffff] rounded-lg">
				<div className="flex flex-col h-full">
					<div className="w-full h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-20 rounded-t-lg">
						<div className="flex gap-2">
							<Image
								src="assets/journey/shape.svg"
								alt=""
								width={16}
								height={16}
							/>
							<h3 className="text-lg text-primary font-semibold">
								{type === 'experience'
									? position
									: type === 'education'
									? qualification
									: duration}
							</h3>
						</div>
						{duration && <p className="text-base">{duration}</p>}
					</div>
					<div></div>
				</div>
				<div className="flex flex-1 justify-center xl:justify-start items-center md:py-8 md:px-16">
					<div>
						{type === 'skill' ? (
							//render icon of skill
							<div>{icon}</div>
						) : (
							//render logo for experience and education
							<div className="relative w-[300px] h-[38px] xl:h-[44px]">
								{logoUrl && (
									<Image src={logoUrl} alt="" fill className="object-contain" />
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
