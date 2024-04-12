import useResumeContext from "@/hooks/useResumeContext";
import placeholder from "@/resources/resumePlaceholder";
import type { FormProps, Profile } from "@/types";
import { createSignal, onMount } from "solid-js";
const { basics } = placeholder;
const { profiles } = basics;

export default function ProfileForm(props: FormProps) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Profile>();
	const { setStore } = useResumeContext();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("basics", "profiles", props.key, data());
		});
	});

	return (
		<fieldset ref={field}>
			<label for="network">
				Network
				<input
					placeholder={profiles[0].network}
					id="network"
					name="network"
					type="text"
				/>
			</label>
			<label for="username">
				Username
				<input
					placeholder={profiles[0].username}
					id="username"
					name="username"
					type="text"
				/>
			</label>
			<label for="url">
				Url
				<input placeholder={profiles[0].url} id="url" name="url" type="url" />
			</label>
		</fieldset>
	);
}
