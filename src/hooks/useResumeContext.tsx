import { ResumeContext } from "@/contexts/ResumeContext";
import { useContext } from "solid-js";

export default function useResumeContext() {
	const value = useContext(ResumeContext);
	if (!value) {
		throw new Error("useResumeContext: cannot find a ResumeContext");
	}
	return value;
}
