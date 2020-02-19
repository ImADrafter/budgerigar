#!/usr/bin/env node
"use stric";

const fs = require("fs");
const [, , ...cliArgs] = process.argv;

// TODO: enable typescript template with proper rules
/*
const flags = { typescript: "--typescript" };
const isTypescriptTemplate = cliArgs[0] === flags.typescript;
*/

const config = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  env: { commonjs: true },
  parserOptions: { ecmaVersion: 2020 }
};

const data = JSON.stringify(config);

fs.writeFile(".eslintrc", data, error => {
  if (error) throw error;
  console.log("🐤  eslint config file has been properly generated.");
});
