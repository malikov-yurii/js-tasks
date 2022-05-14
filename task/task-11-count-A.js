const utils = require("../utils");

/*
    Count letter 'A' in a string.
*/

function countA(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i += 1) {
        if ( str[i].includes('A') ) {
            sum += 1;
        }
    }

 return sum;
}

// Second solution

function countA(str) {
    let count = 0;

    for (let i = 0; i < str.length; i += 1) {

        if (str.charAt(i) == 'A') {
            count += 1;
        }
    }
    return count;
}


/********* Test cases ********************/
utils.compare(countA("A Hello world"), 1);
utils.compare(countA("A Hello A "), 2);
utils.compare(countA("AAI Alove you"), 3);
utils.compare(countA("AAAAA"), 5);