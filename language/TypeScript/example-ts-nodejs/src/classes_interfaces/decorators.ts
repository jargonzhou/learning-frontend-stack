/**
 * Example in 'Programming TypeScript' - 5. Classes and Interfaces - Decorators
 */

type ClassConstructor<T> = new (...args: any[]) => T

class Payload {
  data: Map<string, any>

  constructor(data: Map<string, any>) {
    this.data = data
  }

  toString(): string {
    return JSON.stringify(Object.fromEntries(this.data))
  }

}

function serializable<T extends ClassConstructor<{
  getValue(): Payload
}>>(Constructor: T) {
  return class extends Constructor {
    serialize(): string {
      return this.getValue().toString()
    }
  }
}

@serializable
class APIPayload {
  payload: Payload

  constructor(payload: Payload) {
    this.payload = payload
  }

  getValue(): Payload {
    return this.payload
  }
}

export { Payload, serializable, APIPayload }