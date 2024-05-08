import useResumeContext from "@/hooks/useResumeContext";
import placeholder from "@/resources/resumePlaceholder";
import type { Basics } from "@/types";
import { createSignal, onMount } from "solid-js";
import FormSection from "./common/FormSection";

const { basics } = placeholder;

export default function LocationForm() {
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

	return (
		<form ref={form} id="location" name="location">
			<FormSection title={"Location"}>
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
				{/*
			<label for="countryCode">
				Country code
				<input
					placeholder={location.countryCode}
					id="countryCode"
					name="countryCode"
					type="text"
				/>
			</label>
      */}
				{/*
			<label for="address">
				Address
				<input
					placeholder={location.address}
					id="address"
					name="address"
					type="text"
				/>
			</label>
      */}
				{/*
			<label for="postalCode">
				Postal Code
				<input
					placeholder={location.postalCode}
					id="postalCode"
					name="postalCode"
					type="text"
				/>
			</label>
      */}
			</FormSection>
		</form>
	);
}
