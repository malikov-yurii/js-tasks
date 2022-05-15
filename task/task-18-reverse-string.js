const utils = require("../utils");

function reverse(str) {

}


/********* Test cases ********************/
utils.compare(reverse("ab"), 'ba');
utils.compare(reverse("abcd"), 'dcba');
utils.compare(reverse("c z z b"),'b z z c');
