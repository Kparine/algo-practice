let string1 = "abc";
let string2 = "ahbgdc";

const isSubsequence = function (s, t) {
	if (!s.length) return true;
	let pointer = 0;
	for (i = 0; i < t.length; i++) {
		if (pointer && pointer === s.length - 1) return true;
		if (s[pointer] === t[i]) pointer++;
	}
	return false;
};

const result = isSubsequence(string1, string2);
console.log("result ******------>>>>>>", result);
