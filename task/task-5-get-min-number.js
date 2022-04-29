const utils = require("../utils");

/*
    Function getMinNumber(nums) should return minimum number from nums array.
    Do not use Math.min function.
*/

function getMinNumber(nums) {

}

/********* Test cases ********************/

utils.compare(getMinNumber([5, 22, 33, 4, 8, 2, 9, 102, 208]), 2);

utils.compare(getMinNumber([10, 8, 9, 11, 12, 13]), 8);

utils.compare(getMinNumber([-1, 9, -22, 0, 58, -131]), -131);
