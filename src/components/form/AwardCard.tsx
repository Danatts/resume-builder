import placeholder from "@/resources/resumePlaceholder";
const { awards } = placeholder;

export default function AwardCard() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
			<label for="title">
				Title
				<input
					placeholder={awards[0].title}
					id="title"
					name="title"
					type="text"
				/>
			</label>
			<label for="date">
				Date
				<input id="date" name="date" type="date" />
			</label>
			<label for="awarder">
				Awarder
				<input
					placeholder={awards[0].awarder}
					id="awarder"
					name="awarder"
					type="text"
				/>
			</label>
			<label for="summary">
				Summary
				<textarea id="summary" name="summary" placeholder={awards[0].summary} />
			</label>
		</div>
	);
}
