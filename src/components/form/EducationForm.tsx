import useResumeContext from "@/hooks/useResumeContext";
import resumePlaceholder from "@/resources/resumePlaceholder";
import type { Education, FormProps } from "@/types";
import { createSignal, onMount } from "solid-js";
const { education } = resumePlaceholder;

export default function EducationForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Education>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("education", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="institution">
				Institution
				<input
					id="institution"
					name="institution"
					type="text"
					placeholder={education[0].institution}
				/>
			</label>
			<label for="area">
				Area
				<input
					id="area"
					name="area"
					type="text"
					placeholder={education[0].area}
				/>
			</label>
			<label for="url">
				Url
				<input id="url" name="url" type="url" placeholder={education[0].url} />
			</label>
			<label for="studyType">
				Area
				<input
					id="studyType"
					name="studyType"
					type="text"
					placeholder={education[0].studyType}
				/>
			</label>
			<label for="startDate">
				Starting date
				<input id="startDate" name="startDate" type="date" />
			</label>
			<label for="endDate">
				Ending date
				<input id="endDate" name="endDate" type="date" />
			</label>
			<label for="score">
				Score
				<input
					id="score"
					name="score"
					type="text"
					placeholder={education[0].score}
				/>
			</label>
			<label for="courses">
				Courses
				<input
					id="courses"
					name="courses"
					type="text"
					placeholder={education[0].courses[0]}
				/>
			</label>
		</fieldset>
	);
}
