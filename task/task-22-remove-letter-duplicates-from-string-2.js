const utils = require("../utils");

/* Leave only the first occurrence of letter in string */

function removeLetterDuplicates2(str) {
    let newString = '';
    for (const letter of str) {
        if (newString.includes(letter) && 'a' <= letter && letter <= 'z') {
            continue;
        }
        newString += letter;
    }
    return newString;

}

/********* Test cases ********************/
utils.compare(removeLetterDuplicates2("aab"), "ab");
utils.compare(removeLetterDuplicates2("aaaab"), "ab");
utils.compare(removeLetterDuplicates2("aaa ab"), "a b");
utils.compare(removeLetterDuplicates2("aaa ab "), "a b ");



