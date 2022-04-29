const utils = require("../utils");

/*
    Function swapElements(nums) should swap two elements in nums array.
    nums.length === 2
*/

function swapElements(nums) {
    const tmp = nums[0];
    nums[0] = nums[1];
    nums[1] = tmp;
}

/********* Test cases ********************/

let numArray;

numArray = [5, 22];
swapElements(numArray);
utils.compare(numArray, [22, 5]);


numArray = [22, 5];
swapElements(numArray);
utils.compare(numArray, [5, 22]);


numArray = [10, -22];
swapElements(numArray);
utils.compare(numArray, [-22, 10]);

numArray = [0, 1];
swapElements(numArray);
utils.compare(numArray, [1, 0]);
