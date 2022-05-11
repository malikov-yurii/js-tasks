const utils = require("../utils");

/*
    Remove all 'ABC' from a string.
*/

function removeABC(str) {

}


/********* Test cases ********************/
utils.compare(removeABC("ABC Hello world"), " Hello world");
utils.compare(removeABC("ABc Hello world"), "ABc Hello world");
utils.compare(removeABC("ABC Hello ABC"), " Hello ");
utils.compare(removeABC("ABc ABC ABC Hell"), "ABc   Hell");
utils.compare(removeABC("ABC loves you"), " loves you");
utils.compare(removeABC("ABCABC"), "");