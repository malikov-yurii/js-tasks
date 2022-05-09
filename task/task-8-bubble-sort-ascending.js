const utils = require("../utils");

/*
    Function sortAscending(nums) should sort ascending numbers in nums array.
    Use bubble sort algorithm. Do not use nums.sort array function
    https://www.youtube.com/watch?v=CIomaG_PDvM
    https://www.youtube.com/watch?v=xtrsCdFhpcc
*/

function sortAscending(nums) {
    for (let n = 0; n < nums.length; n += 1) {
        for (let i = 0; i < nums.length - 1 - n; i += 1) {
            if (nums[i] > nums[i + 1]) {
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
            }
        }
    }
}

// Solution2 (by your example)
function sortAscending(nums) {
    for (let i = nums.length - 1; i > 0; i -= 1) {
        for (let j = 0; j < i; j += 1) {
            if (nums[j] > nums[j + 1]) {
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
sortAscending(numArray);
utils.compare(numArray, [5, 9, 22, 102, 208]);


numArray = [10, -22, 9, 12];
sortAscending(numArray);
utils.compare(numArray, [-22, 9, 10, 12]);

numArray = [-22, 0, -1, -131];
sortAscending(numArray);
utils.compare(numArray, [-131, -22, -1, 0]);

