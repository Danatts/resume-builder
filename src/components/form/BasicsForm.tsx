import FormSection from "@/components/form/common/FormSection";
import useResumeContext from "@/hooks/useResumeContext";
import CameraIcon from "@/icons/CameraIcon";
import placeholder from "@/resources/resumePlaceholder";
import { setView, view } from "@/store/view";
import type { Basics } from "@/types";
import { createSignal } from "solid-js";

export default function BasicsForm() {
	const [data, setData] = createSignal<Basics>();
	const { setStore } = useResumeContext();
	const { basics } = placeholder;

	function handleInput(e: Event) {
		e.preventDefault();
		const { name, value } = e.target as HTMLInputElement;
		setData({ ...data(), [name]: value });
		setStore("basics", data());
	}

	function handleView() {
		setView("basics", !view.basics);
	}

	return (
		<FormSection title={"Basics"} view={view.basics} setView={handleView}>
			<form id="basics" name="basics" onInput={handleInput}>
				<label for="name">
					Name
					<input
						placeholder={basics.name}
						id="name"
						name="name"
						type="text"
						value={data()?.name ? data().name : null}
					/>
				</label>
				<label for="label">
					Label
					<input
						placeholder={basics.label}
						id="label"
						name="label"
						type="text"
						value={data()?.label ? data().label : null}
					/>
				</label>
				<label for="email">
					Email
					<input
						placeholder={basics.email}
						id="email"
						name="email"
						type="email"
						value={data()?.email ? data().email : null}
					/>
				</label>
				<label for="phone">
					Phone
					<input
						placeholder={basics.phone}
						id="phone"
						name="phone"
						type="tel"
						value={data()?.phone ? data().phone : null}
					/>
				</label>
				<label for="url">
					Website
					<input
						placeholder={basics.url}
						id="url"
						name="url"
						type="url"
						value={data()?.url ? data().url : null}
					/>
				</label>
				<label for="city">
					City
					<input
						placeholder={basics.city}
						id="city"
						name="city"
						type="text"
						value={data()?.city ? data().city : null}
					/>
				</label>
				<label for="region">
					Country
					<input
						placeholder={basics.region}
						id="region"
						name="region"
						type="text"
						value={data()?.region ? data().region : null}
					/>
				</label>
				<label for="summary">
					Summary
					<textarea
						placeholder={basics.summary}
						id="summary"
						name="summary"
						value={data()?.summary ? data().summary : null}
					/>
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
			</form>
		</FormSection>
	);
}
