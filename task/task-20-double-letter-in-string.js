const utils = require("../utils");

function doubleLetterInString(ch, str) {
    let correctedString = '';
    for  ( const letter of str) {
        if ( letter === ch) {
            correctedString += letter;
        }
        correctedString += letter;
    }

    return correctedString;
}


/********* Test cases ********************/
utils.compare(doubleLetterInString('a', "ab"), "aab");
utils.compare(doubleLetterInString('b', "ab"), "abb");
utils.compare(doubleLetterInString('z', "a z z b"), "a zz zz b");