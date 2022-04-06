let _ = require('underscore')

function compare(actual, expected) {
    let isTestPassed = _.isEqual(actual, expected);
    let testResultLabel = isTestPassed ? "Passed" : "FAILED";

    console.info(`--------------------------------------`);
    console.info(`Test ${testResultLabel}`);
    console.info(` expected    : ${JSON.stringify(expected)}`);
    console.info(` actual      : ${JSON.stringify(actual)}`);
}

module.exports = { compare };