const {
  parsePlaceCommand,
  log,
  validatePlaceCommand,
  validateCommand,
} = require("./util.js");
const {
  MIN_X,
  MIN_Y,
  MAX_X,
  MAX_Y,
  NORTH,
  SOUTH,
  EAST,
  WEST,
  F_LIST,
  LEFT,
  RIGHT,
  MOVE,
  REPORT,
} = require("./constants.js");

const createRobot = () => {
  // initial position of robot, not faciing any direction
  let x = 0;
  let y = 0;
  let f = "";

  let firstPlaceCommandExecuted = false;

  /**
   * Handle move command
   * Move the toy robot one unit forward in the direction it is currently facing.
   * Only can move within 5 x 5 dimension. Discard moves that make the robot falling
   * Y axis is NORTH - SOUTJH, X axis is EAST - WEST
   * Origin 0 x 0 is SOUTH WEST
   */
  const move = () => {
    switch (f) {
      case NORTH: {
        const t = Number(y) + 1;
        if (t <= MAX_Y) {
          y = t;
        }
        break;
      }
      case SOUTH: {
        const t = Number(y) - 1;
        if (t >= MIN_Y) {
          y = t;
        }
        break;
      }
      case EAST: {
        const t = Number(x) + 1;
        if (t <= MAX_X) {
          x = t;
        }
        break;
      }
      case WEST: {
        const t = Number(x) - 1;
        if (t >= MIN_X) {
          x = t;
          break;
        }
      }
    }
  };

  /**
   * rotate the robot 90 degrees to the left without changing the position of the robot
   */
  const left = () => {
    switch (f) {
      case NORTH:
        f = WEST;
        break;
      case SOUTH:
        f = EAST;
        break;
      case EAST:
        f = NORTH;
        break;
      case WEST:
        f = SOUTH;
        break;
    }
  };

  /**
   * rotate the robot 90 degrees to the right without changing the position of the robot
   */
  const right = () => {
    switch (f) {
      case NORTH:
        f = EAST;
        break;
      case SOUTH:
        f = WEST;
        break;
      case EAST:
        f = SOUTH;
        break;
      case WEST:
        f = NORTH;
        break;
    }
  };

  /**
   * Handle place command
   * PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
   * The origin (0,0) can be considered to be the SOUTH WEST most corner.
   * @param {} x
   * @param {*} y
   * @param {*} f
   */
  const place = (toX, toY, toF) => {
    if (toX >= MIN_X && toX <= MAX_X) {
      x = toX;
    }
    if (toY >= MIN_Y && toY <= MAX_Y) {
      y = toY;
    }
    if (F_LIST.includes(toF)) {
      f = toF;
    }
  };

  /**
   * Handle report command
   * Log out position and facing direction of the robot
   */
  const report = () => {
    log(`Robot at position: ${x}, ${y}, ${f}`);
  };

  /**
   * Entry point to execute a command
   */
  const execute = (command) => {
    switch (command) {
      case MOVE: {
        move();
        break;
      }
      case LEFT: {
        left();
        break;
      }
      case RIGHT: {
        right();
        break;
      }
      case REPORT: {
        report();
        break;
      }
      default: {
        // place command
        const parsedResult = parsePlaceCommand(command);
        if (parsedResult) {
          const [toX, toY, toF] = parsedResult;
          place(toX, toY, toF);
        }
      }
    }
  };

  /**
   * Get current position and facing direction of the robot
   */
  const getCurrentPostion = () => {
    return {
      x: Number(x),
      y: Number(y),
      f,
    };
  };

  /**
   * The first command the robot to execute must be a valid PLACE command
   * Discard all commands until a valid PLACE command has been executed.
   * Subsequent commands after 1st PLACE command will be executed if command is valid
   */
  const executeCommand = (command) => {
    if (!firstPlaceCommandExecuted) {
      const validPlaceCommand = validatePlaceCommand(command);
      if (validPlaceCommand) {
        // 1st valid PLACE command, so execute it
        execute(command);
        firstPlaceCommandExecuted = true;
      }
    } else {
      const validCommand = validateCommand(command);

      // execute subsequent valid commands after 1st PLACE command
      if (validCommand) {
        execute(command);
      }
    }
  };

  return {
    getCurrentPostion,
    executeCommand,
  };
};

module.exports = createRobot;
