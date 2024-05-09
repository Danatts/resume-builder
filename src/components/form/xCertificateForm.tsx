import useResumeContext from "@/hooks/useResumeContext";
import placeholder from "@/resources/resumePlaceholder";
import type { Certificate, FormProps } from "@/types";
import { createSignal, onMount } from "solid-js";
const { certificates } = placeholder;

export default function CertificateForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Certificate>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("certificates", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="name">
				Name
				<input
					placeholder={certificates[0].name}
					id="name"
					name="name"
					type="text"
				/>
			</label>
			<label for="date">
				Date
				<input id="date" name="date" type="date" />
			</label>
			<label for="issuer">
				Issuer
				<input
					placeholder={certificates[0].issuer}
					id="issuer"
					name="issuer"
					type="text"
				/>
			</label>
			<label for="url">
				Url
				<input
					id="url"
					name="url"
					type="url"
					placeholder={certificates[0].url}
				/>
			</label>
		</fieldset>
	);
}
