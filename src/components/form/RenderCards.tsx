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

export default function RenderCards(props: Props) {
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
						<div class="">
							<Form key={index()} />
						</div>
					)}
				</For>
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
				<TrashIcon size={20} />
			</button>
		</Show>
	);
}
