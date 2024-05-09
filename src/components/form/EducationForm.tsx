import useResumeContext from "@/hooks/useResumeContext";
import ph from "@/resources/resumePlaceholder";
import type { Education, FormProps } from "@/types";
import { createSignal } from "solid-js";

export default function EducationForm(props: FormProps) {
	const [data, setData] = createSignal<Education>();
	const { store, setStore } = useResumeContext();

	function handleInput(e: Event) {
		e.preventDefault();
		const { name, value } = e.target as HTMLInputElement;
		setData({ ...data(), [name]: value });
		setStore("education", props.key, data());
	}

	return (
		<fieldset onInput={handleInput}>
			<label for="area">
				Area
				<input
					id="area"
					name="area"
					type="text"
					placeholder={ph.education[0].area}
					value={
						store?.education[props.key]?.area
							? store.education[props.key].area
							: null
					}
				/>
			</label>
			<label for="institution">
				Institution
				<input
					id="institution"
					name="institution"
					type="text"
					placeholder={ph.education[0].institution}
					value={
						store?.education[props.key]?.institution
							? store.education[props.key].institution
							: null
					}
				/>
			</label>
			<label for="url">
				Url
				<input
					id="url"
					name="url"
					type="url"
					placeholder={ph.education[0].url}
					value={
						store?.education[props.key]?.url
							? store.education[props.key].url
							: null
					}
				/>
			</label>
			<label for="startDate">
				Starting date
				<input
					id="startDate"
					name="startDate"
					type="date"
					value={
						store?.education[props.key]?.startDate
							? store.education[props.key].startDate
							: null
					}
				/>
			</label>
			<label for="endDate">
				Ending date
				<input
					id="endDate"
					name="endDate"
					type="date"
					value={
						store?.education[props.key]?.endDate
							? store.education[props.key].endDate
							: null
					}
				/>
			</label>
			{/*
			<label for="studyType">
				Type
				<input
					id="studyType"
					name="studyType"
					type="text"
					placeholder={education[0].studyType}
				/>
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
      */}
		</fieldset>
	);
}
