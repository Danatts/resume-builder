import { ResumeProvider } from '@/contexts/ResumeContext';
import HeroPreview from '@/components/preview/HeroPreview';
import AboutPreview from '@/components/preview/AboutPreview';

export default function Template() {
    return (
        <ResumeProvider>
            <HeroPreview />
            <AboutPreview />
        </ResumeProvider>
    );
}