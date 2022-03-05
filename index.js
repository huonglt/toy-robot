const readline = require("readline");

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
      if (command == "exit") {
        return rl.close();
      }
      console.log(`command: ${command}`);

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

/**
 * Validate command enter by user
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
  // place
};

/**
 * Main function to the game
 */
const main = () => {
  promptUserForCommand();
};

main();
