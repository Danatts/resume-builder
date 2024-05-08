import useResumeContext from "@/hooks/useResumeContext";
import CameraIcon from "@/icons/CameraIcon";
import placeholder from "@/resources/resumePlaceholder";
import { setView, view } from "@/store/view";
import type { Basics } from "@/types";
import { createSignal, onMount } from "solid-js";
import FormSection from "./common/FormSection";

const { basics } = placeholder;

export default function BasicsForm() {
	let form: HTMLFormElement;
	const [data, setData] = createSignal<Basics>();
	const { setStore } = useResumeContext();

	onMount(() => {
		form.addEventListener("input", (e) => {
			const { name, value } = e.target as HTMLInputElement;
			setData({ ...data(), [name]: value });
			setStore("basics", data());
		});
	});

	function handleView() {
		setView("basics", !view.basics);
	}

	return (
		<form ref={form} id="basics" name="basics">
			<FormSection title={"Basics"} view={view.basics} setView={handleView}>
				<label for="name">
					Name
					<input placeholder={basics.name} id="name" name="name" type="text" />
				</label>
				<label for="label">
					Label
					<input
						placeholder={basics.label}
						id="label"
						name="label"
						type="text"
					/>
				</label>
				<label for="email">
					Email
					<input
						placeholder={basics.email}
						id="email"
						name="email"
						type="email"
					/>
				</label>
				<label for="phone">
					Phone
					<input
						placeholder={basics.phone}
						id="phone"
						name="phone"
						type="tel"
					/>
				</label>
				<label for="url">
					Website
					<input placeholder={basics.url} id="url" name="url" type="url" />
				</label>
				<label for="city">
					City
					<input placeholder={basics.city} id="city" name="city" type="text" />
				</label>
				<label for="region">
					Country
					<input
						placeholder={basics.region}
						id="region"
						name="region"
						type="text"
					/>
				</label>
				<label for="summary">
					Summary
					<textarea placeholder={basics.summary} id="summary" name="summary" />
				</label>
				<label
					class=" active:scale-95 rounded-md flex flex-col items-center cursor-pointer p-2 self-center border w-full"
					for="image"
				>
					<input
						id="image"
						name="image"
						type="file"
						accept="image/*"
						class="hidden"
					/>
					<CameraIcon size={40} />
					Uplaod profile picture
				</label>
			</FormSection>
		</form>
	);
}
