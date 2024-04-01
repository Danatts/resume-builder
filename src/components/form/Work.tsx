import WorkCard from "@/components/form/WorkCard";
import { createSignal } from "solid-js";

export default function Work() {
	const [count, setCount] = createSignal<number>(1);

	const renderProfiles = () => {
		const children = [];
		for (let i = 0; i < count(); i++) {
			children.push(<WorkCard />);
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
		<form id="work" name="work">
			<legend>Work Experience</legend>
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
