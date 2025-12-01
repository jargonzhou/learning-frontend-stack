# nvm
* https://github.com/nvm-sh/nvm
* https://github.com/coreybutler/nvm-windows

> Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions

```shell
$ nvm version
1.2.2
$ nvm arch
System Default: 64-bit.
Currently Configured: 64-bit.

$ nvm list available

$ nvm npm_mirror https://npmmirror.com/mirrors/npm/
$ nvm node_mirror https://npmmirror.com/mirrors/node/
```

install

```shell
nvm install v18.20.8
nvm use 18.20.8
# output: Now using node v18.20.8 (64-bit)
node --version
# output: v18.20.8
npm --version
# output: 10.8.2

nvm install v24
```