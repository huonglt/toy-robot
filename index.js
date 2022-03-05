const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const promptUserForCommand = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const recursiveReadCommand = function () {
    rl.question("Command: ", function (command) {
      if (command == "exit") {
        return rl.close(); //closing RL and returning from function.
      }
      console.log(`command: ${command}`);

      // Calling this function again to prompt for user input command
      recursiveReadCommand();
    });
  };

  rl.on("close", function () {
    console.log("Toy game exit");
    process.exit(0);
  });

  recursiveReadCommand();
};
/* validate command */
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
const main = () => {
  promptUserForCommand();
};

main();
