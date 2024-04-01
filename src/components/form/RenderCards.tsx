import { createSignal } from "solid-js";
import ProfileCard from "@/components/form/ProfileCard";
import WorkCard from "@/components/form/WorkCard";
import VolunteerCard from "@/components/form/VolunteerCard";
import type { CardType } from "@/types";

interface Props {
	componentName: string;
	formID: string;
	legend: string;
}

const CARD: CardType = {
	ProfileCard,
	WorkCard,
	VolunteerCard,
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
		<form id={props.formID} name={props.formID}>
			<legend>{props.legend}</legend>
			{renderCards()}
			<button type="button" onClick={createCard}>
				Add
			</button>
			<button type="button" onClick={deleteCard}>
				Remove
			</button>
		</form>
	);
}
