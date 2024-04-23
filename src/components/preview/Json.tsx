import useResumeContext from "@/hooks/useResumeContext";

export default function SummaryPreview() {
	const { store } = useResumeContext();
	const data = `${"data:text/json;charset=utf-8,"}${encodeURIComponent(
		JSON.stringify(store),
	)}`;

	return (
		<div class="flex flex-col gap-3">
			<pre>{JSON.stringify(store, null, 2)}</pre>
			<a
				class="border p-2 rounded-md w-fit self-center"
				download={"resume.json"}
				href={data}
				target="_blank"
				rel="noreferrer"
			>
				Download Json
			</a>
		</div>
	);
}
