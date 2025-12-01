/**
 * Example in 'Programming TypeScript' - 5. classes and Interfaces - Classes Declare Both Values and Types
 */

type State = {
  [key: string]: string
}

class StringDatabase {
  // state: State = {}

  constructor(public state: State = {}) { }

  get(key: string): string | null {
    return key in this.state ? this.state[key] : null
  }

  set(key: string, value: string): void {
    this.state[key] = value
  }

  static from(state: State) {
    let db = new StringDatabase
    for (let key in state) {
      db.set(key, state[key])
    }
    return db
  }
}

export { State, StringDatabase }