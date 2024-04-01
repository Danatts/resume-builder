import ProfileCard from "@/components/form/ProfileCard";
import useRenderCards from "@/hooks/useRenderCards";

export default function Profiles() {
	const { createCard, deleteCard, renderCards } = useRenderCards();

	return (
		<form id="profiles" name="profiles">
			<legend>Profiles</legend>
			{renderCards(ProfileCard)}
			<button type="button" onClick={createCard}>
				Add
			</button>
			<button type="button" onClick={deleteCard}>
				Remove
			</button>
		</form>
	);
}
