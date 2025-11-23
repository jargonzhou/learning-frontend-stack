// ========================================================
// AMD: async module definition
// RequireJS client-side application entrypoint
// ========================================================
console.log('Hello RequireJS!')

define(['./foo', './bar'], function(foo, bar) {
  foo()
  bar.log()
})