import { describe, expect, test, it } from "@jest/globals";
import { expectTypeOf } from 'expect-type'

import { makeTypeInstance, tuple } from './types'

/**
 * Example in 'Programming TypeScript' - 6. Advanced Types - Conditional Types
 */
type IsString<T> = T extends string ? true : false

describe('types', () => {
  test('makeTypeInstance', () => {
    let a = makeTypeInstance<string>()
    expectTypeOf(a).toEqualTypeOf<string>()

    let b = makeTypeInstance<number>()
    expectTypeOf(b).toEqualTypeOf<number>()

    let c = makeTypeInstance<string | number>()
    expectTypeOf(c).toEqualTypeOf<string | number>()

    expectTypeOf(makeTypeInstance<object>()).toEqualTypeOf<object>()
  })


  //
  // relationship between types
  //

  //
  // object types
  //
  // type operators
  // Record type
  // mapped types
})

//
// conditional types
//
describe('conditional types', () => {
  it('basisc usage', () => {
    type A = IsString<string>
    type B = IsString<number>

    let a: A = true // TODO: assertions on types!!!
    let b: B = false
    expectTypeOf(a).toEqualTypeOf(true)
    expectTypeOf(b).toEqualTypeOf(false)
  })

  it('distibutive conditionals', () => {
    type ToArray<T> = T[]
    type A = ToArray<number>
    type B = ToArray<number | string>
    expectTypeOf<A>().toEqualTypeOf<number[]>()
    expectTypeOf<B>().toEqualTypeOf<(number | string)[]>()

    type ToArray2<T> = T extends unknown ? T[] : T[]
    type A2 = ToArray2<number>
    type B2 = ToArray2<number | string>
    expectTypeOf<A2>().toEqualTypeOf<number[]>()
    expectTypeOf<B2>().toEqualTypeOf<number[] | string[]>()

    type Without<T, U> = T extends U ? never : T
    type AWithout = Without<boolean | number | string, boolean>
    expectTypeOf<AWithout>().toEqualTypeOf<number | string>()
    // compute step
    type AWithout2 = Without<boolean, boolean> | Without<number, boolean> | Without<string, boolean>
    expectTypeOf<AWithout2>().toEqualTypeOf<number | string>()
  })

  it('the infer keyword', () => {
    // get the type of an array's elements
    type ElementType<T> = T extends unknown[] ? T[number] : T // what does T[number] mean???
    type A = ElementType<number[]>
    expectTypeOf<A>().toEqualTypeOf<number>()
    expectTypeOf<ElementType<string>>().toEqualTypeOf<string>()
    // rewrite with infer
    type ElementType2<T> = T extends (infer U)[] ? U : T
    type B = ElementType2<number[]>
    expectTypeOf<B>().toEqualTypeOf<number>()

    // get second argument type of a function
    type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never
    type F = typeof Array['prototype']['slice']
    type FSA = SecondArg<F>
    expectTypeOf<FSA>().toEqualTypeOf<number | undefined>()
  })

  it('built-in conditional types', () => {
    // Exclude<T, U>: compute types in T that are not in U
    type A1 = number | string
    type B1 = string
    expectTypeOf<Exclude<A1, B1>>().toEqualTypeOf<number>()

    // Extract<T, U>: compute types in T that can assign to U
    type A2 = number | string
    type B2 = string
    expectTypeOf<Extract<A2, B2>>().toEqualTypeOf<string>()

    // NonNullable<T>: compute types from T that excludes `null` and `undefined`
    type A3 = { a?: number | null }
    expectTypeOf<NonNullable<A3['a']>>().toEqualTypeOf<number>()

    // ReturnType<F>: compute a function's return type
    type F = (a: number) => string
    expectTypeOf<ReturnType<F>>().toEqualTypeOf<string>()

    // InstanceType<C>: compute the instance type of a class constructor
    type A4 = { new(): B4 }
    type B4 = { b: number }
    expectTypeOf<InstanceType<A4>>().toEqualTypeOf<B4>()
    expectTypeOf<InstanceType<A4>>().toEqualTypeOf<{ b: number }>()
  })
})

