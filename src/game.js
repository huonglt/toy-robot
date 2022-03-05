const readline = require("readline");
const createRobot = require("./robot.js");
const { validatePlaceCommand, validateCommand } = require("./util.js");

const playGame = () => {
  const robot = createRobot();

  let firstPlaceCommandExecuted = false;

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
            console.log(`==>executing command: ${command}`);
            robot.place(1, 1, "NORTH");
            firstPlaceCommandExecuted = true;
          } else {
            console.log(`==>discard command ${command}`);
          }
        } else {
          // subsequent commands after 1st PLACE command
          const validCommand = validateCommand(command);
          if (validCommand) {
            // robot to execute command
          } else {
            console.log(`==>discard command ${command}`);
          }
        }
        recursiveReadCommand();
      });
    };

    rl.on("close", () => {
      console.log("Toy game exit");
      process.exit(0);
    });

    recursiveReadCommand();
  };

  // run the game
  promptUserForCommand();
};

module.exports = playGame;
