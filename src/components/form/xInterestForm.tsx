import useResumeContext from "@/hooks/useResumeContext";
import placeholder from "@/resources/resumePlaceholder";
import type { FormProps, Interest } from "@/types";
import { createSignal, onMount } from "solid-js";
const { interests } = placeholder;

export default function InterestForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Interest>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("interests", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="name">
				Name
				<input
					placeholder={interests[0].name}
					id="name"
					name="name"
					type="text"
				/>
			</label>
			<label for="keywords">
				Keywords
				<input
					placeholder={interests[0].keywords[0]}
					id="keywords"
					name="keywords"
					type="text"
				/>
			</label>
		</fieldset>
	);
}
