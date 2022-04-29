const utils = require("../utils");

/*
    Function swapFirstAndLastElements(nums) should swap the first and the last elements in nums
*/

function swapFirstAndLastElements(nums) {

}

/********* Test cases ********************/

let numArray;

numArray = [5, 22, 208, 9, 102];
swapFirstAndLastElements(numArray);
utils.compare(numArray, [102, 22, 208, 9, 5]);


numArray = [10, -22, 9, 12];
swapFirstAndLastElements(numArray);
utils.compare(numArray, [12, -22, 9, 10]);

numArray = [-22, 0, -1, -131];
swapFirstAndLastElements(numArray);
utils.compare(numArray, [-131, 0, -1, -22]);

