import placeholder from "@/resources/resumePlaceholder";
const { references } = placeholder;

export default function ReferenceCard() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
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
		</div>
	);
}
