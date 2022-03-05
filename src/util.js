/**
 * Validate command enter by user
 * valid command are: MOVE, LEFT, RIGHT, REPORT, PLACE X,Y,F
 */
export const validateCommand = (command) => {
  if (
    command === "MOVE" ||
    command === "LEFT" ||
    command === "RIGHT" ||
    command === "REPORT"
  ) {
    return true;
  }
  /**
   * validate PLACE command with regression expression
   * valid format: PLACE X,Y,F
   */
  const regEx = /^PLACE [0-4],[0-4],(NORTH|WEST|EAST|SOUTH)$/;
  if (regEx.test(command)) {
    return true;
  }
  return false;
};
