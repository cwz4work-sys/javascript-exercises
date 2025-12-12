const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
  return array.reduce((product, num) => product * num, 1);
};

const power = function(base, expo) {
	return base ** expo;
};

const factorial = function(num) {
  let fac = 1;
  if (num === 0 || num === 1) return fac;
	for (let i = num; num > 1; num--) {
    fac *= num;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
