import useResumeContext from "@/hooks/useResumeContext";
import ph from "@/resources/resumePlaceholder";
import type { FormProps, Language } from "@/types";
import { createSignal } from "solid-js";

export default function LanguageForm(props: FormProps) {
	const [data, setData] = createSignal<Language>();
	const { store, setStore } = useResumeContext();

	function handleInput(e: Event) {
		e.preventDefault();
		const { name, value } = e.target as HTMLInputElement;
		setData({ ...data(), [name]: value });
		setStore("languages", props.key, data());
	}

	return (
		<fieldset onInput={handleInput}>
			<label for={`language${props.key}`}>
				Language
				<input
					placeholder={ph.languages[0].language}
					id={`language${props.key}`}
					name="language"
					type="text"
					value={
						store?.languages[props.key]?.language
							? store.languages[props.key].language
							: null
					}
				/>
			</label>
			<label for={`fluency${props.key}`}>
				Fluency
				<input
					placeholder={ph.languages[0].fluency}
					id={`fluency${props.key}`}
					name="fluency"
					type="text"
					value={
						store?.languages[props.key]?.fluency
							? store.languages[props.key].fluency
							: null
					}
				/>
			</label>
		</fieldset>
	);
}
