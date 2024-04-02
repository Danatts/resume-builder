import AwardCard from "@/components/form/AwardCard";
import CertificateCard from "@/components/form/CertificateCard";
import EducationCard from "@/components/form/EducationCard";
import InterestCard from "@/components/form/InterestCard";
import LanguageCard from "@/components/form/LanguageCard";
import ProfileCard from "@/components/form/ProfileCard";
import ProjectCard from "@/components/form/ProjectCard";
import PublicationCard from "@/components/form/PublicationCard";
import ReferenceCard from "@/components/form/ReferenceCard";
import SkillCard from "@/components/form/SkillCard";
import VolunteerCard from "@/components/form/VolunteerCard";
import WorkCard from "@/components/form/WorkCard";
import { For, Show, createSignal } from "solid-js";

interface Props {
	componentName: string;
	formID: string;
	legend: string;
}

const CARD = {
	AwardCard,
	CertificateCard,
	EducationCard,
	InterestCard,
	LanguageCard,
	ProfileCard,
	ProjectCard,
	PublicationCard,
	ReferenceCard,
	SkillCard,
	WorkCard,
	VolunteerCard,
};

export default function RenderCards(props: Props) {
	const Card = CARD[props.componentName];
	const [elem, setElem] = createSignal<number[]>([0]);

	const createCard = () => {
		setElem([...elem(), 0]);
	};

	const deleteCard = () => {
		setElem(elem().slice(0, -1));
	};

	return (
		<Show when={Card}>
			<form id={props.formID} name={props.formID}>
				<legend>{props.legend}</legend>
				<For each={elem()}>{(_, index) => <Card key={index()} />}</For>
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
