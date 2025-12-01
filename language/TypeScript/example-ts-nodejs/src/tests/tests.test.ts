/**
 * expect-type
 * https://github.com/mmkal/expect-type
 */

import { describe, expect, test } from "@jest/globals";
import { expectTypeOf } from 'expect-type'

describe('expect-type', () => {
  test('expectTypeOf', () => {
    expectTypeOf<number>().toEqualTypeOf<number>()
    expectTypeOf<number | string>().toEqualTypeOf<number | string>()
  })
})