const utils = require("../utils");

/*
    Function sortDescending(nums) should sort ascending numbers in nums array.
    Use bubble sort algorithm.
*/

function sortDescending(nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
}

/********* Test cases ********************/

let numArray;

numArray = [5, 22, 208, 9, 102];
sortDescending(numArray);
utils.compare(numArray, [208, 102, 22, 9, 5]);


numArray = [10, -22, 9, 12];
sortDescending(numArray);
utils.compare(numArray, [12, 10, 9, -22]);

numArray = [-22, 0, -1, -131];
sortDescending(numArray);
utils.compare(numArray, [0, -1, -22, -131]);

