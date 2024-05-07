import { createStore } from "solid-js/store";

const [view, setView] = createStore({
  profile: false,
  work: false,
  education: false,
  skill: false,
  language: false,
});

export { view, setView }
