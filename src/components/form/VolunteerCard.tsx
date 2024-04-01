import resumePlaceholder from "@/resources/resumePlaceholder";
const { volunteer } = resumePlaceholder;

export default function VolunteerCard() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
			<label for="organization">
				Organization name
				<input
					id="organization"
					name="organization"
					type="text"
					placeholder={volunteer[0].organization}
				/>
			</label>
			<label for="position">
				Position
				<input
					id="position"
					name="position"
					type="text"
					placeholder={volunteer[0].position}
				/>
			</label>
			<label for="url">
				Organization Url
				<input id="url" name="url" type="url" placeholder={volunteer[0].url} />
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
				<textarea
					id="summary"
					name="summary"
					placeholder={volunteer[0].summary}
				/>
			</label>
			<label for="highlights">
				Highlights
				<input
					id="highlights"
					name="highlights"
					type="text"
					placeholder={volunteer[0].highlights[0]}
				/>
			</label>
		</div>
	);
}
