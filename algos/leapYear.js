const leapYear = (year) => {
	return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

const yr = 2029;
const result = leapYear(yr);
