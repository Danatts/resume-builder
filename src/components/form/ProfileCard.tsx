import placeholder from "@/resources/resumePlaceholder";
const { basics } = placeholder;
const { profiles } = basics;

export default function ProfileCard() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
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
				User name
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
		</div>
	);
}
