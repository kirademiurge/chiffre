import { useState, useContext } from "react"
import { SecretKeyCnx } from "../context/SecretKeyCnx";

export const TranslatePage = () => {

	const [plainText, setPlainText] = useState("");
	const [encryptedMsg, setEncryptedMsg] = useState("");
	const [secretKey, setSecretKey] = useContext(SecretKeyCnx);

	const onChangePlainText = (event) => {
		setPlainText(event.target.value);
	}
	console.log(plainText);
	
	return (
		<div className="space-y-4">
			<div className="container mx-auto px-12 flex w-full space-x-6">
				<h3 className="w-full text-lg">Plain text</h3>
				<h3 className="w-full text-lg">Encrypted message</h3>
			</div>
			<div className="container mx-auto px-12 flex w-full space-x-6">

				<textarea
					placeholder="type a message..."
					defaultValue={plainText}
					onChange={ onChangePlainText }
					className="textarea textarea-ghost resize-none w-full h-60 bg-base-300" />

				<textarea
					defaultValue={encryptedMsg}
					className="textarea textarea-ghost resize-none w-full h-60 bg-base-300" />

			</div>
		</div>
	)
}