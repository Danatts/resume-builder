import { createStore } from "solid-js/store";

const [view, setView] = createStore({
	work: true,
	education: true,
	skills: true,
	languages: true,
});

export { view, setView };
