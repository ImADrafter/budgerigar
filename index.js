#!/usr/bin/env node
"use strict";

const fs = require("fs");
const [, , ...cliArgs] = process.argv;

const color = {
  reset: "\x1b[0m",
  yellow: "\x1b[33m",
  reverse: "\x1b[7m"
};

const isTypescriptTemplate = cliArgs.includes("--typescript");

const typescriptParser = "@typescript-eslint/parser";

const config = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  env: { commonjs: true },
  parserOptions: { ecmaVersion: 2020, sourceType: "module" },
  parser: isTypescriptTemplate ? typescriptParser : undefined
};

const data = JSON.stringify(config);

fs.writeFile(".eslintrc", data, error => {
  if (error) throw error;
  console.log("🐤  eslint config file has been properly generated.");
  if (isTypescriptTemplate) {
    console.info(
      color.yellow,
      "⚠ Since you selected the typescript template, remember to install the default parser, with the following command",
      color.reset
    );
    console.log(color.reverse, "npm i " + typescriptParser, color.reset);
  }
});
