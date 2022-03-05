// dimension 5 x 5 with origin 0 x 0
const MIN_X = 0;
const MIN_Y = 0;
const MAX_X = 4;
const MAX_Y = 4;

// facing constants
const NORTH = "NORTH";
const SOUTH = "SOUTH";
const EAST = "EAST";
const WEST = "WEST";
const F_LIST = [NORTH, SOUTH, EAST, WEST];

// command constants
const LEFT = "LEFT";
const RIGHT = "RIGHT";
const MOVE = "MOVE";
const REPORT = "REPORT";

/**
 * PLACE command regression expression of format PLACE X,Y,F
 * Where X, Y is number from 0-4, F can be either NORTH, SOUTH, EAST, WEST
 */
const PLACE_COMMAND_REG_EX =
  /^(PLACE) ([0-4]),([0-4]),(NORTH|WEST|EAST|SOUTH)$/;

module.exports = {
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
  PLACE_COMMAND_REG_EX,
};
