import type { JSXElement } from "solid-js";

export default function Section(props: {
	title?: string;
	children: JSXElement;
}) {
	return (
		<section class="mb-6 mx-auto">
			<h2 class="text-xl font-bold mb-2">{props.title}</h2>
			{props.children}
		</section>
	);
}
