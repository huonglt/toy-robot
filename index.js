const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveReadLine = function () {
  rl.question("Command: ", function (answer) {
    if (answer == "exit")
      //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    console.log('Got it! Your answer was: "', answer, '"');
    recursiveReadLine(); //Calling this function again to ask new question
  });
};

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});

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
  recursiveReadLine();
};

main();
