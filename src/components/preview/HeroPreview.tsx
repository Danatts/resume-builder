import Contact from "@/components/preview/common/Contact";
import Section from "@/components/preview/common/SectionStyle";
import useResumeContext from "@/hooks/useResumeContext";
import { Show, onMount } from "solid-js";

export default function BasicsPreview() {
	const { store } = useResumeContext();

	onMount(() => {
		const $image = document.querySelector("#image");
		const $imagePreview =
			document.querySelector<HTMLMediaElement>("#imagePreview");
		$image.addEventListener("change", (e) => {
			$imagePreview.classList.remove("hidden");
			$imagePreview.src = URL.createObjectURL(
				(e.target as HTMLInputElement).files[0],
			);
		});
	});

	return (
		<Section>
			<div class="flex flex-row gap-2 justify-between items-center">
				<div class="flex flex-col gap-2">
					<Show when={store?.basics?.name}>
						<h1 class="font-bold text-2xl text-left">{store?.basics?.name}</h1>
					</Show>
					<Show when={store.basics?.label}>
						<h2 class="font-medium text-base text-left text-neutral-500">
							{store.basics?.label}
						</h2>
					</Show>
					<Show when={store.basics?.email}>
						<Contact text={store.basics?.email} network={"Mail"} />
					</Show>
					<Show when={store.basics?.phone}>
						<Contact text={store.basics?.phone} network={"Phone"} />{" "}
					</Show>
					<Show when={store.basics?.location.city}>
						<Contact
							text={`${store.basics?.location?.city}, ${store.basics?.location?.region}`}
							network={"Location"}
						/>
					</Show>
				</div>
				<figure class="w-24">
					<image class="hidden rounded-md" id="imagePreview" />
				</figure>
			</div>
		</Section>
	);
}
