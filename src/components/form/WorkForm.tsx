import useResumeContext from "@/hooks/useResumeContext";
import ph from "@/resources/resumePlaceholder";
import type { FormProps, Work } from "@/types";
import { createSignal } from "solid-js";

export default function WorkForm(props: FormProps) {
	const [data, setData] = createSignal<Work>();
	const { store, setStore } = useResumeContext();

	function handleInput(e: Event) {
		e.preventDefault();
		const { name, value } = e.target as HTMLInputElement;
		setData({ ...data(), [name]: value });
		setStore("work", props.key, data());
	}

	return (
		<fieldset onInput={handleInput}>
			<label for={`position${props.key}`}>
				Position
				<input
					id={`position${props.key}`}
					name="position"
					type="text"
					placeholder={ph.work[0].position}
					value={
						store?.work[props.key]?.position
							? store.work[props.key].position
							: null
					}
				/>
			</label>
			<label for={`name${props.key}`}>
				Company
				<input
					autocomplete="name"
					id={`name${props.key}`}
					name="name"
					type="text"
					placeholder={ph.work[0].name}
					value={
						store?.work[props.key]?.name ? store.work[props.key].name : null
					}
				/>
			</label>
			<label for={`url${props.key}`}>
				Url
				<input
					id={`url${props.key}`}
					name="url"
					type="url"
					placeholder={ph.work[0].url}
					value={store?.work[props.key]?.url ? store.work[props.key].url : null}
				/>
			</label>
			<label for={`startDate${props.key}`}>
				Starting date
				<input
					id={`startDate${props.key}`}
					name="startDate"
					type="date"
					value={
						store?.work[props.key]?.startDate
							? store.work[props.key].startDate
							: null
					}
				/>
			</label>
			<label for={`endDate${props.key}`}>
				Ending date
				<input
					id={`endDate${props.key}`}
					name="endDate"
					type="date"
					value={
						store?.work[props.key]?.endDate
							? store.work[props.key].endDate
							: null
					}
				/>
			</label>
			<label for={`summary${props.key}`}>
				Summary
				<textarea
					id={`summary${props.key}`}
					name="summary"
					placeholder={ph.work[0].summary}
					value={
						store?.work[props.key]?.summary
							? store.work[props.key].summary
							: null
					}
				/>
			</label>
			{/*
			<label for="highlights">
				Highlights
				<input
					id="highlights"
					name="highlights"
					type="text"
					placeholder={work[0].highlights[0]}
				/>
			</label>
      */}
		</fieldset>
	);
}
