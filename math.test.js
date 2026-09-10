const assert = require("assert");
const test = require("node:test");
const { sum, subtract } = require("./math");

test("adds 1 + 2 to equal 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

test("subtracts 5 - 2 to equal 3", () => {
  assert.strictEqual(subtract(5, 2), 3);
});
