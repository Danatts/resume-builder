import placeholder from "@/resources/resumePlaceholder";
const { skills } = placeholder;

export default function SkillForm() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
			<label for="name">
				Name
				<input placeholder={skills[0].name} id="name" name="name" type="text" />
			</label>
			<label for="level">
				Level
				<input
					placeholder={skills[0].level}
					id="level"
					name="level"
					type="text"
				/>
			</label>
			<label for="keywords">
				Keywords
				<input
					placeholder={skills[0].keywords[0]}
					id="keywords"
					name="keywords"
					type="text"
				/>
			</label>
		</div>
	);
}
