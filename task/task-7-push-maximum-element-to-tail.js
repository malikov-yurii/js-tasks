const utils = require("../utils");

/*
    Function moveMaxElementToTail(nums) should place maximum element to the tail of nums array.
*/

function moveMaxElementToTail(nums) {

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

