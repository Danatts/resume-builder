import type { JSXElement } from "solid-js";
import type { SetStoreFunction } from "solid-js/store";
import type { Resume } from "@/types";
import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import resumeSchema from "@/resources/resumeSchema";

interface Props {
    children: JSXElement,
}

interface ResumeContextValue {
    store: Resume,
    setStore: SetStoreFunction<Resume>,
}

export const ResumeContext = createContext<ResumeContextValue>();

export function ResumeProvider(props: Props) {
    const [store, setStore] = createStore<Resume>(resumeSchema);

    return (
        <ResumeContext.Provider value={{ store, setStore }}>{props.children}</ResumeContext.Provider>
    )
}