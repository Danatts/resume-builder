import useResumeContext from "@/hooks/useResumeContext";
import resumePlaceholder from "@/resources/resumePlaceholder";
import type { FormProps, Project } from "@/types";
import { createSignal, onMount } from "solid-js";
const { projects } = resumePlaceholder;

export default function ProjectForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Project>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("projects", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="name">
				Name
				<input
					id="name"
					name="name"
					type="text"
					placeholder={projects[0].name}
				/>
			</label>
			<label for="url">
				Url
				<input id="url" name="url" type="url" placeholder={projects[0].url} />
			</label>
			<label for="startDate">
				Starting date
				<input id="startDate" name="startDate" type="date" />
			</label>
			<label for="endDate">
				Ending date
				<input id="endDate" name="endDate" type="date" />
			</label>
			<label for="description">
				Description
				<textarea
					id="description"
					name="description"
					placeholder={projects[0].description}
				/>
			</label>
			<label for="highlights">
				Highlights
				<input
					id="highlights"
					name="highlights"
					type="text"
					placeholder={projects[0].highlights[0]}
				/>
			</label>
		</fieldset>
	);
}
