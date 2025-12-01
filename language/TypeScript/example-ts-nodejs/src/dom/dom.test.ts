/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "@jest/globals";

// jsdom-worker: no @types
// import * as JW from 'jsdom-worker';

describe('dom', () => {
  it('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

  // WARN: use Vitest instead
  // see Vite\ex-vite-ts\test\browser\worker\worker.test.ts
  it('web worker', (done) => {
    // // MainThread.ts
    // let worker = new Worker('WorkerScript.js')
    // worker.onmessage = (e: any) => {
    //   console.log(e.data)
    //   done()
    // }
    // worker.postMessage('some data')
  })
})
