import CollapsedIcon from "@/icons/CollapsedIcon";
import ExpandedIcon from "@/icons/ExpandedIcon";
import ShowIcon from "@/icons/ShowIcon";
import { Show, createSignal, type JSXElement } from "solid-js";

export default function FormSection(props: { title: string; children: JSXElement }) {
  const [toggle, setToggle] = createSignal<boolean>(false);

  function handleToogle() {
    setToggle(!toggle())
  }

  return (
    <section class="border p-2 rounded-md">
      <header class="flex justify-between p-2 items-center">
        <div>
          <button class="flex gap-1 items-center" type="button" onClick={handleToogle}>
            <Show when={!toggle()} fallback={<ExpandedIcon size={25} />}>
              <CollapsedIcon size={25} />
            </Show>
            <h1 class="text-xl font-bold">{props.title}</h1>
          </button>
        </div>
        <ShowIcon size={25} />
      </header>
      <Show when={toggle()}>
        {props.children}
      </Show>
    </section>
  )
}
