const utils = require("../utils");

/*
    Function sortFirstTwoElementsAscending(nums) should sort first two elements in nums in ascending direction.
*/

function sortFirstTwoElementsAscending(nums) {

}

/********* Test cases ********************/

let numArray;

numArray = [7, 4];
sortFirstTwoElementsAscending(numArray);
utils.compare(numArray, [4, 7]);

numArray = [4, 7];
sortFirstTwoElementsAscending(numArray);
utils.compare(numArray, [4, 7]);


numArray = [22, 5, 208, 9, 102];
sortFirstTwoElementsAscending(numArray);
utils.compare(numArray, [5, 22, 208, 9, 102]);


numArray = [-22, 12, 9];
sortFirstTwoElementsAscending(numArray);
utils.compare(numArray, [-22, 12, 9]);

numArray = [-1, -22, -131, 0];
sortFirstTwoElementsAscending(numArray);
utils.compare(numArray, [-22, -1, -131, 0]);

