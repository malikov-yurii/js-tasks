const utils = require("../utils");

/*
    Convert string an array of characters.

    Hint. You can access chars from as string by index (as array with array)
        "abcd"[0] == 'a'
        "abcd"[2] == 'c'
*/

function stringToCharArray(str) {

}


/********* Test cases ********************/
utils.compare(stringToCharArray("ba"), ['b', 'a']);
utils.compare(stringToCharArray("bac"), ['b', 'a', 'c']);
utils.compare(stringToCharArray("b"), ['b']);