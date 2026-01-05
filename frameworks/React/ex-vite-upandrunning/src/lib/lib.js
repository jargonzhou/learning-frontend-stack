export function clone(o) {
  return JSON.parse(JSON.stringify(o))
}

export function rand(max) {
  return Math.floor(Math.random() * max);
}