import Link from 'next/link';
import React from 'react';

interface Props {
	light?: boolean;
}

const Logo = ({ light = false }: Props) => {
	const colorClass = light ? 'text-white' : 'text-primary';
	return (
		<Link href="/" className="font-primary text-2xl tracking-[4px]">
			<span className={colorClass}>Sameh Refaay</span>
		</Link>
	);
};

export default Logo;
