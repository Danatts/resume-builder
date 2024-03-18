import AboutPreview from "@/components/preview/AboutPreview";
import HeroPreview from "@/components/preview/HeroPreview";
import { ResumeProvider } from "@/contexts/ResumeContext";

export default function Template() {
	return (
		<ResumeProvider>
			<HeroPreview />
			<AboutPreview />
		</ResumeProvider>
	);
}
