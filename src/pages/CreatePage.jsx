import { useContext, useState } from "react"
import { SecretKeyCnx } from "../context/SecretKeyCnx";
import { MyModal } from "../components/MyModal";

export const CreatePage = () => {

	const [inputText, setInputText] = useState("");
	const [secretKey, setSecretKey] = useContext(SecretKeyCnx);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onSubmit = (event) => {
		event.preventDefault();
		
		let str = [];
		for (let i = 0; i < inputText.length; i++) {
			str.push(inputText[i].charCodeAt() ^ secretKey);
		}

		console.log(`encrypted msg: ${str.join(" ")}`);
		setInputText("");
		setIsModalOpen(true);
	}

	return (
		<div className="container mx-auto px-12 select-none">
			<form onSubmit={ onSubmit } className="flex justify-center space-x-2">

				<input
					type="text"
					placeholder="your message..."
					value={inputText}
					onChange={ e => setInputText(e.target.value) }
					className="input input-bordered w-full max-w-xs" />
					
				<button className="btn">create</button>

			</form>

			<MyModal isOpen={isModalOpen} title={"your encrypted message"} body={secretKey} />
		</div>
	)
}