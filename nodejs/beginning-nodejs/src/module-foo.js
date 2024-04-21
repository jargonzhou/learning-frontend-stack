// ========================================================
// a module export function and object
// ========================================================

const a = () => console.log('a called')
const b = function () {
  console.log('b called')
}

module.exports = {
  foo: function () {
    console.log('a function in file foo')
  },
  something: 123,
  factory: function () {
    return {
      something: 3
    }
  },
  a: a,
}

module.exports.b = b
module.exports.c = function () {
  console.log('c called')
}
exports.d = function () {
  console.log('d called')
}

console.log('module-foo module.exports', module.exports)
console.log('module-foo exports', exports)