import FormSection from "@/components/form/common/FormSection";
import CameraIcon from "@/icons/CameraIcon";
import ph from "@/resources/resumePlaceholder";
import type { Basics } from "@/types";
import { createSignal } from "solid-js";
import { resume, setResume } from "@/store/resumeStore";

export default function BasicsForm() {
  const [data, setData] = createSignal<Basics>();

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data(), [name]: value });
    setResume("basics", data());
  }

  return (
    <FormSection title={"Basics"} section={"basics"}>
      <form id="basics" name="basics" onInput={handleInput}>
        <label for="name">
          Name
          <input
            autocomplete="name"
            placeholder={ph.basics.name}
            id="name"
            name="name"
            type="text"
            value={resume?.basics?.name ? resume.basics.name : null}
          />
        </label>
        <label for="label">
          Label
          <input
            placeholder={ph.basics.label}
            id="label"
            name="label"
            type="text"
            value={resume?.basics?.label ? resume.basics.label : null}
          />
        </label>
        <label for="email">
          Email
          <input
            autocomplete="email"
            placeholder={ph.basics.email}
            id="email"
            name="email"
            type="email"
            value={resume?.basics?.email ? resume.basics.email : null}
          />
        </label>
        <label for="phone">
          Phone
          <input
            autocomplete="tel"
            placeholder={ph.basics.phone}
            id="phone"
            name="phone"
            type="tel"
            value={resume?.basics?.phone ? resume.basics.phone : null}
          />
        </label>
        <label for="url">
          Website
          <input
            autocomplete="url"
            placeholder={ph.basics.url}
            id="url"
            name="url"
            type="url"
            value={resume?.basics?.url ? resume.basics.url : null}
          />
        </label>
        <label for="city">
          City
          <input
            placeholder={ph.basics.city}
            id="city"
            name="city"
            type="text"
            value={resume?.basics?.city ? resume.basics.city : null}
          />
        </label>
        <label for="region">
          Country
          <input
            autocomplete="county"
            placeholder={ph.basics.region}
            id="region"
            name="region"
            type="text"
            value={resume?.basics?.region ? resume.basics.region : null}
          />
        </label>
        <label for="summary">
          Summary
          <textarea
            placeholder={ph.basics.summary}
            id="summary"
            name="summary"
            value={resume?.basics?.summary ? resume.basics.summary : null}
          />
        </label>
        <label
          class=" active:scale-95 rounded flex flex-col items-center cursor-pointer p-2 self-center border w-full"
          for="image"
        >
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            class="hidden"
          />
          <CameraIcon size={40} />
          Uplaod profile picture
        </label>
      </form>
    </FormSection>
  );
}
