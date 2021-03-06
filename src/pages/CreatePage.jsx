import { useContext, useState } from "react"
import { SecretKeyCnx } from "../context/SecretKeyCnx";
import { MyModal } from "../components/MyModal";
import { useEncrypt } from "../hooks/useEncrypt";

export const CreatePage = () => {

	const [inputText, setInputText] = useState("");
	const [secretKey, setSecretKey] = useContext(SecretKeyCnx);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [encryptedMsg, setEncryptedMsg] = useState("");

	const onSubmit = (event) => {

		event.preventDefault();

		if (inputText !== "" && secretKey !== "") {	

			setEncryptedMsg(useEncrypt(inputText, secretKey));
			setInputText("");
			setIsModalOpen(true);
		}
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

			<MyModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title={"your encrypted message"} body={encryptedMsg} />
		</div>
	)
}