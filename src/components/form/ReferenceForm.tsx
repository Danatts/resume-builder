import placeholder from "@/resources/resumePlaceholder";
const { references } = placeholder;

export default function ReferenceForm() {
	return (
		<fieldset>
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
