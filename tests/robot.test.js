const {
  MAX_X,
  MOVE,
  LEFT,
  REPORT,
  NORTH,
  WEST,
  SOUTH,
} = require("../src/constants.js");
const createRobot = require("../src/robot.js");

describe("test robot module", () => {
  it("ignore commands until 1st valid PLACE command", () => {
    const robot = createRobot();
    robot.executeCommand("INVALID COMMAND 1");
    robot.executeCommand("");
    robot.executeCommand(MOVE);
    robot.executeCommand(MOVE);
    robot.executeCommand(LEFT);

    const { x, y, f } = robot.getCurrentPostion();
    expect(x).toEqual(0);
    expect(y).toEqual(0);
    expect(f).toEqual("");
  });

  it("move that make robot falls will be prevented", () => {
    const robot = createRobot();
    let x, y, f;
    // robot at the top NORTH EAST. MOVE commmand will make robot fall, so will be discarded
    robot.executeCommand("PLACE 4,4,NORTH");
    robot.executeCommand(MOVE);
    ({ x, y, f } = robot.getCurrentPostion());
    expect(x).toEqual(4);
    expect(y).toEqual(4);
    expect(f).toEqual(NORTH);

    // robot at the origin, facing SOUTH. MOVE comand will make robot fall, so will be discarded
    robot.executeCommand("PLACE 0,0,SOUTH");
    robot.executeCommand(MOVE);
    ({ x, y, f } = robot.getCurrentPostion());
    expect(x).toEqual(0);
    expect(y).toEqual(0);
    expect(f).toEqual(SOUTH);
  });

  it("Movements causing robot to fall will be prevented, but further valid movements commands still be allowed", () => {
    const robot = createRobot();
    let x, y, f;

    // robot at the top NORTH EAST. MOVE commmand will make robot fall, so will be discarded
    robot.executeCommand("PLACE 4,4,NORTH");
    robot.executeCommand(MOVE);

    // robot still at position 4 x 4, facing NORTH
    ({ x, y, f } = robot.getCurrentPostion());
    expect(x).toEqual(4);
    expect(y).toEqual(4);
    expect(f).toEqual(NORTH);

    // LEFT command not causing robot to fall so will be executed
    robot.executeCommand(LEFT);
    ({ x, y, f } = robot.getCurrentPostion());
    expect(x).toEqual(4);
    expect(y).toEqual(4);
    expect(f).toEqual(WEST);
  });

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

  it("commands in example 2", () => {
    const robot = createRobot();
    robot.executeCommand("PLACE 0,0,NORTH");
    robot.executeCommand(LEFT);
    robot.executeCommand(REPORT);

    const { x, y, f } = robot.getCurrentPostion();
    expect(x).toEqual(0);
    expect(y).toEqual(0);
    expect(f).toEqual(WEST);
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
