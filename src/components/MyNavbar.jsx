import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { SecretKeyCnx } from "../context/SecretKeyCnx"

export const MyNavbar = () => {

	const [secretKey, setSecretKey] = useContext(SecretKeyCnx);

	return (
		<div className="container mx-auto px-12 navbar bg-base-100 mb-12 select-none">

			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<div className="avatar">
								<div className="w-10 rounded-full">
									<img src="https://api.lorem.space/image/face?hash=92310" />
								</div>
							</div>
						</li>
						<li><NavLink to="create">Create</NavLink></li>
						<li><NavLink to="/">Translate</NavLink></li>
						<li><NavLink to="list">List</NavLink></li>
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">Chiffre</a>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0 space-x-2">
					<li><NavLink to="create">Create</NavLink></li>
					<li><NavLink to="/">Translate</NavLink></li>
					<li><NavLink to="list">List</NavLink></li>
				</ul>
			</div>

			<div className="navbar-end space-x-2">

				<input
					type="text"
					placeholder="secret key"
					value={secretKey}
					onChange={ e => setSecretKey(e.target.value) }
					className="input input-bordered w-28 max-w-xs" />

				<div className="hidden lg:block avatar">
					<div className="w-14 rounded-full">
						<img src="https://api.lorem.space/image/face?hash=92310" />
					</div>
				</div>

			</div>

		</div>
	)
}