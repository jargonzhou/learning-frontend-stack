// https://github.com/vitest-dev/vitest/tree/main/packages/web-worker
//
// Notes
// Worker does not support `onmessage = () => {}`. Please, use `self.onmessage = () => {}`.
// Shared worker does not support `onconnect = () => {}`. Please, use `self.onconnect = () => {}`.
// Transferring Buffer will not change its `byteLength`.
// You have access to shared global space as your tests.
// You can debug your worker, using `DEBUG=vitest:web-worker` environmental variable.


self.onmessage = (e) => {
  // send message to main thread
  self.postMessage(`${e.data} world`)
}