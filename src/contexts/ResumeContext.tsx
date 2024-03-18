import resumeSchema from "@/resources/resumeSchema";
import type { Resume } from "@/types";
import type { JSXElement } from "solid-js";
import { createContext } from "solid-js";
import type { SetStoreFunction } from "solid-js/store";
import { createStore } from "solid-js/store";

interface Props {
	children: JSXElement;
}

interface ResumeContextValue {
	store: Resume;
	setStore: SetStoreFunction<Resume>;
}

export const ResumeContext = createContext<ResumeContextValue>();

export function ResumeProvider(props: Props) {
	const [store, setStore] = createStore<Resume>(resumeSchema);

	return (
		<ResumeContext.Provider value={{ store, setStore }}>
			{props.children}
		</ResumeContext.Provider>
	);
}
