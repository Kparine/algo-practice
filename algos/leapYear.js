const leapYear = (year) => {
	return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

const year = 2020;
const result = leapYear(year);
console.log("result ******------>>>>>>", result);
