const utils = require("../utils");

/*
    Function moveMinElementToTail(nums) should place minimum element to the tail of nums array.
*/

function moveMinElementToTail(nums) {
    for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] < nums[j + 1]) {
            const temp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
        }
    }
}

/********* Test cases ********************/

let numArray;

numArray = [5, 22, 208, 9, 102];
moveMinElementToTail(numArray);
utils.compare(numArray[numArray.length - 1], 5);


numArray = [10, -22, 9, 12];
moveMinElementToTail(numArray);
utils.compare(numArray[numArray.length - 1], -22);

numArray = [-22, 0, -1, -131];
moveMinElementToTail(numArray);
utils.compare(numArray[numArray.length - 1], -131);

