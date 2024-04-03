import placeholder from "@/resources/resumePlaceholder";
const { interests } = placeholder;

export default function InterestForm() {
	return (
		<fieldset>
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
