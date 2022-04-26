const utils = require("../utils");

/*
    Function `isImportant(emailSubject)` should return `true`
    when `emailSubject` contains `nata` (case-insensitive) and does not contain `prize`
*/

// solution1
// solution1

function isImportant(emailSubject) {
    emailSubject = emailSubject.toLowerCase();
    const result = emailSubject.includes('nata') && !emailSubject.includes('prize') ? true : false;
    return result;
}

// solution2

function isImportant(emailSubject) {
    let result;
    result = emailSubject.toLowerCase();
    return result.includes('nata') && !result.includes('prize');
}



utils.compare(isImportant("Hi Natali, get your prize ASAP"), false);
utils.compare(isImportant("Hey Natalia, your klondike.com.ua order is 234431"), true);
utils.compare(isImportant("Hello Natalya. We'd like to make a job offer"), true);
