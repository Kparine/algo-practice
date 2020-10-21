const binarySearch = (arr, num, left = 0, right = arr.length - 1) => {
	let mid = Math.floor(right - left / 2);
	if (left > right) return null;

	if (num > arr[mid]) return binarySearch(arr, num, mid + 1, right);
	if (num < arr[mid]) return binarySearch(arr, num, left, mid - 1);
	else return mid;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const num = 6;
const result = binarySearch(arr, num);
console.log("result ******------>>>>>>", result);
