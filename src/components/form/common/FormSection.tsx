import CollapsedIcon from "@/icons/CollapsedIcon";
import ExpandedIcon from "@/icons/ExpandedIcon";
import ShowIcon from "@/icons/ShowIcon";
import HideIcon from "@/icons/HideIcon";
import { Show, createSignal, type JSXElement } from "solid-js";

interface Props {
  children: JSXElement;
  title: string;
  view?: boolean;
  setView?: () => void;
}

export default function FormSection(props: Props) {
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
        <button type="button" onClick={props.setView}>
          <Show when={props.view} fallback={<HideIcon size={25} />}>
            <ShowIcon size={25} />
          </Show>
        </button>
      </header>
      <Show when={toggle()}>
        {props.children}
      </Show>
    </section>
  )
}
