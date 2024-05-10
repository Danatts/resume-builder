import Basic from "@/components/form/BasicForm";
import List from "@/components/form/common/ListCards";
import { resume, setResume } from "@/store/resumeStore";
import "@/styles/main.css";

export default function FormPanel() {
  function handleInput(e: Event) {
    e.preventDefault();
    window.localStorage.setItem("resume", btoa(JSON.stringify(resume)));
  }

  function recoverLastData() {
    if (window.localStorage.getItem("resume")) {
      setResume(JSON.parse(atob(window.localStorage.getItem("resume"))));
    }
  }

  return (
    <div class="flex flex-col gap-2" onInput={handleInput}>
      <Basic />
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
      <button type="button" onClick={recoverLastData}>
        Recover last Data
      </button>
    </div>
  );
}
