/**
 * @jest-environment jsdom
 */

// ref:
// https://jestjs.io/docs/configuration#testenvironment-string
// https://jestjs.io/docs/tutorial-jquery

test('dom example test', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});