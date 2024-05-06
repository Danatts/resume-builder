import useResumeContext from "@/hooks/useResumeContext";
import placeholder from "@/resources/resumePlaceholder";
import type { FormProps, Skill } from "@/types";
import { createSignal, onMount } from "solid-js";
const { skills } = placeholder;

export default function SkillForm(props: FormProps) {
  let field: HTMLFieldSetElement;
  const [data, setData] = createSignal<Skill>();
  const { setStore } = useResumeContext();

  onMount(() => {
    field.addEventListener("input", (e) => {
      const { name, value } = e.target as HTMLInputElement;
      setData({ ...data(), [name]: value });
      setStore("skills", props.key, data());
    });
  });

  return (
    <fieldset ref={field}>
      <label for="name">
        Name
        <input placeholder={skills[0].name} id="name" name="name" type="text" />
      </label>
			<label for="level">
				Level
				<input
					placeholder={skills[0].level}
					id="level"
					name="level"
					type="text"
				/>
			</label>
      {/*
			<label for="keywords">
				Keywords
				<input
					placeholder={skills[0].keywords[0]}
					id="keywords"
					name="keywords"
					type="text"
				/>
			</label>
      */}
    </fieldset>
  );
}
