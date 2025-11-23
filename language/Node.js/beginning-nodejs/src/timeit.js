/**
 * Timing functions.
 * @param {Function} func 
 * @param  {any} arg
 * @returns func(arg)
 */
function timeit(func, arg) {
  console.time("timeit")
  const r = func(arg)
  console.timeEnd("timeit")
  return r
}

module.exports = timeit
