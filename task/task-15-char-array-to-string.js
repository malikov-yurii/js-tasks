const utils = require("../utils");

/*
    Convert an array of characters to a string.
*/

function charArrayToString(chars) {
    let newString = '';

    for (let i = 0; i < chars.length; i += 1) {
        newString += chars[i];
    }

    return newString;

}


/********* Test cases ********************/
utils.compare(charArrayToString(['b', 'a']), "ba");
utils.compare(charArrayToString(['b', 'a', 'c']), "bac");
utils.compare(charArrayToString(['b']), "b");