import useResumeContext from "@/hooks/useResumeContext";
import ph from "@/resources/resumePlaceholder";
import type { FormProps, Skill } from "@/types";
import { createSignal } from "solid-js";

export default function SkillForm(props: FormProps) {
	const [data, setData] = createSignal<Skill>();
	const { store, setStore } = useResumeContext();

	function handleInput(e: Event) {
		e.preventDefault();
		const { name, value } = e.target as HTMLInputElement;
		setData({ ...data(), [name]: value });
		setStore("skills", props.key, data());
	}

	return (
		<fieldset onInput={handleInput}>
			<label for="name">
				Name
				<input
					placeholder={ph.skills[0].name}
					id="name"
					name="name"
					type="text"
					value={
						store?.skills[props.key]?.name ? store.skills[props.key].name : null
					}
				/>
			</label>
			<label for="level">
				Level
				<input
					placeholder={ph.skills[0].level}
					id="level"
					name="level"
					type="text"
					value={
						store?.skills[props.key]?.level
							? store.skills[props.key].level
							: null
					}
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
