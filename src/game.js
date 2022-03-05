const readline = require("readline");
const createRobot = require("./robot.js");
const { validatePlaceCommand, validateCommand, log } = require("./util.js");

const playGame = () => {
  const robot = createRobot();

  /**
   * Prompt user for command to play game
   * Press Ctrl + C to exit
   */
  const promptUserForCommand = () => {
    /**
     * set up readline and handle when user press Ctrl + C to exit
     */
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on("close", () => {
      log("Robot game exit");
      process.exit(0);
    });

    let firstPlaceCommandExecuted = false;

    /**
     * Recursively read user command until user press Ctrl + C to exit
     * The first command to the robot to execute must be a valid PLACE command
     * discard all commands until a valid PLACE command has been executed.
     * Subsequent commands after 1st PLACE command will be executed if command is valid
     */
    const recursiveReadCommand = () => {
      rl.question("Command: ", (command) => {
        if (!firstPlaceCommandExecuted) {
          const validPlaceCommand = validatePlaceCommand(command);
          if (validPlaceCommand) {
            // 1st valid PLACE command, so execute it
            robot.executeCommand(command);
            firstPlaceCommandExecuted = true;
          }
        } else {
          // subsequent commands after 1st PLACE command
          const validCommand = validateCommand(command);

          // robot to execute subsequent valid commands
          if (validCommand) {
            robot.executeCommand(command);
          }
        }

        recursiveReadCommand();
      });
    };

    recursiveReadCommand();
  };

  // run the game
  promptUserForCommand();
};

module.exports = playGame;
