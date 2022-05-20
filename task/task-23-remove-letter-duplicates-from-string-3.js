const utils = require("../utils");

/* Leave only the first occurrence of letter in string */

function removeLetterDuplicates3(char, str) {

}

/********* Test cases ********************/

utils.compare(removeLetterDuplicates3('a', "aab"), "ab");
utils.compare(removeLetterDuplicates3('a', "aaaab"), "ab");
utils.compare(removeLetterDuplicates3('a', "aaa ab"), "a b");
utils.compare(removeLetterDuplicates3('a', "aaa ab "), "a b ");
utils.compare(removeLetterDuplicates3('a', "aaa ab bb"), "a b bb");
utils.compare(removeLetterDuplicates3('z', "b a z b z b"), "b a z b  b");






















/*

function removeLetterDuplicates3(char, str) {
    let correctedString = '';
    for (let currentChar of str) {
        if (correctedString.includes(currentChar) && currentChar !== ' ' && currentChar === char) {
            continue;
        }
        correctedString += currentChar;
    }
    return correctedString;
}

*/


