const utils = require("../utils");

/*
    Function numbersPriorTo(num) should return string with all numbers up to 'num'
*/

function numbersPriorTo(num) {
    let result = "";
    let i = 1;
    while (i <= num) {
        result = result + i;
        i++;
    }
    return result;
}

/********* Test cases ********************/

utils.compare(numbersPriorTo(2), "12");
utils.compare(numbersPriorTo(4), "1234");
utils.compare(numbersPriorTo(5), "12345");
