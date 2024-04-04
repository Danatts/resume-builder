import BasicsForm from "@/components/form/BasicsForm";
import ListCards from "@/components/form/ListCards";
import LocationForm from "@/components/form/LocationForm";
import { ResumeProvider } from "@/contexts/ResumeContext";
import "@/styles/main.css";

export default function FormPanel() {
	return (
		<ResumeProvider>
			<BasicsForm />
			<LocationForm />
			<ListCards
				componentName={"ProfileForm"}
				legend={"Profiles"}
				formID={"profiles"}
			/>
			<ListCards
				componentName={"WorkForm"}
				legend={"Work Experience"}
				formID={"work"}
			/>
			<ListCards
				componentName={"VolunteerForm"}
				legend={"Volunteers"}
				formID={"volunteer"}
			/>
			<ListCards
				componentName={"EducationForm"}
				legend={"Education"}
				formID={"education"}
			/>
			<ListCards
				componentName={"AwardForm"}
				legend={"Awards"}
				formID={"awards"}
			/>
			<ListCards
				componentName={"CertificateForm"}
				legend={"Certificates"}
				formID={"certificates"}
			/>
			<ListCards
				componentName={"PublicationForm"}
				legend={"Publications"}
				formID={"publications"}
			/>
			<ListCards
				componentName={"SkillForm"}
				legend={"Skills"}
				formID={"skills"}
			/>
			<ListCards
				componentName={"LanguageForm"}
				legend={"Languages"}
				formID={"languages"}
			/>
			<ListCards
				componentName={"InterestForm"}
				legend={"Interests"}
				formID={"interests"}
			/>
			<ListCards
				componentName={"ReferenceForm"}
				legend={"References"}
				formID={"references"}
			/>
			<ListCards
				componentName={"ProjectForm"}
				legend={"Projects"}
				formID={"projects"}
			/>
		</ResumeProvider>
	);
}
