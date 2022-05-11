const utils = require("../utils");

/*
    Count words in a sentence. A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
*/

function countWords(sentence) {

}


/********* Test cases ********************/
utils.compare(countWords("Hello world"), 2);
utils.compare(countWords("Hello"), 1);
utils.compare(countWords("I love you"), 3);