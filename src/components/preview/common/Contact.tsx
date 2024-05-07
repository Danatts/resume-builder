import Github from "@/icons/GithubIcon";
import Globe from "@/icons/GlobeIcon";
import Linkedin from "@/icons/LinkedinIcon";
import Location from "@/icons/LocationIcon";
import Mail from "@/icons/MailIcon";
import Phone from "@/icons/PhoneIcon";
import type { SocialIcon } from "@/types.d.ts";
import { type JSXElement, Show } from "solid-js";

const SOCIAL_ICONS: SocialIcon = {
	Github,
	Linkedin,
	Mail,
	Location,
	Phone,
	Globe,
};

export default function Contact(props: {
	network: string;
	children: JSXElement;
	url?: string;
}) {
	const Icon = SOCIAL_ICONS[props.network];
	const ICON_SIZE = 20;

	return (
		<span class="text-sm flex gap-1">
			<Icon size={ICON_SIZE} />
			<Show when={props.url} fallback={props.children}>
				<a href={props.url} target="_blank" rel="noreferrer">
					{props.children}
				</a>
			</Show>
		</span>
	);
}
