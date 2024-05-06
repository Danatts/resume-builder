import Pill from "@/components/preview/common/Pill";
import Section from "@/components/preview/common/SectionStyle";
import useResumeContext from "@/hooks/useResumeContext";
import { For } from "solid-js";

export default function WorkPreview() {
	const { store } = useResumeContext();

	return (
		<Section title="Skills">
			<ul class="flex flex-wrap gap-2 justify-stretch">
				<For each={store.skills}>
					{(s) => (
						<li>
							<Pill>{`${s.name}${
								// biome-ignore lint/style/useTemplate: <explanation>
								s.level ? " - " + s.level : ""
							}`}</Pill>
						</li>
					)}
				</For>
			</ul>
		</Section>
	);
}
