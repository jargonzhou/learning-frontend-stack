// 命名导出(named export): 模块是被导出值的容器
export const foo = 'foo'; // 命名行内导出
export function hello() {
  return 'hello';
}
export function* hello2() { }

export class Foo { }

const bar = 'bar';
export { bar }; // 命名子句导出

const baz = 'baz';
export { baz as myBaz }; // 别名

// 默认导出(default export): 模块与被导出的值是一回事
// 每个模块只能有一个默认导出
const cat = 'cat';
// export default cat;
const dog = 'dog'
export { cat as default, dog }; // 别名为default
// export default function() {}
// export default function*() {}
// export default class {}