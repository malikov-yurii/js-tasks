const utils = require("../utils");

/*
    Function getMaxNumber(nums) should return maximum number from nums array.
*/

function getMaxNumber(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

/********* Test cases ********************/

utils.compare(getMaxNumber([5, 22, 33, 4, 8, 2, 208, 9, 102]), 208);

utils.compare(getMaxNumber([10, -22, 9, 13, 11, 12]), 13);

utils.compare(getMaxNumber([ -22, 0, -1, -131]), 0);
