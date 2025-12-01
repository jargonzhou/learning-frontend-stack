import { describe, expect, test } from "@jest/globals";
import { withEZDebug } from './EZDebug'

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) { }

  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    }
  }
}

describe('EZDebug', () => {
  test("debug", () => {
    // class is type and value
    console.log(typeof HardToDebugUser, new HardToDebugUser(3, "Emma", "Gluzman"))
    // type is type!!!
    // 'ClassConstructor' only refers to a type, but is being used as a value here.ts(2693)
    // expect(new HardToDebugUser(3, "Emma", "Gluzman")).toBeInstanceOf(ClassConstructor)

    let User = withEZDebug(HardToDebugUser)
    expect(typeof User).toBe('function')
    let user = new User(3, "Emma", "Gluzman")
    expect(user.debug()).toBe('HardToDebugUser({"id":3,"name":"Emma Gluzman"})')
  })
})
