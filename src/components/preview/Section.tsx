import type { JSXElement, Accessor } from "solid-js";
import { Show } from "solid-js";

interface Props {
    title?: string,
    notNull?: boolean,
    children: JSXElement,
}

export default function Section(props: Props) {
    return (
        <section class="mb-6 mx-auto">
            <Show when={props.notNull}>
                <h2 class="text-xl font-bold mb-2">{props.title}</h2>
            </Show>
            {props.children}
        </section>
    );
}