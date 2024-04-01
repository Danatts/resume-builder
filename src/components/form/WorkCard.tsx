import resumePlaceholder from "@/resources/resumePlaceholder";
const { work } = resumePlaceholder;

export default function WorkCard() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
			<label for="name">
				Company name
				<input id="name" name="name" type="text" placeholder={work[0].name} />
			</label>
			<label for="position">
				Position
				<input
					id="position"
					name="position"
					type="text"
					placeholder={work[0].position}
				/>
			</label>
			<label for="url">
				Company Url
				<input id="url" name="url" type="url" placeholder={work[0].url} />
			</label>
			<label for="startDate">
				Starting date
				<input id="startDate" name="startDate" type="date" />
			</label>
			<label for="endDate">
				Ending date
				<input id="endDate" name="endDate" type="date" />
			</label>
			<label for="summary">
				Summary
				<textarea id="summary" name="summary" placeholder={work[0].summary} />
			</label>
			<label for="highlights">
				Highlights
				<input
					id="highlights"
					name="highlights"
					type="text"
					placeholder={work[0].highlights[0]}
				/>
			</label>
		</div>
	);
}
