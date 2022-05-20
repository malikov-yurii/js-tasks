const utils = require("../utils");

/* Leave only the first occurrence of letter in string */

function removeLetterDuplicates2(str) {

}

/********* Test cases ********************/
utils.compare(removeLetterDuplicates2("aab"), "ab");
utils.compare(removeLetterDuplicates2("aaaab"), "ab");
utils.compare(removeLetterDuplicates2("aaa ab"), "a b");
utils.compare(removeLetterDuplicates2("aaa ab "), "a b ");



