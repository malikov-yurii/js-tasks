const utils = require("../utils");

/*
    Count number of 'AB' occurrences in a string.
*/


function countAB(str) {
    return str.split('AB').length - 1;
}



/********* Test cases ********************/
utils.compare(countAB("AB Hello world"), 1);
utils.compare(countAB("AB Hello AB "), 2);
utils.compare(countAB("ABABI ABlove you"), 3);
utils.compare(countAB("ABABABABAB"), 5);