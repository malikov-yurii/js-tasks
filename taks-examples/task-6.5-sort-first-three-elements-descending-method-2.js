const utils = require("../utils");

/*
    Function sortFirstThreeElementsDescending(nums) should sort first three numbers in nums in descending direction.
*/

function sortFirstThreeElementsDescending(nums) {
    let numsToSort = 3;
    for (let i = numsToSort - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[j + 1]) {
                const tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
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

