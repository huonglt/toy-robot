const { parsePlaceCommand, log } = require("./util.js");
import {
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
} from "./constants.js";

const createRobot = () => {
  // initial position of robot, not faciing any direction
  let x = 0;
  let y = 0;
  let f = "";

  /**
   * Handle move command
   * Move the toy robot one unit forward in the direction it is currently facing.
   * Only can move within 5 x 5 dimension. Discard moves that make the robot falling
   */
  const move = () => {
    switch (f) {
      case NORTH: {
        if (y - 1 >= MIN_Y) {
          y = y - 1;
        }
        break;
      }
      case SOUTH: {
        if (y + 1 >= MAX_Y) {
          y = y + 1;
        }
        break;
      }
      case EAST: {
        if (x + 1 <= MAX_X) {
          x = x + 1;
        }
        break;
      }
      case WEST: {
        if (x - 1 >= MIN_X) {
          x = x - 1;
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
  const executeCommand = (command) => {
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
        const [toX, toY, toF] = parsePlaceCommand(command);
        place(toX, toY, toF);
      }
    }
    report();
  };

  return {
    executeCommand,
  };
};

module.exports = createRobot;
