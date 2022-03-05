const readline = require("readline");
const createRobot = require("./robot.js");

const playGame = () => {
  const robot = createRobot();
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
        console.log(`command: ${command}`);
        if (command == "exit") {
          return rl.close();
        } else if (command === "REPORT") {
          robot.report();
        }

        // call the recursive function to prompt again
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
