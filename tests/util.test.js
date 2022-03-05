const validateCommand = require("../src/util.js");
const util = require("../src/util.js");

describe("validateCommand", () => {
  it("comand MOVE is valid", () => {
    expect(validateCommand("MOVE")).toBe(true);
  });
});
