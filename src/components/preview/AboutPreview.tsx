import Section from "@/components/preview/common/SectionStyle";
import Text from "@/components/preview/common/TextStyle";
import useResumeContext from "@/hooks/useResumeContext";

export default function AboutPreview() {
	const { store } = useResumeContext();

	return (
		<Section>
			<Text>{store.basics.summary}</Text>
		</Section>
	);
}
