import AwardForm from "@/components/form/AwardForm";
import CertificateForm from "@/components/form/CertificateForm";
import EducationForm from "@/components/form/EducationForm";
import InterestForm from "@/components/form/InterestForm";
import LanguageForm from "@/components/form/LanguageForm";
import ProfileForm from "@/components/form/ProfileForm";
import ProjectForm from "@/components/form/ProjectForm";
import PublicationForm from "@/components/form/PublicationForm";
import ReferenceForm from "@/components/form/ReferenceForm";
import SkillForm from "@/components/form/SkillForm";
import VolunteerForm from "@/components/form/VolunteerForm";
import WorkForm from "@/components/form/WorkForm";
import TrashIcon from "@/icons/TrashIcon";
import { For, Show, createSignal, type JSXElement } from "solid-js";

interface Props {
	componentName: string;
	formID: string;
	legend: string;
}

interface CardProps {
	children: JSXElement;
	delete(id: number): void;
	key: number;
}

const FORM = {
	AwardForm,
	CertificateForm,
	EducationForm,
	InterestForm,
	LanguageForm,
	ProfileForm,
	ProjectForm,
	PublicationForm,
	ReferenceForm,
	SkillForm,
	WorkForm,
	VolunteerForm,
};

function Card(props: CardProps) {
	return (
		<div class="border p-3 flex flex-col rounded-md border-black">
			<h1>{`ID: ${props.key}`}</h1>
			<button
				class="w-fit self-end"
				type="button"
				onClick={() => props.delete(props.key)}
			>
				<TrashIcon size={18} />
			</button>
			{props.children}
		</div>
	);
}

export default function ListCards(props: Props) {
	const Form: () => JSXElement | null = FORM[props.componentName];

	const [elem, setElem] = createSignal<number[]>([]);

	function createCard() {
		setElem([...elem(), 0]);
	}

	function deleteCard(id: number) {
		setElem(elem().toSpliced(id, 1));
	}

	return (
		<Show when={Form}>
			<form id={props.formID} name={props.formID}>
				<legend>{props.legend}</legend>
				<For each={elem()}>
					{(comp, index) => (
						<Card key={index()} delete={deleteCard}>
							<Form />
						</Card>
					)}
				</For>
				<button
					class="border border-black p-1 rounded-md"
					type="button"
					onClick={createCard}
				>
					Add
				</button>
			</form>
		</Show>
	);
}