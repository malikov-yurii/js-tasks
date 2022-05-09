const utils = require("../utils");

/*
    Function sortFirstFourElementsAscending(nums) should sort first three numbers in nums in ascending direction.
    Use algo in example 6.5
*/

function sortFirstFourElementsAscending(nums) {
    let numsToSort = 4;
    for (let i = numsToSort - 1; i > 0; i -= 1) {
        for (let j = 0; j < i; j += 1) {
            if (nums[j] > nums[j + 1]) {
                const tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
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

