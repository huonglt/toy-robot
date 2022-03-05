const validateCommand = require("../src/util.js");
const util = require("../src/util.js");

describe("validateCommand", () => {
  it("comand MOVE, LEFT, RIGHT, REPORT is valid", () => {
    expect(validateCommand("MOVE")).toBe(true);
    expect(validateCommand("LEFT")).toBe(true);
    expect(validateCommand("RIGHT")).toBe(true);
    expect(validateCommand("REPORT")).toBe(true);
  });

  it("comand PLACE valid", () => {
    expect(validateCommand("PLACE 1,1,NORTH")).toBe(true);
    expect(validateCommand("PLACE 1,3,EAST")).toBe(true);
    expect(validateCommand("PLACE 3,1,WEST")).toBe(true);
    expect(validateCommand("PLACE 0,0,SOUTH")).toBe(true);
  });

  it("comand PLACE invalid", () => {
    expect(validateCommand("PLACE 5,1,NORTH")).toBe(false);
    expect(validateCommand("PLACE 1,5,NORTH")).toBe(false);
    expect(validateCommand("PLACE 1,1,NORTH-EAST")).toBe(false);
    expect(validateCommand("PLACE")).toBe(false);
  });

  it("un-recognize command", () => {
    expect(validateCommand("anything")).toBe(false);
  });
});
