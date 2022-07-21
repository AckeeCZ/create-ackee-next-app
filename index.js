#!/usr/bin/env node

const { spawn } = require("child_process");

const TEMPLATE_URL = `https://github.com/AckeeCZ/next-app-template`;
const TEMPLATE_PATH = "template";

spawn(
  "yarn",
  [
    "create",
    "next-app",
    `--example=${TEMPLATE_URL}`,
    `--example-path=${TEMPLATE_PATH}`,
  ],
  {
    stdio: "inherit",
  }
);
