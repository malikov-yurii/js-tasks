const utils = require("../utils");

/*
    Function moveMaxElementToTail(nums) should place maximum element to the tail of nums array.
*/

function moveMaxElementToTail(nums) {
    for (let j = 0; j < nums.length - 1; j += 1) {
        if (nums[j] > nums[j + 1]) {
            const temp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
        }
    }
}

/********* Test cases ********************/

let numArray;

numArray = [5, 22, 208, 9, 102];
moveMaxElementToTail(numArray);
utils.compare(numArray[numArray.length - 1], 208);


numArray = [10, -22, 9, 12];
moveMaxElementToTail(numArray);
utils.compare(numArray[numArray.length - 1], 12);

numArray = [-22, 0, -1, -131];
moveMaxElementToTail(numArray);
utils.compare(numArray[numArray.length - 1], 0);

