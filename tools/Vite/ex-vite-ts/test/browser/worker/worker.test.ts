import '@vitest/web-worker'
// import MyWorker from '../worker?worker' // ???

import { describe, expect, it } from 'vitest'

describe('Web Worker', () => {
  it('works', async () => { // async tests
    // let worker = new MyWorker()
    // new Worker is also supported
    let worker = new Worker(new URL('../../../src/browser/worker/worker.ts', import.meta.url),
      { type: 'module' })

    const workerResponse = await new Promise((resolve) => {
      worker.onmessage = (e) => {
        resolve(e.data)
      }
      // send message to worker thread
      worker.postMessage('hello')
    })
    expect(workerResponse).toBe('hello world')

    worker.terminate()
  })
})
