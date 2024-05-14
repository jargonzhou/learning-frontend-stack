# Example: Bootstrap and Vite

- https://getbootstrap.com/docs/5.3/getting-started/vite/

```shell
npm create vite@latest
√ Project name: ... ex-vite
√ Select a framework: » Vanilla
√ Select a variant: » JavaScript

# generated
|-- counter.js
|-- index.html
|-- javascript.svg
|-- main.js
|-- package.json
|-- public
|   `-- vite.svg
`-- style.css
```

```shell
npm i --save bootstrap @popperjs/core
npm i --save-dev sass

mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js

rm index.html main.js counter.js style.css javascript.svg
# vite.config.js root is 'src'
mv public/ src/
```