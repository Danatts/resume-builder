import type { Resume } from '@/types';
import { createSignal } from 'solid-js';
import BasicsPreview from '@/components/preview/BasicsPreview';
import placeholder from '@/utils/placeholder';

export default function Template() {
    const [resume, setResume] = createSignal<Resume>(placeholder);

    return (
        <>
            <BasicsPreview resume={resume} setResume={setResume} />
        </>
    );
}