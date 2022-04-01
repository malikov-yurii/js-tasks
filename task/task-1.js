const utils = require("../utils");

/*
    Function numbersBetween(num1, num2) should return all numbers between num1 and num2
*/

function numbersBetween(num) {
    // TODO implement
}

/********* Test cases ********************/

let testResult = numbersBetween(2,4);
utils.compare(testResult, "234");

testResult = numbersBetween(0, 3);
utils.compare(testResult, "0123");

testResult = numbersBetween(-1, 2);
utils.compare(testResult, "-1012");