describe('escape Hatches', () => {
  it('type assertions', () => {
    function formatInput(input: string) {
    }
    function getUserInput(): string | number {
      // return Math.random() > 0.5 ? "1" : 1
      return 1
    }
    let input = getUserInput()
    // Argument of type 'string | number' is not assignable to parameter of type 'string'.
    // formatInput(input)
    formatInput(input as string) // preferred syntax for type assertions
    formatInput(<string> input) // legacy syntax

    function addToList(list: string[], item: string) {
    }
    // Argument of type 'string' is not assignable to parameter of type 'string[]'.
    // addToList('this is really,', 'really unsafe')
    addToList('this is really,' as any, 'really unsafe')
  })

  it('nonnull assertions', () => {
    type Dialog = {
      id?: string
    }

    class MockNode {
      removeChild(e: MockElement) { }
    }
    class MockElement {
      constructor(readonly parentNode: MockNode | null) { }
    }
    function mockGetElementById(id: string): MockElement | null {
      return new MockElement(new MockNode)
    }

    function closeDialog(dialog: Dialog) {
      if (!dialog.id) {
        return
      }

      removeFromDOM(dialog, mockGetElementById(dialog.id!)!) // !
    }

    function removeFromDOM(dialog: Dialog, element: MockElement) {
      element.parentNode!.removeChild(element) // !
      delete dialog.id
    }

    closeDialog({ id: '1' })
    closeDialog({})


    // refactor
    type VisibleDialog = { id: string }
    type DestroyedDialog = {}
    type Dialog2 = VisibleDialog | DestroyedDialog
    function closeDialog2(dialog: Dialog2) { // TODO: what to do with same named functions
      if (!('id' in dialog)) {
        return
      }

      // now dialog is VisibleDialog
      removeFromDOM2(dialog, mockGetElementById(dialog.id)!) // !
    }

    function removeFromDOM2(dialog: VisibleDialog, element: MockElement) {
      element.parentNode!.removeChild(element) // !
      // The operand of a 'delete' operator must be optional.
      // delete dialog.id
    }
  })

  it('definite assignment assertions', () => {
    // let userId: string
    let userId!: string // !
    fetchUser()

    // Variable 'userId' is used before being assigned.ts(2454)
    userId.toUpperCase()

    function fetchUser() {
      userId = 'Alice'
    }
  })
})

describe('simulating nomial types', () => {
  it('type branding', () => {
    type CompanyId = string & { readonly brand: unique symbol } // make unique
    type OrderId = string & { readonly brand: unique symbol }
    type UserId = string & { readonly brand: unique symbol }
    type ID = CompanyId | OrderId | UserId

    function CompanyId(id: string) {
      return id as CompanyId
    }
    function OrderId(id: string) {
      return id as OrderId
    }
    function UserId(id: string) {
      return id as UserId
    }

    function queryForUser(id: UserId) {
    }

    let companyId = CompanyId('c001')
    let orderId = OrderId('o001')
    let userId = UserId('u001')
    queryForUser(userId)
    // Argument of type 'CompanyId' is not assignable to parameter of type 'UserId'.
    //   Type 'CompanyId' is not assignable to type '{ readonly brand: unique symbol; }'.
    //     Types of property 'brand' are incompatible.
    //       Type 'typeof brand' is not assignable to type 'typeof brand'. Two different types with this name exist, but they are unrelated.
    // queryForUser(companyId) 
  })
})

describe('Prototypes', () => {
  it('Array.zip', () => {
    let a = [1, 2, 3]
      .map(n => n * 2)
      .zip(['a', 'b', 'c'])
    expectTypeOf(a).toEqualTypeOf<[number, string][]>()
    expect(a).toEqual([[2, 'a'], [4, 'b'], [6, 'c']])
  })
})