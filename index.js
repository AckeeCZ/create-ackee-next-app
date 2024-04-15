#!/usr/bin/env node

import { execSync } from "child_process";

const TEMPLATE_URL = `https://github.com/AckeeCZ/next-app-template`;
const TEMPLATE_PATH = "template";

execSync(
  `yarn dlx create-next-app --example=${TEMPLATE_URL} --example-path=${TEMPLATE_PATH}`,
  {
    stdio: "inherit",
  }
);
