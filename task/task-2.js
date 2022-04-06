const utils = require("../utils");

/*
    Function `isImportant(emailSubject)` should return `true`
    when `emailSubject` contains `nata` (case-insensitive) and does not contain `prize`
*/

function isImportant(emailSubject) {

}

utils.compare(isImportant("Hi Natali, get your prize ASAP"), false);
utils.compare(isImportant("Hey Natalia, your klondike.com.ua order is 234431"), true);
utils.compare(isImportant("Hello Natalya. We'd like to make a job offer"), true);
