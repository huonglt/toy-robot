#!/usr/bin/env node
const playConsoleGame = require("./game.js");
const playGameWithCommandsFromFile = require("./gameWithCommandsFromFile.js");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

/**
 * To play game with commands input from consolem use play
 * To play game with commands preloaded from data.txt file, use play -o=file
 */
yargs(hideBin(process.argv))
  .command(
    "play",
    "Play Toy-Robot game",
    () => {},
    (argv) => {
      if (argv.option === "file") {
        playGameWithCommandsFromFile();
      } else {
        playConsoleGame();
      }
    }
  )
  .option("option", {
    alias: "o",
    type: "string",
    description:
      "o=file to play game with commands from file.\nOtherwise will play game via console",
  })
  .parse();
