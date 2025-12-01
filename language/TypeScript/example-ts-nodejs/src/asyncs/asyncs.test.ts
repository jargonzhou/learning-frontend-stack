
import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { expectTypeOf } from 'expect-type'

import * as fs from 'fs'
import * as Redis from 'redis'
import { RedisContainer, StartedRedisContainer } from '@testcontainers/redis'
import { fork } from 'child_process'
import { error } from "console";

/**
 * Example in 'Programming TypeScript' - 8. Asynchronous Programming, Concurrency, and Parallelism
 */

describe('async programming', () => {
  // https://node.testcontainers.org/quickstart/usage/
  let container: StartedRedisContainer
  let redisClient: Redis.RedisClientType
  beforeAll(async () => {
    container = await new RedisContainer("redis:7").start()
    redisClient = Redis.createClient({ url: container.getConnectionUrl() })
    await redisClient.connect()
    console.log('Successfully connected to Redis')

    redisClient.on('error', (err: Error) => {
      console.error('Redis connection error:', err)
    })
  })

  afterAll(async () => {
    await redisClient.destroy()
    await container.stop()
    console.log('Resis container stopped')
  })

  it('callbacks', () => {
    fs.readFile('README.md',
      { encoding: 'utf8' },
      (error: NodeJS.ErrnoException | null, data: string) => {
        if (error) {
          console.error('error', error)
          return
        }
        // console.info('success reading!', data.length)
        expect(data).not.toBeNull()
      }
    )
    // concurrently
    fs.readFile('tsconfig.json',
      { encoding: 'utf8' },
      (error: NodeJS.ErrnoException | null, data: string) => {
        if (error) {
          console.error('error', error)
          return
        }
        // console.info('success reading!!', data.length)
        expect(data).not.toBeNull()
      }
    )
  })

  it('promise', () => {
    function readFilePromise(path: string): Promise<string> {
      return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: 'utf8' },
          (error: NodeJS.ErrnoException | null, result: string) => {
            if (error) {
              reject(error)
            } else {
              resolve(result)
            }
          })
      })
    }

    let a: () => Promise<string> = () => Promise.resolve('a')
    let b: (s: string) => Promise<number> = (s: string) => Promise.resolve(s.length)
    let c: () => Promise<boolean> = () => Promise.reject(new Error('wrong'))

    a().then(b)
      .catch(e => c())
      .then(result => {
        console.info('result: ', result)
        expect(result).not.toBeNull()
      })
      .catch(e => expect(e).not.toBeNull())
  })

  // Jest - 'Testing Asynchronous Code'
  // https://jestjs.io/docs/asynchronous
  it('async, await', async () => {
    class User {
      constructor(readonly id: string, readonly location: string) { }
    }
    async function getUseID(id: string) {
      return new User(id, "NY")
    }
    async function getLocation(user: User) {
      return user.location
    }

    async function getUser() {
      let user = await getUseID("18")
      let location = await getLocation(user)
      return location
    }

    const data = await getUser()
    expect(data).toBe('NY')
  })

  it('async streams - Redis', async () => {
    // string operations
    await redisClient.set('ts-key', 'value')
    const value = await redisClient.get('ts-key')
    expect(value).toBe('value')
    const count = await redisClient.del('ts-key')
    expect(count).toEqual(1)
  })
})

describe('typesafe multithreading', () => {
  it('child process', (done) => {
    // MainThread.ts
    let child = fork('./src/asyncs/ChildThread.js')
    child.on('message', data => {
      console.info('Child process sent a message', data)
      expect(data).not.toBeNull()
      done() // Jest will wait until the done callback is called before finishing the test.
    })

    child.send({ 'type': 'syn', 'data': [3] })
  })
})