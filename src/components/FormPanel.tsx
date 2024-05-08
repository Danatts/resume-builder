import Basics from "@/components/form/BasicsForm";
import List from "@/components/form/common/ListCards";
import { ResumeProvider } from "@/contexts/ResumeContext";
import "@/styles/main.css";

export default function FormPanel() {
	return (
		<ResumeProvider>
			<div class="flex flex-col gap-4">
				<Basics />
				<List
					componentName={"WorkForm"}
					legend={"Work Experience"}
					formID={"work"}
				/>
				<List
					componentName={"EducationForm"}
					legend={"Education"}
					formID={"education"}
				/>
				<List componentName={"SkillForm"} legend={"Skills"} formID={"skills"} />
				<List
					componentName={"LanguageForm"}
					legend={"Languages"}
					formID={"languages"}
				/>
			</div>
		</ResumeProvider>
	);
}
