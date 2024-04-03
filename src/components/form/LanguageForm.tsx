import placeholder from "@/resources/resumePlaceholder";
const { languages } = placeholder;

export default function LanguageForm() {
	return (
		<fieldset>
			<label for="language">
				Language
				<input
					placeholder={languages[0].language}
					id="language"
					name="language"
					type="text"
				/>
			</label>
			<label for="fluency">
				Fluency
				<input
					placeholder={languages[0].fluency}
					id="fluency"
					name="fluency"
					type="text"
				/>
			</label>
		</fieldset>
	);
}
