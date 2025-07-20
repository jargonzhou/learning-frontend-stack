# Node.js
* https://nodejs.org/
* [Setting up a Node development environment](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment): MDN, Express

> Node.js® is an open-source, cross-platform JavaScript runtime environment.

```shell
$ node --version                                                                         
v22.17.0
$ npm --version                                                                          
10.9.2
```

## Books
* Syed, Basarat Ali. **Beginning Node.js**. 2014. Apress. `v0.10.26`, CommonJS, RequireJS, NPM
  * core modules: `path`, `fs`, `os`, `util`
  * `EventEmitter`, process events, `Stream`
  * HTTP: `net`, `dgram`, `http`, `https`, `connect` middleware
  * Express
  * `mongodb`, `mongoose` ODM
  * SPA, AngularJS, Bootstrap
  * callback, `async`, Promise `q`
  * debugging: `console`, `debugger`, `node debug`, `node-inspector`
  * testing: `assert`, Mocha, Chai
  * deployment: `forever`, `cluster`, AWS
* Brown, Ethan. **Web Development with Node and Express**. 2019, 2. edition. O'Reilly.
* Thomas Hunter, I. I. **Distributed Systems with Node.js**. 2020. O’Reilly.

## Tools
* [VSCode](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
* [node-config](https://github.com/node-config/node-config): Node.js Application Configuration
* [json-server](https://github.com/typicode/json-server): Get a full fake REST API with zero coding in less than 30 seconds (seriously)
```shell
npm install json-server
```

# Actions
* [beginning-nodejs](./beginning-nodejs/README.md)