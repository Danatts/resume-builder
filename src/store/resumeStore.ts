import resumeSchema from "@/resources/resumeSchema";
import type { Resume } from "@/types";
import { createStore } from "solid-js/store";

const [resume, setResume] = createStore<Resume>(resumeSchema);

export { resume, setResume };
