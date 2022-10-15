const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const initialValue = 0;
  return arr.reduce((previousValue, currentValue) => 
  previousValue + currentValue, initialValue);
};

const multiply = function(arr) {
  return arr.reduce((previousValue, currentValue) =>
    previousValue * currentValue);
};

const power = function(number, times) {
  let current = number;
	for (i = 1; i < times; i++){
    current = current * number;
  }
  return current;
};

const factorial = function(number) {
  var current = 1;
  for (var i = 2; i <= number; i++)
    current = current * i;
  return current;
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
