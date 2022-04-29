const utils = require("../utils");

/*
    Function sortFirstThreeElementsDescending(nums) should sort first three numbers in nums in descending direction.
*/

function sortFirstThreeElementsDescending(nums) {
    let tmp;
    if (nums[0] < nums[1]) {
        tmp = nums[0];
        nums[0] = nums[1];
        nums[1] = tmp;
    }
    if (nums[1] < nums[2]) {
        tmp = nums[1];
        nums[1] = nums[2];
        nums[2] = tmp;
    }
    if (nums[0] < nums[1]) {
        tmp = nums[0];
        nums[0] = nums[1];
        nums[1] = tmp;
    }
}

/********* Test cases ********************/

let numArray;

numArray = [4, 7, 0];
sortFirstThreeElementsDescending(numArray);
utils.compare(numArray, [7, 4, 0]);

numArray = [5, 22, 208, 9, 102];
sortFirstThreeElementsDescending(numArray);
utils.compare(numArray, [208, 22, 5, 9, 102]);

numArray = [-22, 12, 9];
sortFirstThreeElementsDescending(numArray);
utils.compare(numArray, [12, 9, -22]);

numArray = [-22, -1, -131, 0];
sortFirstThreeElementsDescending(numArray);
utils.compare(numArray, [-1, -22, -131, 0]);

