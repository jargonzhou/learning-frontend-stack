import { describe, expect, test } from "@jest/globals";
import { a } from './classes'
import { expectTypeOf } from 'expect-type'

// classes, enums generate both a type and a value.
// type: express 'is-a' relationship
// value: at runtime, instantiate it with `new`, call static method on it, do metaprogramming iwth it, operate on it with `instanceof`
class C { }
let c: C // type: Class C. C refer to the instance type of C class
  = new C // value: constructor C()

enum E { F, G }
let e: E // type: enum E
  = E.F // value: enum E

describe("classes", () => {
  test('type, value', () => {
    // contextual term resolution
    expect(a).toBe(1999)
    let x: a = 3
    expect(typeof x).toBe('number')

    // constructor type, instance type
    console.log(typeof C, typeof (new C)) // function, object
  })
})