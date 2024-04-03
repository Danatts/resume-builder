import resumePlaceholder from "@/resources/resumePlaceholder";
const { projects } = resumePlaceholder;

export default function ProjectForm() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
			<label for="name">
				Name
				<input
					id="name"
					name="name"
					type="text"
					placeholder={projects[0].name}
				/>
			</label>
			<label for="url">
				Url
				<input id="url" name="url" type="url" placeholder={projects[0].url} />
			</label>
			<label for="startDate">
				Starting date
				<input id="startDate" name="startDate" type="date" />
			</label>
			<label for="endDate">
				Ending date
				<input id="endDate" name="endDate" type="date" />
			</label>
			<label for="description">
				Description
				<textarea
					id="description"
					name="description"
					placeholder={projects[0].description}
				/>
			</label>
			<label for="highlights">
				Highlights
				<input
					id="highlights"
					name="highlights"
					type="text"
					placeholder={projects[0].highlights[0]}
				/>
			</label>
		</div>
	);
}
