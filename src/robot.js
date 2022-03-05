const createRobot = () => {
  // dimension 5 x 5
  const MAX_X = 4;
  const MAX_Y = 4;

  // initial position of robot, not faciing any direction
  let x = 0;
  let y = 0;
  let f = "";

  /**
   * Handle move command
   * Move the toy robot one unit forward in the direction it is currently facing.
   */

  const move = () => {};

  const left = () => {};

  const right = () => {};

  /**
   * Handle place command
   * PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
   * The origin (0,0) can be considered to be the SOUTH WEST most corner.
   * @param {} x
   * @param {*} y
   * @param {*} f
   */
  const place = (x, y, f) => {};

  /**
   * Handle report command
   * Log out position and facing direction of the robot
   */
  const report = () => {
    console.log(`at position: ${x}, ${y}, ${f}`);
  };

  /**
   * Entry point to execute a command
   */
  const executeCommand = (command) => {
    switch (command) {
      case "MOVE": {
        console.log(`calling move function`);
        move();
        break;
      }
      case "LEFT": {
        console.log(`calling left function`);
        left();
        break;
      }
      case "RIGHT": {
        console.log(`calling right function`);
        right();
        break;
      }
      case "REPORT": {
        report();
        break;
      }
      default: {
        // place command
        console.log(`calling place command`);
        place(command);
      }
    }
  };

  return {
    move,
    report,
    place,
    executeCommand,
  };
};

module.exports = createRobot;
