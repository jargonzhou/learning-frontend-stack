module.exports.c = function () {
  console.log('c called')
}
exports.d = function () {
  console.log('d called')
}

// keep what is exported close to its definition
const e = exports.e = function () {
  console.log('e called')
}

console.log('module-foo2 module.exports', module.exports)
console.log('module-foo2 exports', exports)