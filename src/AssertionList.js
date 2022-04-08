const Equal = require("./Equal.js");
const Include = require("./Include.js");

class AssertionList {
    constructor(assertions) {
        this.assertions = assertions;
    }

    checkAll() {
        return this.assertions.every((assertion) => {
            return assertion.equal();
        });
    }
}

module.exports = AssertionList;

// if (assertion instanceof Equal) {
//   return assertion.checkEqual()
// } else if (assertion instanceof Include) {
//   return assertion.checkInclude()
// }