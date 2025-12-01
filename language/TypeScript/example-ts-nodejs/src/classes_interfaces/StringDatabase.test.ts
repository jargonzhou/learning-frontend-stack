import { describe, expect, test } from "@jest/globals";
import { StringDatabase } from './StringDatabase'

describe("interfaces", () => {
  test('get set', () => {
    const db = new StringDatabase()
    db.set('a', 'a')
    expect(db.get('a')).toBe('a')
    expect(db.get('b')).toBe(null)
  })

  test('typeof', () => {
    console.log(typeof StringDatabase)
  })
})