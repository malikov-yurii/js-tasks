const utils = require("../utils");

function doubleLetterInString(ch, str) {

}


/********* Test cases ********************/
utils.compare(doubleLetterInString('a', "ab"), "aab");
utils.compare(doubleLetterInString('b', "ab"), "abb");
utils.compare(doubleLetterInString('z', "a z z b"), "a zz zz b");