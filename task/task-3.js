const utils = require("../utils");

/*
    Function `getImportantSubjects(emailSubject)` should return only subjects
    which contain `nata` and don't contain `prize`
*/

function getImportantSubjects(subjects) {
}

const spam1 = "Hi Natali, get your prize ASAP";
const spam2 = "Hello Natalya. Did you forget to pick up you prize??";
const important1 = "Hey Natalia, your klondike.com.ua order is 234431";
const important2 = "Hello Natalya. We'd like to make a job offer";

utils.compare(getImportantSubjects([important2, spam1, important1, spam2]), [important2, important1]);
utils.compare(getImportantSubjects([spam1, important1, spam2]), [important1]);
utils.compare(getImportantSubjects([spam1, spam2]), []);
