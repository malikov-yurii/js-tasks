const utils = require("../utils");

/*
    Count words in a sentences. A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
*/

function countWords(sentences) {

}


/********* Test cases ********************/
utils.compare(countWords(["Hello world", "My name is Natali"]), [2, 4]);

utils.compare(countWords(["Hello"]), [1]);

utils.compare(countWords(["I love you", "I", "love you"]), [3, 1, 2]);