import Basics from "@/components/form/BasicsForm";
import ListCards from "@/components/form/common/ListCards";
import Location from "@/components/form/LocationForm";
import { ResumeProvider } from "@/contexts/ResumeContext";
import "@/styles/main.css";

export default function FormPanel() {
  return (
    <ResumeProvider>
      <div class="flex flex-col gap-4">
        <Basics />
        <Location />
        <ListCards
          componentName={"WorkForm"}
          legend={"Work Experience"}
          formID={"work"}
        />
        <ListCards
          componentName={"EducationForm"}
          legend={"Education"}
          formID={"education"}
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
      </div>
    </ResumeProvider>
  );
}
