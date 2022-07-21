#!/usr/bin/env node

const { spawn } = require("child_process");

const TEMPLATE_URL = `https://github.com/AckeeCZ/next-app-template`;

spawn("yarn", ["create", "next-app", `--example=${TEMPLATE_URL}`], {
  stdio: "inherit",
});
