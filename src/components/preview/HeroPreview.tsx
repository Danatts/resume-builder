import useResumeContext from '@/hooks/useResumeContext';
import { onMount } from 'solid-js';
import Section from '@/components/preview/Section';

export default function BasicsPreview() {

  const { store, setStore } = useResumeContext();

  let $basics = document.querySelector('#basics');
  $basics.addEventListener('input', (e) => {
    const { name, value } = e.target as HTMLInputElement;
    setStore('basics', { ...store.basics, [name]: value });
  });

  onMount(() => {
    let $image = document.querySelector('#image');
    let $imagePreview = document.querySelector<HTMLMediaElement>('#imagePreview');
    $image.addEventListener('change', (e) => {
      $imagePreview.classList.remove('hidden');
      $imagePreview.src = URL.createObjectURL((e.target as HTMLInputElement).files[0]);
      console.log($imagePreview.src)
    });
  });

  return (
    <Section>
      <div class="flex flex-row gap-2 justify-between items-center">
        <div class="flex flex-col gap-2">
          <h1 class="font-bold text-2xl text-left">{store?.basics?.name}</h1>
          <h2 class="font-medium text-base text-left text-neutral-500">{store.basics?.label}</h2>
        </div>
        <figure class="w-36">
          <image class="hidden rounded-md" id="imagePreview" />
        </figure>
      </div>
    </Section>
  );
}