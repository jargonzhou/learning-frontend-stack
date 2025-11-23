// ========================================================
// Mocha tests
// ref: https://mochajs.org/
// ========================================================
const assert = require('assert')
const timeit = require('../src/timeit')

/**
 * Fibonacci.
 * @param {number} n 
 * @returns n-th fibonacci number
 */
function fibonacci(n) {
  if (n < 2) return 1;
  else return fibonacci(n - 2) + fibonacci(n - 1)
}

/**
 * Sum of numbers.
 * @param {[number]} ns 
 * @returns sum of ns
 */
function add(ns) {
  return ns.reduce((acc, curr) => acc + curr, 0)
}

describe('timeit', function () {
  it('fibonacci', function () {
    assert.equal(timeit(fibonacci, 10), 89, 'fibonacci(10) should equal to 89')
  })
  it('add', function () {
    assert.equal(timeit(add, [1, 2]), 3, 'add([1,2]) should equal to 3')
  })
})

// ========================================================
// Mocha hooks
// ========================================================
describe('our test suite', function () {
  var testExecuting = 0

  beforeEach(function () {
    testExecuting++
  })

  it('test 1', function () {
    assert.equal(1, 1, 'this hould be test 1')
  })

  it('test 2', function () {
    assert.equal(2, 2, 'this hould be test 2')
  })
})

// ========================================================
// single test runs and exclusion
// ========================================================
// // only
// describe.only('first', function () {
//   it('test 1', function () { })
// })
// describe('second', function () {
//   it('test 1', function () { })
// })

// describe('first', function () {
//   it('test 1', function () { })
// })
// // skip
// describe.skip('second', function () {
//   it('test 1', function () { })
// })
// describe('third', function () {
//   it('test 1', function () { })
// })

// ========================================================
// async testing
// ========================================================
function simulateAsync(cb) {
  setTimeout(function() {
    cb(new Error('async task fail'))
  }, 500)
}

describe('our async test suite', function() {
  it('this should pass', function(done) { // done argument
    setTimeout(function() {
      done() // done(null)
    }, 500)
  })
  it ('this should fail', function(done) {
    setTimeout(function() {
      done(new Error('fail'))
    }, 500)
  })
  it('test simulateAsync should fail', function(done) {
    simulateAsync(function(err) {
      if (err) done(err)
      else done()
    })
  })
})

// ========================================================
// testing promises
// ========================================================
const {readFile} = require('fs/promises')
describe('readFile promises', function() {
  it ('should pass', function() {
    return readFile('test/mocha.test.js') // return promise
  })
  it ('should fail', function() {
    return readFile('test/non-exist.test.js')
  })
})

