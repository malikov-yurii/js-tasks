const utils = require("../utils");

/*
    Function sortFirstThreeElementsAscending(nums) should sort first three numbers in nums in ascending direction.
*/

function sortFirstThreeElementsAscending(nums) {
    let tmp;
    if (nums[0] > nums[1]) {
        tmp = nums[0];
        nums[0] = nums[1];
        nums[1] = tmp;
    }
    if (nums[1] > nums[2]) {
        tmp = nums[1];
        nums[1] = nums[2];
        nums[2] = tmp;
    }

    if (nums[0] > nums[1]) {
        tmp = nums[0];
        nums[0] = nums[1];
        nums[1] = tmp;
    }

}

/********* Test cases ********************/

let numArray;

numArray = [4, 7, 0];
sortFirstThreeElementsAscending(numArray);
utils.compare(numArray, [0, 4, 7]);

numArray = [5, 22, 208, 9, 102];
sortFirstThreeElementsAscending(numArray);
utils.compare(numArray, [5, 22, 208, 9, 102]);

numArray = [-22, 12, 9];
sortFirstThreeElementsAscending(numArray);
utils.compare(numArray, [-22, 9, 12]);

numArray = [-22, -1, -131, 0];
sortFirstThreeElementsAscending(numArray);
utils.compare(numArray, [-131, -22, -1, 0]);

