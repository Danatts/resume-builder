import useResumeContext from "@/hooks/useResumeContext";
import placeholder from "@/resources/resumePlaceholder";
import type { FormProps, Language } from "@/types";
import { createSignal, onMount } from "solid-js";
const { languages } = placeholder;

export default function LanguageForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Language>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("languages", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="language">
				Language
				<input
					placeholder={languages[0].language}
					id="language"
					name="language"
					type="text"
				/>
			</label>
			<label for="fluency">
				Fluency
				<input
					placeholder={languages[0].fluency}
					id="fluency"
					name="fluency"
					type="text"
				/>
			</label>
		</fieldset>
	);
}
