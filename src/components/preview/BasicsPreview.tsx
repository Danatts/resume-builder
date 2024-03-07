import type { Accessor, Setter } from 'solid-js';
import type { Resume } from '@/types';
import { onMount } from 'solid-js';

interface Props {
  resume: Accessor<Resume>;
  setResume: Setter<Resume>
}

export default function BasicsPreview({ resume, setResume }: Props) {

  onMount(() => {
    let $basics = document.querySelector('#basics');
    $basics.addEventListener('input', (e) => {
      const basics = resume().basics;
      const { name, value } = e.target as HTMLInputElement;
      setResume({ ...resume(), basics: { ...basics, [name]: value } });
    });
  });

  return (
    <div>
      <h1 class="font-bold text-2xl text-left">{resume().basics.name}</h1>
      <h2 class="font-medium text-base text-left text-neutral-500">{resume().basics.label}</h2>
      <p class="text-sm text-neutral-500 text-pretty">{resume().basics.summary}</p>
    </div>
  );
}