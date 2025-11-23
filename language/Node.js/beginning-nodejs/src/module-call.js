// ========================================================
// a module use another module
// ========================================================

const { foo, something, factory } = require('./module-foo')
const moduleFoo = require("./module-foo")
const moduleFoo2 = require("./module-foo2")
// import module foler
const moduleF = require('./module-f/index')

foo()
console.log('something is', something)

const f = factory()
console.log('f.something is', f.something)

moduleFoo.a()
moduleFoo.b()
moduleFoo.c()
// moduleFoo.d() // TypeError: moduleFoo.d is not a function

moduleFoo2.c()
moduleFoo2.d()
moduleFoo2.e()

moduleF.foo.a()
moduleF.bar.a()
moduleF.bar.b()

// ========================================================
// Outputs
// ========================================================

// module-foo module.exports {
//   foo: [Function: foo],
//   something: 123,
//   factory: [Function: factory],
//   a: [Function: a],
//   b: [Function: b],
//   c: [Function (anonymous)]
// }
// module-foo exports { d: [Function (anonymous)] }
// module-foo2 module.exports {
//   c: [Function (anonymous)],
//   d: [Function (anonymous)],
//   e: [Function (anonymous)]
// }
// module-foo2 exports {
//   c: [Function (anonymous)],
//   d: [Function (anonymous)],
//   e: [Function (anonymous)]
// }
// a function in file foo
// something is 123
// f.something is 3
// a called
// b called
// c called
// c called
// d called
// e called
// foo a called
// bar a called
// bar a called