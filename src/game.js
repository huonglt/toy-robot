const readline = require("readline");
const createRobot = require("./robot.js");
const { validatePlaceCommand, validateCommand } = require("./util.js");

const playGame = () => {
  const robot = createRobot();

  let firstPlaceCommandExecuted = false;

  const log = (msg) => console.log(msg);

  const discardCommand = (command) =>
    log(` ==> invalid command. So discard: ${command}`);

  /**
   * Prompt user for command to play game
   * Type exit to quit
   */
  const promptUserForCommand = () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    /**
     * Recursively read user command until user type exit
     */
    const recursiveReadCommand = () => {
      rl.question("Command: ", (command) => {
        /**
         * the first command to the robot is a PLACE  command,
         * discard all commands in the sequence until a valid PLACE command has been executed.
         */
        if (!firstPlaceCommandExecuted) {
          const validPlaceCommand = validatePlaceCommand(command);
          if (validPlaceCommand) {
            robot.executeCommand(command);
            firstPlaceCommandExecuted = true;
          }
        } else {
          // subsequent commands after 1st PLACE command
          const validCommand = validateCommand(command);
          if (validCommand) {
            // robot to execute command
            robot.executeCommand(command);
          }
        }

        recursiveReadCommand();
      });
    };

    rl.on("close", () => {
      log("Game exit");
      process.exit(0);
    });

    recursiveReadCommand();
  };

  // run the game
  promptUserForCommand();
};

module.exports = playGame;
