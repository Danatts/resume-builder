import useResumeContext from "@/hooks/useResumeContext";
import resumePlaceholder from "@/resources/resumePlaceholder";
import type { FormProps, Work } from "@/types";
import { createSignal, onMount } from "solid-js";
const { work } = resumePlaceholder;

export default function WorkForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Work>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("work", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="position">
				Position
				<input
					id="position"
					name="position"
					type="text"
					placeholder={work[0].position}
				/>
			</label>
			<label for="name">
				Company
				<input id="name" name="name" type="text" placeholder={work[0].name} />
			</label>
			<label for="url">
				Url
				<input id="url" name="url" type="url" placeholder={work[0].url} />
			</label>
			<label for="startDate">
				Starting date
				<input id="startDate" name="startDate" type="date" />
			</label>
			<label for="endDate">
				Ending date
				<input id="endDate" name="endDate" type="date" />
			</label>
			<label for="summary">
				Summary
				<textarea id="summary" name="summary" placeholder={work[0].summary} />
			</label>
      {/*
			<label for="highlights">
				Highlights
				<input
					id="highlights"
					name="highlights"
					type="text"
					placeholder={work[0].highlights[0]}
				/>
			</label>
      */}
		</fieldset>
	);
}
