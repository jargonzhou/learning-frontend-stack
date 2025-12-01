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

# Type declarations for Node.js API
npm install --save-dev @types/node

# TypeScript runner
npm install --save-dev tsx

# nodemon
npm install --save-dev nodemon
```


# ESLint for TypeScript
* https://typescript-eslint.io/getting-started

```shell
npm install --save-dev eslint @eslint/js typescript typescript-eslint
## create config
## npm init @eslint/config@latest
touch eslint.config.mjs
# run
npx eslint .
```


# Prettier
* https://prettier.io/docs/configuration

```shell
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

# Jest
* https://jestjs.io/docs/getting-started

```shell
$ npm install -D ts-node


$ npm install --save-dev jest
$ npm init jest@latest
Need to install the following packages:
create-jest@30.2.0
Ok to proceed? (y)

npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

> example-ts-nodejs@1.0.0 npx
> create-jest

The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... yes
√ Choose the test environment that will be used for testing » node
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes

✏️  Modified ...\example-ts-nodejs\package.json

📝  Configuration file created at ...\example-ts-nodejs\jest.config.ts

$ npm install --save-dev ts-jest

$ npx ts-jest config:init
# copy settings in jest.config.js:
# transform: tsJestTransformCfg,
# delete jest.config.js

$ npm install --save-dev @jest/globals

# https://jestjs.io/docs/tutorial-jquery
# https://jestjs.io/docs/configuration#testenvironment-string
$ npm install --save-dev jest-environment-jsdom
```

## expect-type
* https://github.com/mmkal/expect-type

> Compile-time tests for types. Useful to make sure types don't regress into being overly-permissive as changes go in over time.

```shell
npm install expect-type --save-dev
```

## node-redis
* https://github.com/redis/node-redis

```shell
npm install redis
npm install @types/redis --save-dev

# https://testcontainers.com/modules/redis/?language=nodejs
npm install @testcontainers/redis --save-dev
npm install @types/docker-modem --save-dev
```

## ~~jsdom-worker~~
* https://github.com/developit/jsdom-worker

```shell
npm install jsdom-worker --save-dev

npm uninstall jsdom-worker
```

# TODO
- Frontend frameworks: React, Angular