import { foo } from './common/common_string.js'

(function (name) {
  console.log(`Hello ${name}!`)

  // // 模块
  console.log(foo)

  // // 工作者线程
  // const dedicatedWorker = new Worker('./worker/dedicated_web_worker.js');
  // console.log(dedicatedWorker);
})('World');
