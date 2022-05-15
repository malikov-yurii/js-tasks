const utils = require("../utils");

/* Leave only the first occurrence of letter in string */
function removeLetterDuplicates(ch, str) {

}


/********* Test cases ********************/
utils.compare(removeLetterDuplicates('a', "aab"), "ab");
utils.compare(removeLetterDuplicates('a', "aaaaaaaaaaaaab"), "ab");
utils.compare(removeLetterDuplicates('b', "ab"), "ab");
utils.compare(removeLetterDuplicates('b', "absbkbm"), "abskm");
utils.compare(removeLetterDuplicates('z', "a z z b z"), "a z  b ");