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

interface FormProps {
	key: number;
}

interface CardProps {
	children: JSXElement;
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
			<button class="w-fit self-end" type="button">
				<TrashIcon size={18} />
			</button>
			{props.children}
		</div>
	);
}

export default function ListCards(props: Props) {
	const Form: (props: FormProps) => JSXElement | null =
		FORM[props.componentName];

	const [elem, setElem] = createSignal<number[]>([0]);

	const createCard = () => {
		setElem([...elem(), 0]);
	};

	const deleteCard = () => {
		setElem(elem().slice(0, -1));
	};

	return (
		<Show when={Form}>
			<form id={props.formID} name={props.formID}>
				<legend>{props.legend}</legend>
				<For each={elem()}>
					{(_, index) => (
						<Card>
							<Form key={index()} />
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
