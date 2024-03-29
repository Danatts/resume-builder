import Section from "@/components/preview/Section";
import useResumeContext from "@/hooks/useResumeContext";
import { Show, createEffect, createSignal } from "solid-js";

export default function SummaryPreview() {
	const title = "About me";
	const { store } = useResumeContext();
	const [notNull, setNotNull] = createSignal<boolean>(false);

	createEffect(() => {
		if (store.basics.summary.trim() === "") {
			setNotNull(false);
		} else {
			setNotNull(true);
		}
	});

	return (
		<Section title={title} notNull={notNull()}>
			<Show when={store?.basics?.summary}>
				<p class="text-sm text-neutral-500 text-pretty">
					{store?.basics?.summary}
				</p>
			</Show>
		</Section>
	);
}
