const {
  PLACE_COMMAND_REG_EX,
  MOVE,
  LEFT,
  REPORT,
  RIGHT,
} = require("./constants.js");

/**
 * Validate command input
 * Valid command are: MOVE, LEFT, RIGHT, REPORT, PLACE X,Y,F
 * @param {string} command - Command to validate
 * @returns {boolean} - true when command is valid, false otherwise
 */
const validateCommand = (command) => {
  if (
    command === MOVE ||
    command === LEFT ||
    command === RIGHT ||
    command === REPORT
  ) {
    return true;
  }

  return validatePlaceCommand(command);
};

/**
 * Validate Place command of format PLACE X,Y,F
 * Where X, Y is number from 0-4, F can be either NORTH, SOUTH, EAST, WEST
 * @param {string} command - Command to validate
 * @returns {boolean} - true when command is valid PLACE command, false otherwise
 */
const validatePlaceCommand = (command) => PLACE_COMMAND_REG_EX.test(command);

/**
 * Parse the PLACE command to extract [x, y, f]
 * @param {string} command - command to parse
 * @returns [Array, null] - array of [x, y, f] when parsed, null otherwise
 */
const parsePlaceCommand = (command) => {
  const result = PLACE_COMMAND_REG_EX.exec(command);
  if (result) {
    return [result[2], result[3], result[4]];
  }
  return null;
};

/**
 * Log message via console.log
 */
const log = (msg) => console.log(msg);

/**
 * Log error via console.error
 */
const logErr = (err) => console.error(err);

module.exports = {
  validateCommand,
  validatePlaceCommand,
  parsePlaceCommand,
  log,
};
