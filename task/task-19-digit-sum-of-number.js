const utils = require("../utils");

function sumDigits(number) {
    let sum = 0;
    while (number) {
        let digit = number % 10;
        sum += digit;
        number = (number - digit) / 10;
    }
    return sum;
}

// Second solution

function sumDigits(number) {
    let sum = 0;

    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
}





/********* Test cases ********************/
utils.compare(sumDigits(12), 3);
utils.compare(sumDigits(357), 15);
utils.compare(sumDigits(6537), 21);
utils.compare(sumDigits(2), 2);