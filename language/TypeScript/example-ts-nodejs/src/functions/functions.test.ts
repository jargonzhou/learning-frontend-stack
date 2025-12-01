import { describe, expect, test } from "@jest/globals";
import { expectTypeOf } from 'expect-type'

import { tuple, isString } from './functions'

describe("advenced function types", () => {
  test('type inference for tuples', () => {
    let a = [1, true]
    expectTypeOf(a).toEqualTypeOf<(number | boolean)[]>()
    expect(typeof a).not.toBe('(number | boolean)[]')
    expect(typeof a).toBe('object')

    let a2 = tuple(1, true)
    expectTypeOf(a2).toEqualTypeOf<[number, boolean]>()
  })

  test('user-defined type guard', () => {
    function parseInput(input: string | number) {
      let formattedInput: string
      // if (isStringX(input)) {
      //   formattedInput = input.toUpperCase() // Property 'toUpperCase' does not exist on type 'string | number'.
      // }
      if (isString(input)) {
        formattedInput = input.toUpperCase()
      }
    }
  })
})