const utils = require("../utils");


function sort(str) {
    let stringToArray = [];
    for (let i = 0; i < str.length; i += 1) {
        stringToArray.push(str[i]);
    }

    for (let i = 0; i < stringToArray.length; i += 1) {
        for (let j = 0; j < stringToArray.length; j += 1) {
            if (stringToArray[j] > stringToArray[j + 1]) {
                let tmp = stringToArray[j];
                stringToArray[j] = stringToArray[j + 1];
                stringToArray[j + 1] = tmp;
            }
        }
    }

    let bubbleSort = '';
    for (let i = 0; i < stringToArray.length; i += 1) {
        bubbleSort += stringToArray[i];
    }
    return bubbleSort;

}


/********* Test cases ********************/
utils.compare(sort("ba"), "ab");
utils.compare(sort("bac"), "abc");
utils.compare(sort("cdab"), "abcd");
utils.compare(sort("cedab"), "abcde");