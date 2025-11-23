# webpack
* https://webpack.js.org/
* https://github.com/webpack/webpack

> Webpack is **a module bundler**. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
> A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.
>
> At its core, webpack is **a static module bundler for modern JavaScript applications**. When webpack processes your application, it internally **builds a dependency graph from one or more entry points** and then **combines every module your project needs into one or more bundles**, which are **static assets** to serve your content from.

Actions
* [ex-webpack5](./ex-webpack5/README.md): getting started

* [Getting Started](https://webpack.js.org/guides/getting-started)
```shell
npm install webpack webpack-cli --save-dev
npx webpack
npx webpack --config webpack.config.js
```

# Concepts
* https://webpack.js.org/concepts/

# Configurations
* [Concepts > Configuration](https://webpack.js.org/concepts/configuration/)
	- Introductory Configuration
	- Multiple Targets
	- Using other Configuration Languages

webpack.config.js
```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
};
```

* [Configuration](https://webpack.js.org/configuration)
	- [createapp.dev](https://createapp.dev/webpack) is an online tool for creating custom webpack configurations. It allows you to select various features that will be combined and added to the resulting configuration file. Also, it generates an example project based on provided webpack configuration that you can review in your browser and download.
	- Use a different configuration file
	- [Set up a new webpack project](https://webpack.js.org/configuration/#set-up-a-new-webpack-project)

package.json
```json
"scripts": {
  "build": "webpack --config prod.config.js"
}
```
```shell
npx webpack init
```



# Awesome webpack
* https://webpack.js.org/awesome-webpack/

# See Also
* alternatives: Parcel, Rollup