import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

interface Props {
	containerStyles: string;
	iconStyles: string;
}

const socials = [
	{
		icon: <FaFacebook />,
		path: '',
	},
	{
		icon: <FaTwitter />,
		path: '',
	},
	{
		icon: <RiInstagramFill />,
		path: '',
	},
	{
		icon: <FaLinkedin />,
		path: '',
	},
];

const Socials = ({ containerStyles, iconStyles }: Props) => {
	return (
		<div className={containerStyles}>
			{socials.map((social, index) => (
				<Link key={index} href={social.path} className={iconStyles}>
					<span>{social.icon}</span>
				</Link>
			))}
		</div>
	);
};

export default Socials;
