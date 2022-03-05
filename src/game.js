const readline = require("readline");
const createRobot = require("./robot.js");
const { validatePlaceCommand } = require("./util.js");

const playGame = () => {
  const robot = createRobot();

  let firstCommandValid = false;

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
        const validPlaceCommand = validatePlaceCommand(command);

        if (!firstCommandValid) {
          const validPlaceCommand = validatePlaceCommand(command);
          if (validPlaceCommand) {
            firstCommandValid = true;
            console.log(`==>executing command: ${command}`);
            robot.place(1, 1, "NORTH");
            console.log(`subsequest command after 1st PLACE valid command`);
          } else {
            console.log(`==>discard command ${command}`);
          }
        } else {
          // subsequent command after 1st PLACE command
          const validCommand = validCommand(command);
          if (validCommand) {
            // robot to execute command
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
