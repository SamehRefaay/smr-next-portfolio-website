import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

interface Props {
	containerStyles: string;
	iconStyles: string;
}

const socials = [
	{
		icon: <FaFacebook />,
		path: 'https://www.facebook.com/Sameh.refaay89/',
	},
	{
		icon: <FaTwitter />,
		path: 'https://x.com/SamehRefaay',
	},
	{
		icon: <RiInstagramFill />,
		path: 'https://www.instagram.com/samehrefaay89/',
	},
	{
		icon: <FaLinkedin />,
		path: 'https://www.linkedin.com/in/samehrefaay/',
	},
	{
		icon: <FaGithub />,
		path: 'https://github.com/SamehRefaay',
	},
];

const Socials = ({ containerStyles, iconStyles }: Props) => {
	return (
		<div className={containerStyles}>
			{socials.map((social, index) => (
				<Link
					href={social.path}
					target="_blank"
					key={index}
					className={iconStyles}
				>
					<span>{social.icon}</span>
				</Link>
			))}
		</div>
	);
};

export default Socials;
