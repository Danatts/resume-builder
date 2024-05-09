import { createStore } from "solid-js/store";
import type { Resume } from "@/types";
import resumeSchema from "@/resources/resumeSchema";

const [resume, setResume] = createStore<Resume>(resumeSchema);

export { resume, setResume }
