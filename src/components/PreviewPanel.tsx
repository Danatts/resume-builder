import Json from "@/components/preview/Json";
import { ResumeProvider } from "@/contexts/ResumeContext";

export default function Preview() {
	return (
		<ResumeProvider>
			<Json />
		</ResumeProvider>
	);
}
