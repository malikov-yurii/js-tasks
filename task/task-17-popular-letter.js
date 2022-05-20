const utils = require("../utils");

/* The most popular letter has more occurrences in the string than other letters  */
function getPopularLetter(str) {
    let maxSplitArrLength = 0;
    let maxChar = '';

    for (let char of str) {
        if( 'a' <= char && char <= 'z') {
            const splitArr = str.split(char);
            if (splitArr.length > maxSplitArrLength) {
                maxSplitArrLength = splitArr.length;
                maxChar = char;
            }
        }
    }
    return maxChar;
}

/********* Test cases ********************/
utils.compare(getPopularLetter("c z z b"),'z');
utils.compare(getPopularLetter("aba"), 'a');
utils.compare(getPopularLetter("bccaac"), 'c');
utils.compare(getPopularLetter("c m m b"),'m');
