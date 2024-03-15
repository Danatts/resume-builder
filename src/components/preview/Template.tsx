import type { Resume } from '@/types';
import BasicsPreview from '@/components/preview/BasicsPreview';
import placeholder from '@/resources/placeholder';
import { createStore } from 'solid-js/store';

export default function Template() {
    const [store, setStore] = createStore<Resume>(placeholder);

    return (
        <>
            <BasicsPreview resume={store} setResume={setStore} />
        </>
    );
}