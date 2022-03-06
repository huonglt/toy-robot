const path = require("path");
const fs = require("fs");
const readline = require("readline");
const { once } = require("events");
const createRobot = require("./robot.js");

const readCommandsFromFile = async () => {
  const filename = path.resolve(__dirname, "../data/data.txt");
  const readStream = fs.createReadStream(filename);
  const arr = [];
  try {
    const rl = readline.createInterface({
      input: readStream,
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      // Process the line.
      arr.push(line);
    });

    await once(rl, "close");

    console.log("File processed.");
  } catch (err) {
    console.error(err);
  } finally {
    return arr;
  }
};
const playGameWithDataFromFile = async () => {
  try {
    const commands = await readCommandsFromFile();
    if (commands) {
      const robot = createRobot();
      commands.forEach((command) => {
        robot.executeCommand(command);
      });
      console.log(JSON.stringify(robot.getCurrentPostion()));
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = playGameWithDataFromFile;
