'use client';
import { Link as ScrollLink } from 'react-scroll';

interface Props {
	containerStyles: string;
	listStyles: string;
	linkStyles: string;
	spy: boolean;
}

const links = [
	{
		name: 'home',
	},
	{
		name: 'about',
	},
	{
		name: 'journey',
	},
	{
		name: 'work',
	},
	{
		name: 'contact',
	},
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }: Props) => {
	return (
		<nav className={containerStyles}>
			<ul className={listStyles}>
				{links.map((link, index) => (
					<ScrollLink
						key={index}
						to={link.name}
						activeClass="active"
						spy={spy}
						smooth
						className={linkStyles}
					>
						{link.name}
					</ScrollLink>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
