import EducationForm from "@/components/form/EducationForm";
import LanguageForm from "@/components/form/LanguageForm";
import SkillForm from "@/components/form/SkillForm";
import WorkForm from "@/components/form/WorkForm";
import FormCard from "@/components/form/common/FormCard";
import { resume, setResume } from "@/store/resumeStore";
import type { Resume } from "@/types";
import type { JSXElement } from "solid-js";
import { For, createSignal } from "solid-js";
import type { Part } from "solid-js/store";
import FormSection from "./FormSection";

interface Props {
	componentName: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	formID: string | Part<Resume, any>;
	legend: string;
}

const FORM = {
	EducationForm,
	LanguageForm,
	SkillForm,
	WorkForm,
};

export default function ListCards(props: Props) {
	const Form: (props: { key: number }) => JSXElement | null =
		FORM[props.componentName];

	const [list, setList] = createSignal([]);

	function addCard() {
		setList([...list(), {}]);
	}

	function removeCard(id: number) {
		setList(list().filter((_, i) => i !== id));
		setResume(props.formID, [...resume[props.formID]].toSpliced(id, 1));
	}

	return (
		<FormSection title={props.legend} section={props.formID}>
			<form id={props.formID} name={props.formID}>
				<For each={list()}>
					{(_, index) => (
						<FormCard key={index()} delete={removeCard}>
							<Form key={index()} />
						</FormCard>
					)}
				</For>
				<button class="border p-1 rounded-md" type="button" onClick={addCard}>
					Add
				</button>
			</form>
		</FormSection>
	);
}
