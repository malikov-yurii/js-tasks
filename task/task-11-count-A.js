const utils = require("../utils");

/*
    Count letter 'A' in a string.
*/

function countA(str) {

}


/********* Test cases ********************/
utils.compare(countA("A Hello world"), 1);
utils.compare(countA("A Hello A "), 2);
utils.compare(countA("AAI Alove you"), 3);
utils.compare(countA("AAAAA"), 5);