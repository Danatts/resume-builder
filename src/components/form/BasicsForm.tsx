import FormSection from "@/components/form/common/FormSection";
import useResumeContext from "@/hooks/useResumeContext";
import CameraIcon from "@/icons/CameraIcon";
import ph from "@/resources/resumePlaceholder";
import { setView, view } from "@/store/view";
import type { Basics } from "@/types";
import { createSignal } from "solid-js";

export default function BasicsForm() {
	const [data, setData] = createSignal<Basics>();
	const { store, setStore } = useResumeContext();

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
						placeholder={ph.basics.name}
						id="name"
						name="name"
						type="text"
						value={store?.basics?.name ? store.basics.name : null}
					/>
				</label>
				<label for="label">
					Label
					<input
						placeholder={ph.basics.label}
						id="label"
						name="label"
						type="text"
						value={store?.basics?.label ? store.basics.label : null}
					/>
				</label>
				<label for="email">
					Email
					<input
						placeholder={ph.basics.email}
						id="email"
						name="email"
						type="email"
						value={store?.basics?.email ? store.basics.email : null}
					/>
				</label>
				<label for="phone">
					Phone
					<input
						placeholder={ph.basics.phone}
						id="phone"
						name="phone"
						type="tel"
						value={store?.basics?.phone ? store.basics.phone : null}
					/>
				</label>
				<label for="url">
					Website
					<input
						placeholder={ph.basics.url}
						id="url"
						name="url"
						type="url"
						value={store?.basics?.url ? store.basics.url : null}
					/>
				</label>
				<label for="city">
					City
					<input
						placeholder={ph.basics.city}
						id="city"
						name="city"
						type="text"
						value={store?.basics?.city ? store.basics.city : null}
					/>
				</label>
				<label for="region">
					Country
					<input
						placeholder={ph.basics.region}
						id="region"
						name="region"
						type="text"
						value={store?.basics?.region ? store.basics.region : null}
					/>
				</label>
				<label for="summary">
					Summary
					<textarea
						placeholder={ph.basics.summary}
						id="summary"
						name="summary"
						value={store?.basics?.summary ? store.basics.summary : null}
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
