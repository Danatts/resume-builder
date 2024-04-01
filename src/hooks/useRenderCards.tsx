import { createSignal } from "solid-js";

export default function useRenderCards() {
	const [elem, setElem] = createSignal<number>(1);

	const renderCards = (Card) => {
		const children = [];
		for (let i = 0; i < elem(); i++) {
			children.push(<Card />);
		}
		return children;
	};

	const createCard = () => {
		setElem((c) => c + 1);
	};

	const deleteCard = () => {
		if (elem() > 0) setElem((c) => c - 1);
	};

	return { renderCards, createCard, deleteCard };
}
