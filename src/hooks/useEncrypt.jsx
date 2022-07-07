export const useEncrypt = (msg, key) => {

	let str = [];
	for (let i = 0; i < msg.length; i++) {
		str.push(msg[i].charCodeAt() ^ key);
	}

	return str.join(" ");
}