import type { Basics, Resume } from '@/types';
import type { SetStoreFunction } from 'solid-js/store';
import { onMount } from 'solid-js';

interface Props {
  basics: Basics;
  setBasics: SetStoreFunction<Resume>,
}

export default function BasicsPreview({ basics, setBasics }: Props) {

  onMount(() => {
    let $basics = document.querySelector('#basics');
    $basics.addEventListener('input', (e) => {
      const { name, value } = e.target as HTMLInputElement;
      setBasics('basics', {...basics, [name]: value});
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
      <h1 class="font-bold text-2xl text-left">{basics?.name}</h1>
      <h2 class="font-medium text-base text-left text-neutral-500">{basics?.label}</h2>
      <p class="text-sm text-neutral-500 text-pretty">{basics?.summary}</p>
      <image class="hidden" id="imagePreview" width={50} height={50} />
    </div>
  );
}