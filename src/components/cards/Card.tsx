import Image from 'next/image';
import { ReactNode } from 'react';

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
						<p className="text-base">
							{type !== 'experience' && type !== 'education' ? null : duration}
						</p>
					</div>
					<div className="flex flex-1 justify-center xl:justify-start items-center md:py-8 md:px-16">
						<div className="flex flex-col xl:flex-row gap-4 xl:gap-10 justify-center xl:justify-start items-center text-center xl:text-start px-4 xl:px-0">
							{type === 'skill' ? (
								<div className="w-max h-full xl:w-[300px] relative flex justify-center items-center">
									<div className="text-5xl text-primary/90">{icon}</div>
								</div>
							) : (
								<div className="relative w-[300px] h-[70px] xl:h-[90px]">
									{logoUrl && (
										<Image
											src={logoUrl}
											alt=""
											fill
											className="object-contain"
										/>
									)}
								</div>
							)}
							<div className="w-full xl:border-l xl:border-secondary/10 xl:px-12">
								<h3 className="hidden xl:flex h3 mb-2 xl:mb-4">
									{type === 'experience'
										? company
										: type === 'education'
										? institution
										: name}
								</h3>
								<p className="max-w-[660px] text-base">{description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
