import useResumeContext from "@/hooks/useResumeContext";
import resumePlaceholder from "@/resources/resumePlaceholder";
import type { FormProps, Volunteer } from "@/types";
import { createSignal, onMount } from "solid-js";
const { volunteer } = resumePlaceholder;

export default function VolunteerForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Volunteer>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("volunteer", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="organization">
				Organization
				<input
					id="organization"
					name="organization"
					type="text"
					placeholder={volunteer[0].organization}
				/>
			</label>
			<label for="position">
				Position
				<input
					id="position"
					name="position"
					type="text"
					placeholder={volunteer[0].position}
				/>
			</label>
			<label for="url">
				Url
				<input id="url" name="url" type="url" placeholder={volunteer[0].url} />
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
				<textarea
					id="summary"
					name="summary"
					placeholder={volunteer[0].summary}
				/>
			</label>
			<label for="highlights">
				Highlights
				<input
					id="highlights"
					name="highlights"
					type="text"
					placeholder={volunteer[0].highlights[0]}
				/>
			</label>
		</fieldset>
	);
}
