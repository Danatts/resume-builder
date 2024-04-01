import WorkCard from "@/components/form/WorkCard";
import useRenderCards from "@/hooks/useRenderCards";

export default function Work() {
	const { createCard, deleteCard, renderCards } = useRenderCards();

	return (
		<form id="work" name="work">
			<legend>Work Experience</legend>
			{renderCards(WorkCard)}
			<button type="button" onClick={createCard}>
				Add
			</button>
			<button type="button" onClick={deleteCard}>
				Remove
			</button>
		</form>
	);
}
