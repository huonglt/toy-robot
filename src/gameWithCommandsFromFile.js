const path = require("path");
const fs = require("fs");
const readline = require("readline");
const { once } = require("events");
const createRobot = require("./robot.js");

/**
 * Text file containing commands
 */
const commandFile = path.resolve(__dirname, "../data/data.txt");

/**
 * Read commands from data.txt file in the repo
 */
const readCommandsFromFile = async (commandFile) => {
  const readStream = fs.createReadStream(commandFile);
  const arr = [];
  try {
    const rl = readline.createInterface({
      input: readStream,
    });

    rl.on("line", (line) => arr.push(line));

    await once(rl, "close");
  } catch (err) {
    console.error(err);
  } finally {
    return arr;
  }
};

/**
 * Play game with commands from data.txt file in the repo
 */
const playGameWithCommandsFromFile = async () => {
  try {
    const commands = await readCommandsFromFile(commandFile);
    if (commands) {
      const robot = createRobot();
      commands.forEach((command) => {
        robot.executeCommand(command);
      });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = playGameWithCommandsFromFile;
