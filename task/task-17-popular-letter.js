const utils = require("../utils");

/* The most popular letter has more occurrences in the string than other letters  */
function getPopularLetter(str) {

}


/********* Test cases ********************/
utils.compare(getPopularLetter("aba"), 'a');
utils.compare(getPopularLetter("bccaac"), 'c');
utils.compare(getPopularLetter("c z z b"),'z');
