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

    let $image = document.querySelector('#image');
    let $imagePreview = document.querySelector<HTMLMediaElement>('#imagePreview');
    $image.addEventListener('change', (e) => {
      $imagePreview.classList.remove('hidden');
      $imagePreview.src = URL.createObjectURL((e.target as HTMLInputElement).files[0]);
      console.log($imagePreview.src)
    })
  });

  return (
    <div>
      <h1 class="font-bold text-2xl text-left">{resume().basics.name}</h1>
      <h2 class="font-medium text-base text-left text-neutral-500">{resume().basics.label}</h2>
      <p class="text-sm text-neutral-500 text-pretty">{resume().basics.summary}</p>
      <image class="hidden" id="imagePreview" width={50} height={50} />
    </div>
  );
}