const utils = require("../utils");

/*
    Function swapLastTwoElements(nums) should swap last two elements of nums.
*/

function swapLastTwoElements(nums) {
    const len = nums.length;
    const tmp = nums[len - 1];
    nums[len - 1] = nums[len - 2];
    nums[len - 2] = tmp;
}

/********* Test cases ********************/

let numArray;

numArray = [5, 22, 208, 9, 102];
swapLastTwoElements(numArray);
utils.compare(numArray, [5, 22, 208, 102, 9]);


numArray = [10, -22, 9, 12];
swapLastTwoElements(numArray);
utils.compare(numArray, [10, -22, 12, 9]);

numArray = [-22, 0, -1, -131];
swapLastTwoElements(numArray);
utils.compare(numArray, [-22, 0, -131, -1]);

