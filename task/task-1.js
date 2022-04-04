const utils = require("../utils");

/*
    Function numbersBetween(numFrom, numTo) should return all numbers between num1 and num2
*/

function numbersBetween(numFrom, numTo) {
    let result = "";
    let i = numFrom;
    while (i <= numTo) {
        result = result + i;
        i += 1;
    }

     return result;
}

/********* Test cases ********************/

let testResult = numbersBetween(2,4);
utils.compare(testResult, "234");

testResult = numbersBetween(0, 3);
utils.compare(testResult, "0123");

testResult = numbersBetween(-1, 2);
utils.compare(testResult, "-1012");
