import { createSignal, Show } from "solid-js";
import EducationCard from "./EducationCard";
import ProfileCard from "@/components/form/ProfileCard";
import VolunteerCard from "@/components/form/VolunteerCard";
import WorkCard from "@/components/form/WorkCard";
import AwardCard from "@/components/form/AwardCard";

interface Props {
	componentName: string;
	formID: string;
	legend: string;
}

const CARD = {
	ProfileCard,
	WorkCard,
	VolunteerCard,
	EducationCard,
	AwardCard,
};

export default function RenderCards(props: Props) {
	const Card = CARD[props.componentName];
	const [elem, setElem] = createSignal<number>(1);

	const renderCards = () => {
		const children = [];
		for (let i = 0; i < elem(); i++) {
			children.push(<Card />);
		}
		return children;
	};

	const createCard = () => {
		setElem((c) => c + 1);
	};

	const deleteCard = () => {
		if (elem() > 0) setElem((c) => c - 1);
	};

	return (
		<Show when={Card}>
			<form id={props.formID} name={props.formID}>
				<legend>{props.legend}</legend>
				{renderCards()}
			</form>
			<button
				class="border border-solid border-black p-1 rounded-md"
				type="button"
				onClick={createCard}
			>
				Add
			</button>
			<button
				class="border border-solid border-black p-1 rounded-md"
				type="button"
				onClick={deleteCard}
			>
				Remove
			</button>
		</Show>
	);
}
