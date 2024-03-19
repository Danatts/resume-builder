import ProfileCard from "@/components/form/ProfileCard";
import { createSignal } from "solid-js";

export default function Profiles() {
	const [count, setCount] = createSignal<number>(1);

	const renderProfiles = () => {
		const children = [];
		for (let i = 0; i < count(); i++) {
			children.push(<ProfileCard />);
		}
		return children;
	};

	const increaseCount = () => {
		setCount((c) => c + 1);
	};

	const decreaseCount = () => {
		if (count() > 0) setCount((c): number => c - 1);
	};

	return (
		<fieldset id="profiles" name="profiles">
			<legend>Profiles</legend>
			{renderProfiles()}
			<button type="button" onClick={decreaseCount}>
				Less
			</button>
			<button type="button" onClick={increaseCount}>
				More
			</button>
		</fieldset>
	);
}
