export const useDescrypt = (msg, key) => {

	msg = msg.split(" ");

	let str = "";
	for (let i = 0; i < msg.length; i++) {
		str += String.fromCharCode(msg[i] ^ key);
	}

	return str;
}