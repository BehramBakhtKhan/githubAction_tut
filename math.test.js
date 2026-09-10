const assert = require("assert");
const test = require("node:test");
const sum = require("./math");

test("adds 1 + 2 to equal 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});
