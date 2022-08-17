const utils = require("../utils");


function isValidEmailString(emailStr) {
    const isValid = emailStr !== undefined && emailStr.includes('@');
    return isValid;
}

function isValidEmailStringSecondVersion(emailStr) {
    const isValid = emailStr !== undefined && emailStr.includes('@') && emailStr.endsWith('.com');
    return isValid;
}

const firstUser = {
    name : 'Yurii',
    email : 'yurii @'
}

let name = 'Natali';
let email = 'natali@gmail.com';
const secondUser = { name, email };

function isValidUser({ name, email }, emailValidator) {
    return emailValidator(email);
}

// function isValidUser(user, emailValidator) {
//     return emailValidator(user.email);
// }

utils.compare(isValidUser(firstUser, isValidEmailString), true);
utils.compare(isValidUser(firstUser, isValidEmailStringSecondVersion), false);

utils.compare(isValidUser(secondUser, isValidEmailString), true);
utils.compare(isValidUser(secondUser, isValidEmailStringSecondVersion), true);
