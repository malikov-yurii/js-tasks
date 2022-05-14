const utils = require("../utils");

/*
    Remove all 'ABC' from a string.
*/

function removeABC(str) {

    return str.replaceAll('ABC', '');
}

// Another, but not correctly (according to your test-cases) working solution ( I need an explanation, please)

function removeABC(str) {
    for (let i = 0; i < str.length; i += 1) {

        if (str[i] === 'A' || str[i] === 'B' || str[i] === 'C'  ) {

            str = str.substring(0, i) + str.substring(i + 1);
            i -= 1;
        }
    }
    return str;
}


/********* Test cases ********************/
utils.compare(removeABC("ABC Hello world"), " Hello world");
utils.compare(removeABC("ABc Hello world"), "ABc Hello world");
utils.compare(removeABC("ABC Hello ABC"), " Hello ");
utils.compare(removeABC("ABc ABC ABC Hell"), "ABc   Hell");
utils.compare(removeABC("ABC loves you"), " loves you");
utils.compare(removeABC("ABCABC"), "");