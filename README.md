# create-ackee-next-app

## Usage

1. `corepack enable`
2. `yarn dlx create-ackee-next-app`

## Common issues

### Old Yarn version

If you're getting any error staring with `yarn create v1.x`:
1. Make sure to have installed Node `>= v20.11.1`.
2. Enable package manager by calling `corepack enable`. (You need to call this only once per Node version installation).

Corepack will then check `packageManager` field in `package.json` and auto-install given package manager. In our case, it'll install missing yarn@4.x or retrieve it from a cache.

```sh
yarn create v1.22.21
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
warning Your current version of Yarn is out of date. The latest version is "1.22.22", while you're on "1.22.21".
info To upgrade, run the following command:
$ curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
success Installed "create-ackee-next-app@2.0.2" with binaries:
      - create-ackee-next-app
yarn run v1.22.21
error Couldn't find a package.json file in "..."
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
node:internal/errors:932
  const err = new Error(message);
              ^

Error: Command failed: yarn dlx create-next-app --example=https://github.com/AckeeCZ/next-app-template --example-path=template
    at checkExecSyncError (node:child_process:890:11)
    at execSync (node:child_process:962:15)
    at file://.../.config/yarn/global/node_modules/create-ackee-next-app/index.js:8:1
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12) {
  status: 1,
  signal: null,
  output: [ null, null, null ],
  pid: 8395,
  stdout: null,
  stderr: null
}
```
