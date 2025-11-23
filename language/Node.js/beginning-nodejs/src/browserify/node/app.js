const foo = require('./foo')
const bar = require('./bar')

foo()
bar.log()

module.exports = {
  amd: function() {
    foo()
    bar.log()
  }
}

console.log(module.exports)