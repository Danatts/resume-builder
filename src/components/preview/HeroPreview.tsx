import Section from "@/components/preview/Section";
import useResumeContext from "@/hooks/useResumeContext";
import { Show, onMount } from "solid-js";

export default function BasicsPreview() {
	const { store, setStore } = useResumeContext();

	const $basics = document.querySelector("#basics");
	$basics.addEventListener("input", (e) => {
		const { name, value } = e.target as HTMLInputElement;
		setStore("basics", { ...store.basics, [name]: value });
		console.log(store.basics);
	});

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
				</div>
				<figure class="w-36">
					<image class="hidden rounded-md" id="imagePreview" />
				</figure>
			</div>
		</Section>
	);
}
