// https://jestjs.io/docs/getting-started#type-definitions
import { expect, test } from '@jest/globals'

test('promise basic', () => {
  let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500))
  let p2 = new Promise((resolve, reject) => setTimeout(reject, 500))

  expect(p1.then(() => 'p1 resolved',
    () => 'p1 rejected'
  )).resolves.toBe('p1 resolved');
  expect(p2.then(() => 'p2 resolved',
    () => 'p2 rejected'))
    .resolves.toBe('p2 rejected');

  let p3 = Promise.reject(Error("error!"))
  expect(p3.catch((e) => e.message)).resolves.toMatch('error!')
})
