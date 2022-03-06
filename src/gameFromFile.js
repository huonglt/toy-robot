const path = require("path");
const fs = require("fs");
const readline = require("readline");
const createRobot = require("./robot.js");

const playGameWithDataFromFile = () => {
  const filename = path.resolve(__dirname, "../data/data.txt");
  const readStream = fs.createReadStream(filename);
  const commands = [];

  const lineReader = readline.createInterface({
    input: readStream,
  });

  lineReader.on("line", (line) => {
    console.log("Line from file:", line);
    commands.push(line);
  });

  lineReader.on("close", () => {
    console.log(`close event. commands = ${JSON.stringify(commands)}`);
  });
};

module.exports = playGameWithDataFromFile;
