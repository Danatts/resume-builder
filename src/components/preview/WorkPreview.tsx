import Card from "@/components/preview/common/Card";
import Section from "@/components/preview/common/SectionStyle";
import Text from "@/components/preview/common/TextStyle";
import useResumeContext from "@/hooks/useResumeContext";
import { For } from "solid-js";

export default function WorkPreview() {
	const { store } = useResumeContext();

	return (
		<Section title="Experience">
			<ul class="flex flex-col gap-4">
				<For each={store.work}>
					{(w) => (
						<li>
							<Card
								title={w.position}
								subtitle={w.name}
								subUrl={w.url}
								start={w.startDate}
								end={w.endDate}
							>
								<Text>{w.summary}</Text>
							</Card>
						</li>
					)}
				</For>
			</ul>
		</Section>
	);
}
