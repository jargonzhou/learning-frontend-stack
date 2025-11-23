# beginning-nodejs

> 'Beginning Node.js, 2014'

```shell
✗ npm init -y
✗ npm i -D nodemon
# Jest
# ✗ npm install --save-dev jest
# Mocha
✗ npm install --save-dev mocha
# Chai
✗ npm install --save-dev chai
✗ npm install chai-datetime --save-dev

# convert Node.js code into browser code
✗ npm install browserify --save-dev

# VSCode Debugging: https://code.visualstudio.com/docs/nodejs/nodejs-debugging

✗ npm run dev
```
- Mocha: [example](./test/mocha.test.js)
- Chai: [example](./test/chai.test.mjs)
- module: 
  - [module exports](./src/module-call.js)
  - [module folder](./src/module-f/index.js)
- AMD:
  - [RequireJS](./src/amd/index.html) 
  - [Browserify](./src/browserify/index.html)