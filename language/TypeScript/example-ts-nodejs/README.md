# TypeScript in Node.js

ref examples:

- https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
- https://betterstack.com/community/guides/scaling-nodejs/nodejs-typescript/

```shell
$ node --version
v22.17.0
$ npm --version
10.9.2

npm init -y

# TypeScript compiler: tsc
npm install --save-dev typescript
npx tsc --version

# Configure tsc options
touch tsconfig.json
# tsconfig.json reference
npm install --save-dev @tsconfig/node22

# Type definition for Node.js API
npm install --save-dev @types/node

# TypeScript runner
npm install --save-dev tsx

# nodemon
npm install --save-dev nodemon

# ESLint for TypeScript: https://typescript-eslint.io/getting-started
npm install --save-dev eslint @eslint/js typescript typescript-eslint
## create config
## npm init @eslint/config@latest
touch eslint.config.mjs
# run
npx eslint .

# Prettier: https://prettier.io/docs/configuration
npm install --save-dev prettier
# ignore some files
touch .prettierignore
# run
npx prettier . --write

# Debug: VSCode settings.json
# https://github.com/microsoft/vscode/issues/226906
    // 2025-07-19 tsc not found when build with git-bash
    // "terminal.external.windowsExec": "C:\\Program Files\\Git\\bin\\bash.exe",
    // "terminal.integrated.defaultProfile.windows": "Git Bash",
```
