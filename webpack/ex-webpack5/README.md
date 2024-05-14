# webpack 5 getting started

- https://webpack.js.org/guides/getting-started

```shell
npm init -y
npm install webpack webpack-cli --save-dev

mkdir src
touch index.html src/index.js

npm install --save lodash

mkdir dist
mv index.html dist/index.html
npx webpack

touch webpack.config.js
npx webpack --config webpack.config.js
```

```shell
npx webpack serve
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
```