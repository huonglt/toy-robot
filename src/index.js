import * as readline from "readline";
import { validateCommand } from "./util.js";

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
 * Main function to the game
 */
const main = () => {
  promptUserForCommand();
  //const x = validateCommand("MOVE");
  //console.log(`x = ${x}`);
};

main();
