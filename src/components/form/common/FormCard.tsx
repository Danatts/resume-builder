import TrashIcon from "@/icons/TrashIcon";
import type { JSXElement } from "solid-js";

interface Props {
	children: JSXElement;
	delete(id: number): void;
	key: number;
}

export default function FormCard(props: Props) {
	return (
		<div class="border p-3 flex flex-col rounded-md">
			<button
				class="w-fit self-end"
				type="button"
				onClick={() => props.delete(props.key)}
			>
				<TrashIcon size={18} />
			</button>
			{props.children}
		</div>
	);
}
