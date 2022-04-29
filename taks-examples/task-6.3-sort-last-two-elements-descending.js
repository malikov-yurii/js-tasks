const utils = require("../utils");

/*
    Function sortLastToElementsDescending(nums) should sort last two elements of nums in descending direction.
*/

function sortLastToElementsDescending(nums) {
    const len = nums.length;
    if (nums[len - 2] < nums[len - 1]) {
        const tmp = nums[len - 1];
        nums[len - 1] = nums[len - 2];
        nums[len - 2] = tmp;
    }
}

/********* Test cases ********************/

let numArray;

numArray = [4, 7];
sortLastToElementsDescending(numArray);
utils.compare(numArray, [7, 4]);


numArray = [7, 4];
sortLastToElementsDescending(numArray);
utils.compare(numArray, [7, 4]);


numArray = [5, 22, 208, 9, 102];
sortLastToElementsDescending(numArray);
utils.compare(numArray, [5, 22, 208, 102, 9]);


numArray = [-22, 12, 9];
sortLastToElementsDescending(numArray);
utils.compare(numArray, [-22, 12, 9]);

numArray = [-22, -1, -131, 0];
sortLastToElementsDescending(numArray);
utils.compare(numArray, [-22, -1, 0, -131]);

