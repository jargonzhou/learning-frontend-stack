/**
 * Example in 'Programming TypeScript' - 5. Classes and Interfaces - Mixins
 * 
 * inspect classes at runtime
 * 
 * simulations:
 * - mutple inheritance: classes extend more than one classes
 * - role-oriented programming: a style of programming where you donot say 'this thing is a shape', but 'it can be measured', `it has four sides'
 *  - describe 'can'/'has-a' relationship, rather than 'is-a' relationship
 */

// a constructor is anything that can be new-ed
type ClassConstructor<T> = new (...args: any[]) => T

/** Mixin `debug()`.
 * @param Class the debugged class
 * @returns an anonymous class with `debug()`
 */
function withEZDebug<C extends ClassConstructor<{
  getDebugValue(): object
}>>(Class: C) {
  return class extends Class {
    constructor(...args: any[]) {
      super(...args)
    }

    /**
     * @returns debug ifo
     */
    debug(): string {
      // let name = Class.constructor.name
      let name = Class.name
      let value = this.getDebugValue()
      return name + "(" + JSON.stringify(value) + ")"
    }
  }
}

export { ClassConstructor, withEZDebug }