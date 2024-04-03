import placeholder from "@/resources/resumePlaceholder";
import type { Profile } from "@/types";
import { createSignal, onMount } from "solid-js";
const { basics } = placeholder;
const { profiles } = basics;

interface Props {
	key: number;
}

export default function ProfileForm(props: Props) {
	let field: HTMLFieldSetElement;
	const [data, setData] = createSignal<Profile>();

	onMount(() => {
		field.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
		});
	});

	return (
		<fieldset
			ref={field}
			class="flex flex-col gap-3 border-black border p-3 rounded-md"
		>
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
