import { createPortal } from "react-dom"

export const MyModal = ({isOpen, setIsOpen, title, body}) => {

	if (!isOpen) return null;
	{
		return createPortal(
			<div onClick={ () => setIsOpen(false) } className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-neutral-focus bg-opacity-40 select-none">
				<div onClick={ (event) => event.stopPropagation() } className="card w-96 bg-neutral text-neutral-content">
					<div className="card-body items-center text-center">
						<h2 className="card-title">{title}</h2>
						<p>{body}</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">save</button>
							<button onClick={ () => setIsOpen(false) } className="btn btn-ghost">close</button>
						</div>
					</div>
				</div>
			</div>,
			document.getElementById("modalPortal")
		)
	}
}