let _ = require('underscore')
function compare(actual, expected) {

    let testResultLabel = _.isEqual(actual, expected) ? "Passed" : "Failed";

    console.log(`${testResultLabel} expected=${expected} actual=${actual}`);
}