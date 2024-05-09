import useResumeContext from "@/hooks/useResumeContext";
import placeholder from "@/resources/resumePlaceholder";
import type { FormProps, Publication } from "@/types";
import { createSignal, onMount } from "solid-js";
const { publications } = placeholder;

export default function PublicationForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Publication>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("publications", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="name">
				Name
				<input
					placeholder={publications[0].name}
					id="name"
					name="name"
					type="text"
				/>
			</label>
			<label for="publisher">
				Publisher
				<input
					placeholder={publications[0].publisher}
					id="publisher"
					name="publisher"
					type="text"
				/>
			</label>
			<label for="releaseDate">
				Release Date
				<input id="releaseDate" name="releaseDate" type="date" />
			</label>
			<label for="url">
				Url
				<input
					id="url"
					name="url"
					type="url"
					placeholder={publications[0].url}
				/>
			</label>
			<label for="summary">
				Summary
				<textarea
					id="summary"
					name="summary"
					placeholder={publications[0].summary}
				/>
			</label>
		</fieldset>
	);
}
