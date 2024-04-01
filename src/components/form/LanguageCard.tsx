import placeholder from "@/resources/resumePlaceholder";
const { languages } = placeholder;

export default function LanguageCard() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
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
		</div>
	);
}
