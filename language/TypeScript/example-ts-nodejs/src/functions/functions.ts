/**
 * Example in 'Programming TypeScript' - 6. Advanced Types - Advanced Function Types
 */

// improving type inference for tuples
export function tuple<T extends unknown[]>(...ts: T): T {
  return ts
}

// user-defined type guards
export function isStringX(a: unknown): boolean {
  return typeof a === 'string'
}
export function isString(a: unknown): a is string {
  return typeof a === 'string'
}