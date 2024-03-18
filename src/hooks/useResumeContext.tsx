import { useContext } from 'solid-js';
import { ResumeContext } from '@/contexts/ResumeContext';

export default function useResumeContext() {
    const context = useContext(ResumeContext)
    if (!context) {
        throw new Error("useResumeContext: cannot find a ResumeContext");
    }
    return context;
}