import useResumeContext from "@/hooks/useResumeContext";
import placeholder from "@/resources/resumePlaceholder";
import type { FormProps, Reference } from "@/types";
import { createSignal, onMount } from "solid-js";
const { references } = placeholder;

export default function ReferenceForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Reference>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("references", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="name">
				Name
				<input
					placeholder={references[0].name}
					id="name"
					name="name"
					type="text"
				/>
			</label>
			<label for="reference">
				Reference
				<input
					placeholder={references[0].reference}
					id="reference"
					name="reference"
					type="text"
				/>
			</label>
		</fieldset>
	);
}
