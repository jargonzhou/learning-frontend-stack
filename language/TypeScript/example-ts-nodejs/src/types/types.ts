/**
 * Utitilies for types.
 */

import { ImplicitArrayBuffer } from "buffer"

/**
 * @type T
 * @returns a value of the type T
 */
export function makeTypeInstance<T>(): T {
  return {} as T
}

/** Wrap arguments to tuples.
 * @param ts any typed arguments
 * @returns a tuple
 * @see {@link functions#tuple} // TODO: how to link to other modules in current project
 */
export function tuple<T extends unknown[]>(...ts: T): T {
  return ts
}

// in global extension
// or: put in script mode
// otherwise: Property 'zip' does not exist on type 'any[]'.
declare global {
  /**
   * @type T
   */
  interface Array<T> {
    /**
     * @type U
     * @param list 
     * @returns an array of tuple
     */
    zip<U>(list: U[]): [T, U][]
  }
}

Array.prototype.zip = function <T, U>(
  this: T[],
  list: U[]
): [T, U][] {
  return this.map((v, k) => tuple(v, list[k]))
}

/**
 * Example in 'Programming TypeScript' - 7. Handling Errors - The Option Type
 */
interface Option<T> {
  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Option<U>): Option<U>
  getOrElse(value: T): T
}
class Some<T> implements Option<T> {
  constructor(private value: T) { }

  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Some<U>): Some<U>
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value)
  }
  getOrElse(value: T): T {
    return this.value
  }

}
class None implements Option<never> {
  flatMap<U>(): None {
    return this
  }
  getOrElse<U>(value: U): U {
    return value
  }
}

function Option<T>(value: null | undefined): None
function Option<T>(value: T): Some<T>
function Option<T>(value: T): Option<T> {
  if (value == null) {
    return new None
  }
  return new Some(value)
}

export { Option, Some, None }