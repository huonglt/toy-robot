const readline = require("readline");
const createRobot = require("./robot.js");
const { log } = require("./util.js");

/**
 * To play game via console
 */
const playConsoleGame = () => {
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
      log("Thanks for playing Toy - Robot game!");
      process.exit(0);
    });

    /**
     * Recursively read user command until user press Ctrl + C to exit
     * Pass command to robot to execute
     */
    const recursiveReadCommand = () => {
      rl.question("Command: ", (command) => {
        robot.executeCommand(command);

        recursiveReadCommand();
      });
    };

    log(`----Press Ctrl + C to exit----`);
    recursiveReadCommand();
  };

  // prompt user to start the game
  promptUserForCommand();
};

module.exports = playConsoleGame;
