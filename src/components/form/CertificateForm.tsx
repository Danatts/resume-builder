import placeholder from "@/resources/resumePlaceholder";
const { certificates } = placeholder;

export default function CertificateForm() {
	return (
		<div class="flex flex-col gap-3 border-black border p-3 rounded-md">
			<label for="name">
				Name
				<input
					placeholder={certificates[0].name}
					id="name"
					name="name"
					type="text"
				/>
			</label>
			<label for="date">
				Date
				<input id="date" name="date" type="date" />
			</label>
			<label for="issuer">
				Issuer
				<input
					placeholder={certificates[0].issuer}
					id="issuer"
					name="issuer"
					type="text"
				/>
			</label>
			<label for="url">
				Url
				<input
					id="url"
					name="url"
					type="url"
					placeholder={certificates[0].url}
				/>
			</label>
		</div>
	);
}
