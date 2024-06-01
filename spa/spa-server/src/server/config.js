import 'dotenv/config'

export function isDev() {
  return process.env['PROFILE'] === 'development'
}

export function getMongoDBUrl() {
  let host = process.env['MONGODB_HOST']
  let port = process.env['MONGODB_PORT']
  let username = process.env['MONGODB_USERNAME']
  let password = process.env['MONGODB_PASSWORD']
  return `mongodb://${username}:${password}@${host}:${port}`
}

export function getMongoDBDatabase() {
  return process.env['MONGODB_DATABASE']
}