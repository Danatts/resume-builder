import Github from "@/icons/GithubIcon.jsx";
import Linkedin from "@/icons/LinkedinIcon.jsx";
import Location from "@/icons/LocationIcon.jsx";
import Mail from "@/icons/MailIcon.jsx";
import Phone from "@/icons/PhoneIcon.jsx";
import type { SocialIcon } from "@/types.d.ts";

const SOCIAL_ICONS: SocialIcon = {
	Github,
	Linkedin,
	Mail,
	Location,
	Phone,
};

export default function Contact(props: {
	network: string;
	text: string;
	url?: string;
}) {
	const Icon = SOCIAL_ICONS[props.network];
	const ICON_SIZE = 20;

	return (
		<span class="text-sm flex gap-1">
			<Icon size={ICON_SIZE} />
			{props.url && (
				<a href={props.url} target="_blank" rel="noreferrer">
					{props.text}
				</a>
			)}
			{!props.url && props.text}
		</span>
	);
}
