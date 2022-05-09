const utils = require("../utils");

/*
    Function getOddNumbers(nums) should return all odd numbers from nums array.
*/

function getOddNumbers(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] % 2 !== 0) {
            result.push(nums[i]);
        }
    }
    return result;

}

/********* Test cases ********************/

utils.compare(getOddNumbers([5, 22, 33, 4, 8, 2, 9, 102, 208]), [5, 33, 9]);

utils.compare(getOddNumbers([8, 9, 10, 11, 12, 13]), [9, 11, 13]);

utils.compare(getOddNumbers([-1, 9, -22, 0, 58, -131]), [-1, 9, -131]);
