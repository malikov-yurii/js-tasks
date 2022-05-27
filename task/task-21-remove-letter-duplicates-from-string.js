const utils = require("../utils");

/* Leave only the first occurrence of letter in string */

function removeLetterDuplicates(str) {
        let newString = '';
        let lastIndex = newString.length -1;
        for  ( const letter of str) {
            if (newString.includes(letter)) {
               continue;
            }
            newString += letter;
        }

        return newString;
}

/********* Test cases ********************/
utils.compare(removeLetterDuplicates("aab"), "ab");
utils.compare(removeLetterDuplicates("aaaab"), "ab");



