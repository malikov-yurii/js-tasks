const utils = require("../utils");

/*
    Convert an array of characters to a string.
*/

function charArrayToString(chars) {

}


/********* Test cases ********************/
utils.compare(charArrayToString(['b', 'a']), "ba");
utils.compare(charArrayToString(['b', 'a', 'c']), "bac");
utils.compare(charArrayToString(['b']), "b");