/**
 * Example in 'Programming TypeScript' - 5. Classes and Interfaces - Classes Declare Both Values and Types
 * 
 * types and values are namespaced separately in TypeScript.
 */

// values
let a = 1999
function b() { }

// types
type a = number
interface b {
  (): void
}

export { a, b }


// Simulating final Classes
class MesageQueue {
  // private constructor
  private constructor(private messages: string[]) { }

  static create(messages: string[]) {
    return new MesageQueue(messages)
  }
}