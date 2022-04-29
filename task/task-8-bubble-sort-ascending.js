const utils = require("../utils");

/*
    Function sortAscending(nums) should sort ascending numbers in nums array.
    Use bubble sort algorithm. Do not use nums.sort array function
    https://www.youtube.com/watch?v=CIomaG_PDvM
    https://www.youtube.com/watch?v=xtrsCdFhpcc
*/

function sortAscending(nums) {

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

