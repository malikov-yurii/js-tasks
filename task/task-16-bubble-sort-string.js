const utils = require("../utils");

/*
    Sort alphabetically all chars in a string using bubble sort.

    Hint 1. Characters are comparable:
    'a' < 'b'
    "abcd"[2] > "abcd"[0]

    Hint 2. string is immutable so "abcd"[0] = 'z' takes no effect.
    Thus, you need first to convert string to array, then sort array and then convert sorted array to string
*/

function sort(str) {

}


/********* Test cases ********************/
utils.compare(sort("ba"), "ab");
utils.compare(sort("bac"), "abc");
utils.compare(sort("cdab"), "abcd");
utils.compare(sort("cedab"), "abcde");