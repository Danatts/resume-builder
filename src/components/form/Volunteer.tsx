import VolunteerCard from "@/components/form/VolunteerCard";
import { createSignal } from "solid-js";

export default function Work() {
	const [count, setCount] = createSignal<number>(1);

	const renderProfiles = () => {
		const children = [];
		for (let i = 0; i < count(); i++) {
			children.push(<VolunteerCard />);
		}
		return children;
	};

	const increaseCount = () => {
		setCount((c) => c + 1);
	};

	const decreaseCount = () => {
		if (count() > 0) setCount((c) => c - 1);
	};

	return (
		<form id="volunteer" name="volunteer">
			<legend>Volunteer</legend>
			{renderProfiles()}
			<button type="button" onClick={decreaseCount}>
				Less
			</button>
			<button type="button" onClick={increaseCount}>
				More
			</button>
		</form>
	);
}
