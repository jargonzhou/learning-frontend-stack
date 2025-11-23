# nodemon
* https://nodemon.io/

> nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
>
> nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for `node`. To use `nodemon`, replace the word `node` on the command line when executing your script.

```shell
npm install -g nodemon # or using yarn: yarn global add nodemon

npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
```

* [Sample nodemon.json](https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md)

package.json
```json
"nodemonConfig": {
    "verbose": true,
    "events": {
      "start": "cls || clear"
    },
    "watch": [
      "api"
    ],
    "ext": "js",
    "exec": "cd api && node --inspect=127.0.0.1:9229 server.js"
  }
```
VSCode launch.json
```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  // Node.js debugging in VS Code: https://code.visualstudio.com/docs/nodejs/nodejs-debugging
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to node",
      "type": "node",
      "request": "attach",
      "restart": true,
      "port": 9229
    }
  ]
}
```