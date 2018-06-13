"use strict";

var multiply = function multiply() {
  var number1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var number2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return number1 * number2;
};
console.log(multiply(2));
console.log(multiply(6, 4));
