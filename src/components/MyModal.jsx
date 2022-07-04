import { createPortal } from "react-dom"

export const MyModal = ({isOpen, title, body}) => {

	if (!isOpen) return null;
	{
		return createPortal(
			<div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-neutral-focus bg-opacity-40">
				<div class="card w-96 bg-neutral text-neutral-content">
					<div class="card-body items-center text-center">
						<h2 class="card-title">{title}</h2>
						<p>{body}</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">save</button>
							<button class="btn btn-ghost">copy</button>
						</div>
					</div>
				</div>
			</div>,
			document.getElementById("modalPortal")
		)
	}
}