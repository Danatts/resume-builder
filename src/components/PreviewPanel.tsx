import About from "@/components/preview/AboutPreview";
import Hero from "@/components/preview/HeroPreview";
import { ResumeProvider } from "@/contexts/ResumeContext";

export default function Preview() {
	return (
		<ResumeProvider>
			<Hero />
			<About />
		</ResumeProvider>
	);
}
