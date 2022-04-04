let _ = require('underscore')

function compare(actual, expected) {
    let testResultLabel = _.isEqual(actual, expected) ? "Passed" : "Failed";

    console.log(`--------------------------------------`);
    console.log(`Test ${testResultLabel}`);
    console.log(` expected    : ${expected}`);
    console.log(` actual      : ${actual}`);
}

module.exports = { compare };