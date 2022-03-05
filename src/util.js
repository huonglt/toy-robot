/**
 * Validate command enter by user
 * valid command are: MOVE, LEFT, RIGHT, REPORT, PLACE X,Y,F
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

const validatePlaceCommand = (command) => {
  /**
   * validate PLACE command with regression expression
   * valid format: PLACE X,Y,F
   */
  const regEx = /^(PLACE) ([0-4]),([0-4]),(NORTH|WEST|EAST|SOUTH)$/;
  return regEx.test(command);
};

const parsePlaceCommand = (command) => {
  const regEx = /^(PLACE) ([0-4]),([0-4]),(NORTH|WEST|EAST|SOUTH)$/;
  const result = regEx.exec(command);
  if (result) {
    return [result[2], result[3], result[4]];
  }
  return null;
};

module.exports = {
  validateCommand,
  validatePlaceCommand,
  parsePlaceCommand,
};
