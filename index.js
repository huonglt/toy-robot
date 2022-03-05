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

  const recursiveReadCommand = () => {
    rl.question("Command: ", (command) => {
      if (command == "exit") {
        return rl.close(); //closing RL and returning from function.
      }
      console.log(`command: ${command}`);

      // Calling this function again to prompt for user input command
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
