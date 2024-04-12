import useResumeContext from "@/hooks/useResumeContext";
import placeholder from "@/resources/resumePlaceholder";
import type { Award, FormProps } from "@/types";
import { createSignal, onMount } from "solid-js";
const { awards } = placeholder;

export default function AwardForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Award>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("awards", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="title">
				Title
				<input
					placeholder={awards[0].title}
					id="title"
					name="title"
					type="text"
				/>
			</label>
			<label for="date">
				Date
				<input id="date" name="date" type="date" />
			</label>
			<label for="awarder">
				Awarder
				<input
					placeholder={awards[0].awarder}
					id="awarder"
					name="awarder"
					type="text"
				/>
			</label>
			<label for="summary">
				Summary
				<textarea id="summary" name="summary" placeholder={awards[0].summary} />
			</label>
		</fieldset>
	);
}
