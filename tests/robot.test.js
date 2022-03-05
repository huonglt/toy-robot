const { MAX_X, MOVE, LEFT, REPORT, NORTH } = require("../src/constants.js");
const createRobot = require("../src/robot.js");

describe("test robot module", () => {
  it("commands in example 1", () => {
    const robot = createRobot();
    robot.executeCommand("PLACE 0,0,NORTH");
    robot.executeCommand(MOVE);
    robot.executeCommand(REPORT);

    const { x, y, f } = robot.getCurrentPostion();
    expect(x).toEqual(0);
    expect(y).toEqual(1);
    expect(f).toEqual(NORTH);
  });
  it("commands in example 3", () => {
    const robot = createRobot();
    robot.executeCommand("PLACE 1,2,EAST");
    robot.executeCommand(MOVE);
    robot.executeCommand(MOVE);
    robot.executeCommand(LEFT);
    robot.executeCommand(MOVE);
    robot.executeCommand(REPORT);

    const { x, y, f } = robot.getCurrentPostion();
    expect(x).toEqual(3);
    expect(y).toEqual(3);
    expect(f).toEqual(NORTH);
  });
});
