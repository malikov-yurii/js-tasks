const utils = require("../utils");

/*
    Function swapFirstTwoElements(nums) should swap the first two elements in nums
*/

function swapFirstTwoElements(nums) {
    if (nums[0] < nums[1]) {
        const tmp = nums[1];
        nums[1] = nums[0];
        nums[0] = tmp;
    }
}


/********* Test cases ********************/

let numArray;

numArray = [5, 22];
swapFirstTwoElements(numArray);
utils.compare(numArray, [22, 5]);


numArray = [10, -22, 9, 12];
swapFirstTwoElements(numArray);
utils.compare(numArray, [-22, 10, 9, 12]);

numArray = [-22, 0, -1];
swapFirstTwoElements(numArray);
utils.compare(numArray, [0, -22, -1]);

