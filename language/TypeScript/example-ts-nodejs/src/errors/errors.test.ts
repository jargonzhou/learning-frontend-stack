import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from 'expect-type'
import { Option, Some, None } from "../types/types";


/**
 * Example in 'Programming TypeScript' - 7. Handling Errors
 */
describe('Handling Errors', () => {
  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Data]'
      && !Number.isNaN(date.getTime())
  }

  // custom error types
  class InvalidDateFormatError extends RangeError { }
  class DateIsInTheFutureError extends RangeError { }


  it('returning null', () => {
    function parse(birthday: string): Date | null {
      let date = new Date(birthday)
      if (!isValid(date)) {
        return null // return null
      }
      return date
    }

    let date = parse('yyyy-mm-dd')
    if (date) {
      expectTypeOf(date).toEqualTypeOf<Date>()
    } else {
      expect(date).toBeNull()
    }

  })

  it('throwing exceptions', () => {
    /** Parse Birthday.
     * @param birthday the string representation of {@link Date}
     * @returns Date or null
     * @throws {InvalidDateFormatError} incorrect date format
     * @throws {DateIsInTheFutureError} further date
     */
    function parse(birthday: string): Date | null {
      let date = new Date(birthday)
      if (!isValid(date)) {
        throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD') // throw exceptions
      }
      if (date.getTime() > Date.now()) {
        throw new DateIsInTheFutureError('Are you a timeloard?')
      }
      return date
    }

    expect(() => parse('yyyy-mm-dd')).toThrow('Enter a date in the form YYYY/MM/DD')

    try {
      let date = parse('yyyy-mm-dd')
    } catch (e) {
      if (e instanceof InvalidDateFormatError) {
        expect(e.message).toBe('Enter a date in the form YYYY/MM/DD')
      } else if (e instanceof DateIsInTheFutureError) {
        expect(e.message).toBe('Are you a timeloard?')
      } else {
        // throw e // throw exceptions
        expectTypeOf(e).toBeUnknown()
      }
    }
  })

  it('returning exceptions', () => {
    function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
      let date = new Date(birthday)
      if (!isValid(date)) {
        return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD') // return exceptions
      }
      if (date.getTime() > Date.now()) {
        return new DateIsInTheFutureError('Are you a timeloard?')
      }
      return date
    }

    let result = parse('yyyy-mm-dd')
    if (result instanceof InvalidDateFormatError) {
      expect(result.message).toBe('Enter a date in the form YYYY/MM/DD')
    } else if (result instanceof DateIsInTheFutureError) {
      expect(result.message).toBe('Are you a timeloard?')
    } else {
      expectTypeOf(result).toEqualTypeOf<Date>()
    }

  })
  it('the Option type', () => {
    let result = Option(6)
      .flatMap(n => Option(n * 3))
      .flatMap(_ => new None)
      .getOrElse(7)
    expect(result).toBe(7)
  })
})