const letsGamble = () => {
	let count = 0;
	let rolled = [];

	while (count < 5) {
		let diceRoll = Math.floor(Math.random() * 100);
		rolled.push(diceRoll);
		count++;
	}
	return rolled;
};

const result = letsGamble();
console.log("result ******------>>>>>>", result);
