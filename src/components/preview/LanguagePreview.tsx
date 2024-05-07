import Pill from "@/components/preview/common/Pill";
import Section from "@/components/preview/common/SectionStyle";
import useResumeContext from "@/hooks/useResumeContext";
import { For, Show } from "solid-js";

export default function LanguagePreview(props: { show: boolean }) {
  const { store } = useResumeContext();

  return (
    <Show when={props.show}>
      <Section title="Languages">
        <ul class="flex flex-wrap gap-2 justify-stretch">
          <For each={store.languages}>
            {(l) => (
              <li>
                <Pill>{`${l.language}${
                  // biome-ignore lint/style/useTemplate: <explanation>
                  l.fluency ? " - " + l.fluency : ""
                  }`}</Pill>
              </li>
            )}
          </For>
        </ul>
      </Section>
    </Show>
  );
}
