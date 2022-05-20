const utils = require("../utils");

function reverse(str) {
    return str.split("").reverse().join("");
}

// Second Solution


function reverse(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
        newString += str[i];
    }
    return newString;
}

// Third Solution

function reverse(str) {
    let strArr = str.split('');
    let start = 0;
    let end = str.length - 1;
    while (start <= end) {
        const temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;
        start += 1;
        end -= 1;
    }
    return strArr.join('');

}


/********* Test cases ********************/
utils.compare(reverse("ab"), 'ba');
utils.compare(reverse("abcd"), 'dcba');
utils.compare(reverse("c z z b"), 'b z z c');


