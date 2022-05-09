const utils = require("../utils");

/*
    Function sortFirstFourElementsAscending(nums) should sort first three numbers in nums in ascending direction.
*/


function sortFirstFourElementsAscending(nums) {
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

    if (nums[2] > nums[3]) {
        tmp = nums[2];
        nums[2] = nums[3];
        nums[3] = tmp;
    }

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

numArray = [4, 7, 0, -22];
sortFirstFourElementsAscending(numArray);
utils.compare(numArray, [-22, 0, 4, 7]);

numArray = [5, 22, 208, 9, 102];
sortFirstFourElementsAscending(numArray);
utils.compare(numArray, [5, 9, 22, 208, 102]);

numArray = [222, -22, 12, 100, 9];
sortFirstFourElementsAscending(numArray);
utils.compare(numArray, [-22, 12, 100, 222, 9]);

numArray = [-22, -1, -131, 0];
sortFirstFourElementsAscending(numArray);
utils.compare(numArray, [-131, -22, -1, 0]);

