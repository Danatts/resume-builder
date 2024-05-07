import Card from "@/components/preview/common/Card";
import Section from "@/components/preview/common/SectionStyle";
import useResumeContext from "@/hooks/useResumeContext";
import { For, Show } from "solid-js";

export default function EducationPreview(props: { show: boolean }) {
	const { store } = useResumeContext();

	return (
		<Show when={props.show}>
			<Section title={"Education"}>
				<ul class="flex flex-col gap-4">
					<For each={store.education}>
						{(e) => (
							<li>
								<Card
									title={e.area}
									subtitle={e.institution}
									subUrl={e.url}
									start={e.startDate}
									end={e.endDate}
								/>
							</li>
						)}
					</For>
				</ul>
			</Section>
		</Show>
	);
}
