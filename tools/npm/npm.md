# npm
* https://docs.npmjs.com/
* https://github.com/npm

> JavaScript Package Manager, Registry & Website
> 
> npm, Inc. is a company founded in 2014, and was acquired by GitHub in 2020. npm is a critical part of the JavaScript community and helps support one of the largest developer ecosystems in the world.
> 
> npm is lots of things.
>
> - npm is **the package manager for Node.js**. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.
> 
> - **The npm Registry** is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community.
>
> - npm is **the command line client** that allows developers to install and publish those packages.


# CLI

## CLI Commands
* https://docs.npmjs.com/cli/v11/commands/npm

| Command             | Description                                      |
| :------------------ | :----------------------------------------------- |
| npm                 |                                                  |
| npm access          |                                                  |
| npm adduser         |                                                  |
| npm audit           |                                                  |
| npm bugs            |                                                  |
| npm cache           |                                                  |
| npm ci              |                                                  |
| npm completion      |                                                  |
| npm config          |                                                  |
| npm dedupe          |                                                  |
| npm deprecate       |                                                  |
| npm diff            |                                                  |
| npm dist-tag        |                                                  |
| npm docs            |                                                  |
| npm doctor          |                                                  |
| npm edit            |                                                  |
| npm exec            |                                                  |
| npm explain         |                                                  |
| npm explore         |                                                  |
| npm find-dupes      |                                                  |
| npm fund            |                                                  |
| npm help            |                                                  |
| npm help-search     |                                                  |
| npm init            | init project                                     |
| npm install         |                                                  |
| npm install-ci-test |                                                  |
| npm install-test    |                                                  |
| npm link            |                                                  |
| npm login           |                                                  |
| npm logout          |                                                  |
| npm ls              |                                                  |
| npm org             |                                                  |
| npm outdated        |                                                  |
| npm owner           |                                                  |
| npm pack            |                                                  |
| npm ping            |                                                  |
| npm pkg             |                                                  |
| npm prefix          |                                                  |
| npm profile         |                                                  |
| npm prune           |                                                  |
| npm publish         |                                                  |
| npm query           |                                                  |
| npm rebuild         |                                                  |
| npm repo            |                                                  |
| npm restart         |                                                  |
| npm root            |                                                  |
| npm run             |                                                  |
| npm sbom            |                                                  |
| npm search          |                                                  |
| npm shrinkwrap      |                                                  |
| npm star            |                                                  |
| npm stars           |                                                  |
| npm start           |                                                  |
| npm stop            |                                                  |
| npm team            |                                                  |
| npm test            |                                                  |
| npm token           |                                                  |
| npm undeprecate     |                                                  |
| npm uninstall       |                                                  |
| npm unpublish       |                                                  |
| npm unstar          |                                                  |
| npm update          |                                                  |
| npm version         |                                                  |
| npm view            |                                                  |
| npm whoami          |                                                  |
| npx                 | Run a command from a local or remote npm package |

* npx
```shell
$ npx tsc --version
Version 5.8.3
$ npm exec -- tsc --version
Version 5.8.3
```

## Configuring npm
* https://docs.npmjs.com/cli/v11/configuring-npm/install

### `.npmrc`

topics
- Install
- Folders
- `.npmrc`
- `npm-shrinkwrap.json`
- `package.json`
- `package-lock.json`


```shell
# change npm-cache directory
# $ npm config ls -l
cache = "D:\\software\\npm-cache"
```

### `package.json`
* https://docs.npmjs.com/cli/v11/configuring-npm/package-json

## Using npm
* https://docs.npmjs.com/cli/v11/using-npm/registry

topics
- Registry
- Package spec
- Config
- Logging
- Scope
- Scripts
- Workspaces
- Organizations
- Dependency Selectors
- Developers
- Removal

# Tools
* [node-framework-stars](https://github.com/vanodevium/node-framework-stars): A list of popular GitHub projects related to Node.js web frameworks (ranked by stars)

# See Also
* [An introduction to the npm package manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager): Node.js

# FAQ
* [Resolving EACCES permissions errors when installing packages globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)
* [Npm ERR! Invalid version on npm install](https://stackoverflow.com/questions/71383116/npm-err-invalid-version-on-npm-install)
```shell
rm -rf npm_modules
rm -rf package.json.lock
npm cache clean --force
```
* [cnpm](https://npmmirror.com/): npmmirror 镜像站.
```shell
npm install cnpm -g --registry=https://registry.npmmirror.com

cnpm install
```
* [How to set environment variables from within package.json? - StackOverflow](https://stackoverflow.com/questions/25112510/how-to-set-environment-variables-from-within-package-json)
  * [cross-env](https://www.npmjs.com/package/cross-env)