const shuffleArr = (arr) => {
	let temp, newPosition;

	for (let i = 0; i < arr.length; i++) {
		newPosition = Math.floor(Math.random() * arr.length);
		temp = arr[i];
		arr[i] = arr[newPosition];
		arr[newPosition] = temp;
	}
	return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = shuffleArr(arr);
console.log("result ******------>>>>>>", result);
