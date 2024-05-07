import Pill from "@/components/preview/common/Pill";
import Section from "@/components/preview/common/SectionStyle";
import useResumeContext from "@/hooks/useResumeContext";
import { For, Show } from "solid-js";

export default function SkillPreview(props: { show: boolean }) {
	const { store } = useResumeContext();

	return (
		<Show when={props.show}>
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
		</Show>
	);
}
