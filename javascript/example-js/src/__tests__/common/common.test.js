// 命名导出 
import { foo } from '../../common/common_string.js';
import * as CommonString from '../../common/common_string.js'; // 命名导出集合的别名

// 默认导出
import cat from '../../common/common_string.js';
import { default as Cat } from '../../common/common_string.js'; // 默认导出的别名

// 执行副作用
import '../../common/common_side_effect.js';

// 模块转移导出
import { foo as myFoo } from '../../common/common.js'; // 命名导出的别名
import myBaz from '../../common/common.js'; // 默认导出

test('modules', () => {
  // 命名导出
  console.log(foo);
  console.log(CommonString.foo);

  // 默认导出
  console.log(cat);
  console.log(Cat);

  // 模块转移导出
  console.log(myFoo);
  console.log(myBaz);
})