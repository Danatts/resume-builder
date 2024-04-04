import useResumeContext from "@/hooks/useResumeContext";

export default function SummaryPreview() {
	const { store } = useResumeContext();

	return (
		<div>
			<pre>{JSON.stringify(store, null, 2)}</pre>
		</div>
	);
}
