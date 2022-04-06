const utils = require("../utils");

/*
    Function getMultipleOfThree(nums) should return array of all nums which are multiple of three.
    Examples:
     3  is     multiple of three because 3 % 3  === 0
     12 is     multiple of three because 12 % 3 === 0
     1  is not multiple of three because 1 % 3  === 1
     8  is not multiple of three because 8 % 3  === 2
*/

function getMultipleOfThree(nums) {
    return nums.filter(num => num % 3 === 0);
}

function getMultipleOfThreeSolution2(nums) {
    return nums.filter(num => {
        let divisionByThreeRemainder = num % 3;
        return divisionByThreeRemainder === 0;
    });
}

function getMultipleOfThreeSolution3(nums) {
    const result = [];
    for (const num of nums) {
        if (num % 3 === 0) {
            result.push(num);
        }
    }
    return result;
}

function getMultipleOfThreeSolution4(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 === 0) {
            result.push(nums[i]);
        }
    }
    return result;
}

function getMultipleOfThreeSolution5(nums) {
    const result = [];
    let i = 0;
    while (i < nums.length) {
        if (nums[i] % 3 === 0) {
            result.push(nums[i]);
        }
        i++;
    }
    return result;
}

function getMultipleOfThreeSolution6(nums) {
    const result = [];
    let i = 0;
    do {
        if (nums[i] % 3 === 0) {
            result.push(nums[i]);
        }
    } while (++i < nums.length)
    return result;
}

function getMultipleOfThreeSolution7(nums) {
    const result = [];
    nums.forEach(num => {
        if (num % 3 === 0) {
            result.push(num);
        }
    })
    return result;
}

/********* Test cases ********************/

utils.compare(getMultipleOfThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), [3, 6, 9, 12]);
utils.compare(getMultipleOfThree([1, 2, 3, 4, 5, 7, 8, 9, 10]), [3, 9]);

utils.compare(getMultipleOfThreeSolution2([1, 2, 3, 4, 5, 7, 8, 9, 10]), [3, 9]);
utils.compare(getMultipleOfThreeSolution3([1, 2, 3, 4, 5, 7, 8, 9, 10]), [3, 9]);
utils.compare(getMultipleOfThreeSolution4([1, 2, 3, 4, 5, 7, 8, 9, 10]), [3, 9]);
utils.compare(getMultipleOfThreeSolution5([1, 2, 3, 4, 5, 7, 8, 9, 10]), [3, 9]);
utils.compare(getMultipleOfThreeSolution6([1, 2, 3, 4, 5, 7, 8, 9, 10]), [3, 9]);
utils.compare(getMultipleOfThreeSolution7([1, 2, 3, 4, 5, 7, 8, 9, 10]), [3, 9]);

