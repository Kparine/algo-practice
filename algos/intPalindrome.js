/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
	let reverse = 0;
	let num = x;

	if (x < 0) {
		return false;
	}

	while (num > 9) {
		reverse = reverse * 10 + (num % 10);
		num = parseInt(num / 10);
	}
	reverse = reverse * 10 + num;
	return x == reverse;
};

const result = isPalindrome(121);
console.log("result ******------>>>>>>", result);
