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
  const regEx = /^PLACE [0-4],[0-4],(NORTH|WEST|EAST|SOUTH)$/;
  return regEx.test(command);
};

module.exports = {
  validateCommand,
  validatePlaceCommand,
};
