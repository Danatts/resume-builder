import About from "@/components/preview/AboutPreview";
import Education from "@/components/preview/EducationPreview";
import Hero from "@/components/preview/HeroPreview";
import Language from "@/components/preview/Language";
import Skill from "@/components/preview/SkillPreview";
import Work from "@/components/preview/WorkPreview";
import { ResumeProvider } from "@/contexts/ResumeContext";

export default function Preview() {
	return (
		<ResumeProvider>
			<Hero />
			<About />
			<Work />
			<Education />
			<Skill />
			<Language />
		</ResumeProvider>
	);
}
