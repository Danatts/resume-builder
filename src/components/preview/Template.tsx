import type { Resume } from '@/types';
import BasicsPreview from '@/components/preview/BasicsPreview';
import resumeSchema from '@/resources/resumeSchema';
import { createStore } from 'solid-js/store';

export default function Template() {
    const [store, setStore] = createStore<Resume>(resumeSchema);

    return (
        <>
            <BasicsPreview basics={store.basics} setBasics={setStore} />
        </>
    );
}