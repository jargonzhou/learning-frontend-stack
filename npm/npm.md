# NPM
* https://github.com/npm
* [An introduction to the npm package manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager): Node.js

> npm, Inc. is a company founded in 2014, and was acquired by GitHub in 2020. npm is a critical part of the JavaScript community and helps support one of the largest developer ecosystems in the world.
> 
> npm is lots of things.
>
> - npm is **the package manager for Node.js**. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.
> 
> - **The npm Registry** is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community.
>
> - npm is **the command line client** that allows developers to install and publish those packages.

## `package.json`
* https://docs.npmjs.com/cli/v11/configuring-npm/package-json

## CLI
* [npx](https://docs.npmjs.com/cli/v10/commands/npx): Run a command from a local or remote npm package

```shell
# init project
npm init
```

## Tools
* [nvm](https://github.com/nvm-sh/nvm): Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions
* [node-framework-stars](https://github.com/vanodevium/node-framework-stars): A list of popular GitHub projects related to Node.js web frameworks (ranked by stars)

## FAQ
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