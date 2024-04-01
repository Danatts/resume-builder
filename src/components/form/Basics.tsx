import CameraIcon from "@/icons/CameraIcon";
import placeholder from "@/resources/resumePlaceholder";
const { basics } = placeholder;

export default function Basics() {
	return (
		<form class="flex flex-col gap-3" id="basics" name="basics">
			<legend>Basics</legend>
			<label for="name">
				Name
				<input placeholder={basics.name} id="name" name="name" type="text" />
			</label>
			<label for="label">
				Label
				<input placeholder={basics.label} id="label" name="label" type="text" />
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
				<input placeholder={basics.phone} id="phone" name="phone" type="tel" />
			</label>
			<label for="url">
				Website
				<input placeholder={basics.url} id="url" name="url" type="url" />
			</label>
			<label for="summary">
				Summary
				<textarea placeholder={basics.summary} id="summary" name="summary" />
			</label>
			<label
				class="hover:bg-slate-100 active:scale-95 rounded-md flex flex-col items-center cursor-pointer p-2 self-center border border-black w-full"
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
	);
}
