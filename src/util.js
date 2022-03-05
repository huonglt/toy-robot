/**
 * PLACE command regression expression of format PLACE X,Y,F
 * Where X, Y is number from 0-4, F can be either NORTH, SOUTH, EAST, WEST
 */
const PLACE_COMMAND_REG_EX =
  /^(PLACE) ([0-4]),([0-4]),(NORTH|WEST|EAST|SOUTH)$/;

/**
 * Validate command input
 * Valid command are: MOVE, LEFT, RIGHT, REPORT, PLACE X,Y,F
 */
const validateCommand = (command) => {
  if (
    command === "MOVE" ||
    command === "LEFT" ||
    command === "RIGHT" ||
    command === "REPORT"
  ) {
    return true;
  }

  return validatePlaceCommand(command);
};

/**
 * Validate Place command of format PLACE X,Y,F
 * Where X, Y is number from 0-4, F can be either NORTH, SOUTH, EAST, WEST
 */
const validatePlaceCommand = (command) => PLACE_COMMAND_REG_EX.test(command);

/**
 * Parse the PLACE command to extract [x, y, f]
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

module.exports = {
  validateCommand,
  validatePlaceCommand,
  parsePlaceCommand,
  log,
};
