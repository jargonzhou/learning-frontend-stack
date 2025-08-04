# JavaScript example

setup:
```shell
$ npm init
```

Jest setup:
```shell
$ npm install --save-dev jest
# https://jestjs.io/docs/getting-started#type-definitions
$ npm install --save-dev @jest/globals
$ npm init jest@latest

Need to install the following packages:
create-jest@30.0.5
Ok to proceed? (y)

> example@1.0.0 npx
> create-jest

√ It seems that you already have a jest configuration, do you want to override it? ... yes

The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » node
√ Do you want Jest to add coverage reports? ... no
√ Which provider should be used to instrument code for coverage? » babel
√ Automatically clear mock calls, instances, contexts and results before every test? ... no

✏️  Modified D:\workspace\github\learning-frontend-stack\javascript\example-js\package.json

📝  Configuration file created at jest.config.mjs

$ npm install --save-dev babel-jest @babel/core @babel/preset-env
$ touch babel.config.js

# ref: https://jestjs.io/docs/ecmascript-modules
# jest.config.mjs: transform: {},

# https://github.com/kentcdodds/cross-env
$ npm install --save-dev cross-env
# package.json: 
#   "type": "module"
#   "test": "cross-env NODE_OPTIONS=\"$NODE_OPTIONS --experimental-vm-modules\" npx jest"

# DOM test
npm install --save-dev jest-environment-jsdom
# file scope:
# /**
#  * @jest-environment jsdom
#  */

# run test:
$ npm run test
# or: use VS Code 'Jest' extension
```