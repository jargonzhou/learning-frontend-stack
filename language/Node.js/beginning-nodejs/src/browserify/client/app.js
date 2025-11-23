// ========================================================
// AMD: async module definition
// RequireJS client-side application entrypoint
// ========================================================
console.log('Hello RequireJS!')

// TODO: how to use the module in browser???
define(['../node/amdmodule'], function(amdmodule) {
  console.log(amdmodule)
})