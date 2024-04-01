import placeholder from "@/resources/resumePlaceholder";
const { basics } = placeholder;
const { location } = basics;

export default function Location() {
	return (
		<form id="location" name="location">
			<legend>Location</legend>
			<label for="region">
				Country
				<input
					placeholder={location.region}
					id="region"
					name="region"
					type="text"
				/>
			</label>
			<label for="countryCode">
				Country code
				<input
					placeholder={location.countryCode}
					id="countryCode"
					name="countryCode"
					type="text"
				/>
			</label>
			<label for="city">
				City
				<input placeholder={location.city} id="city" name="city" type="text" />
			</label>
			<label for="address">
				Address
				<input
					placeholder={location.address}
					id="address"
					name="address"
					type="text"
				/>
			</label>
			<label for="postalCode">
				Postal Code
				<input
					placeholder={location.postalCode}
					id="postalCode"
					name="postalCode"
					type="text"
				/>
			</label>
		</form>
	);
}
