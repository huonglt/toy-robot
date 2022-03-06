#!/usr/bin/env node
const playConsoleGame = require("./game.js");
const playGameWithCommandsFromFile = require("./gameWithCommandsFromFile.js");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

/**
 * Play game with commands from file when -o=file
 * Otherwise play game from standard input
 */
const argv = yargs(hideBin(process.argv)).argv;
if (argv.o === "file") {
  playGameWithCommandsFromFile();
} else {
  playConsoleGame();
}
