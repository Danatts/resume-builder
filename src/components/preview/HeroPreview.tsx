import Contact from "@/components/preview/common/Contact";
import Section from "@/components/preview/common/SectionStyle";
import Text from "@/components/preview/common/TextStyle";
import useResumeContext from "@/hooks/useResumeContext";
import { Show } from "solid-js";

export default function BasicsPreview(props: { show: boolean }) {
	const { store } = useResumeContext();
	return (
		<Show when={props.show}>
			<Section>
				<div class="flex flex-row gap-2 justify-between items-center">
					<div class="flex flex-col gap-2">
						<Show when={store?.basics?.name}>
							<h1 class="font-bold text-2xl text-left">
								{store?.basics?.name}
							</h1>
						</Show>
						<Show when={store.basics?.label}>
							<h2 class="font-medium text-base text-left text-neutral-500">
								{store.basics?.label}
							</h2>
						</Show>
						<Show when={store.basics?.email}>
							<Contact network={"Mail"}>{store.basics?.email}</Contact>
						</Show>
						<Show when={store.basics?.phone}>
							<Contact network={"Phone"}>{store.basics?.phone}</Contact>
						</Show>
						<Show when={store.basics?.url}>
							<Contact network={"Globe"} url={store.basics.url}>
								<p>Website</p>
							</Contact>
						</Show>
						<Show when={store.basics?.city || store.basics.region}>
							<Contact network={"Location"}>
								<Show when={store.basics.city}>
									<span>{store.basics.city}</span>
								</Show>
								<Show when={store.basics.city && store.basics.region}>
									<span>-</span>
								</Show>
								<Show when={store.basics.region}>
									<span>{store.basics.region}</span>
								</Show>
							</Contact>
						</Show>
					</div>
					<figure class="w-24">
						<image class="hidden rounded-md" id="imagePreview" />
					</figure>
				</div>
				<Text>{store.basics.summary}</Text>
			</Section>
		</Show>
	);
}
