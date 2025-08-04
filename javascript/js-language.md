# JavaScript Programming Language

## Basics

<!--
JavaScript in HTML
-->

ES6关键字:

```javascript
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
```

ES6保留字
```javascript
// 始终保留
enum

// 严格模式下保留
implements
interface
let
package
protected
private
public
static

// 模块代码中保留
await
```

变量: `var`, `let`, `const`

原始数据类型
- `Undefined`
- `Null`
- `Boolean`
- `Number`
- `String`
- `Symbol`

复杂数据类型
- `Object`: 无序名值对的集合

`typeof`操作符: 确定任意变量的数据类型.

操作符
- 一元操作符
- 位操作符
- 布尔操作符
- 乘性操作符
- 指数操作符
- 加性操作符
- 关系操作符
- 相等操作符
  - 等于/不等于(`==`, `!=`): 先进行类型转换再确定操作数是否相等
  - 全等/不全等(`===`, `!==`)
- 条件操作符: `? :`
- 赋值操作符
- 逗号操作符: `,`

语句:
- `if`
- `do-while`
- `while`
- `for`
- `for-in`: 枚举对象中的非符号键属性
- `for-of`: 遍历可迭代对象的元素
- 标签语句: `labelName:`
- `break`, `continue`
- `with`: 将代码作用域设置为特定的对象
- `switch`: 可以用于所有数据类型, 条件的值不需要是常量也可以是变量或表达式

函数: `function`

变量, 作用域和内存
- 原始值, 引用值
  - 原始值: 最简单的数据, 按值访问变量
  - 引用值: 由多个值构成的对象, 按引用访问变量
    - 动态属性: 可以随时添加/修改/删除属性和方法
  - 复制值, 传递参数
  - 确定类型: `typeof`, `instanceof` 
- 执行上下文
  - 变量或函数的上下文决定了它们可以访问哪些数据以及它们的行为
  - 上下文中的代码在执行时会创建变量对象的一个作用域链
- 变量声明
  - `var`函数作用域声明
  - `let`块级作用域声明
  - `const`常量声明
- 垃圾回收

基本引用类型
- 对象定义: 描述了自己的对象应有的属性和方法. 跟类不是一个概念.
- 函数也是一种引用类型.
- `Date`
- `RegExp`: 支持正则表达式
- 原始值包装类型: `Boolean`, `Number`, `String`
- 单例内置对象
  - `Object`, `Array`, `String`
  - `Global`: 在全局作用域中定义的变量和函数都会成为`Global`对象的属性.
    - 方法: `isNaN()`, `isFinite()`, `parseInt()`, `parseFloat()`, `encodeURI()`, `encodeURIComponent()`, `eval()`(完整的ECMAScript解释器)
    - 属性: `undefined`, `NaN`, `Infinity`, `Object`, `Array`, `Function`, ..., `Symbol`, `Error`, ...
    - `window`对象: 浏览器 
  - `Math`: 保存数学公式, 信息和计算

集合引用类型
- `Object`
  - 创建: `new Object()`, 使用对象字面量表示法.
- `Array`: 数组中每个槽位可以存储任意类型的数据
- 定型数组(typed array): 一种特殊的包含数值类型的数组
  - `ArrayBuffer`: 所有定型数组和视图引用的基本单位
  - `DataView`: 一种允许读写`ArrayBuffer`的视图, 专为文件IO和网络IO设计.
    - `ElementType`: Int8, Uint8, Int16, Uint16, Int32, Uint32, Float32, Float64
    - 字节序
  - 定型数组: 另一种形式的`ArrayBuffer`视图, 特定于一种`ElementType`且遵循系统原生的字节序
    - `Int32Array`, `Float32Array`, ...
- `Map`: 新的键/值存储集合类型
- `WeakMap`: 键不属于正式的引用, 不会阻止垃圾回收.
- `Set`: 新的集数据结构类型
- `WeakSet`: 值不属于正式的引用, 不会阻止垃圾回收.
- 迭代器(`for-of`), 扩展操作符(`...`)

## Iterators, Generators

任何实现`Iterable`接口的数据结构都可以被实现`Iterator`接口的结构消费.
- `Iterable`: 可迭代对象
  - `Symbol.iterator`属性
- `Iterator`: 迭代器
  - `next()`: 返回`IteratorResult`(属性: `done`, `value`)
  - `return()`: 提前关闭迭代器

生成器: 在一个函数块内暂停和恢复代码执行的能力. 用途: 自定义迭代, 实现协程.
- `*`: 函数名称前, 表示是生成器函数
- 生成器对象: 调用生成器函数产生, 也实现了`Iterator`接口
- `yield`,`next()`: 停止和恢复生成器执行
- `yield*`: 产生可迭代对象
- `return()`: 强制生成器进入关闭状态
- `throw()`: 在暂停的时候将一个提供的错误注入到生成器对象中. 如果生成器函数中未处理错误生成器就会关闭.

## Objected-Oriented Programming

对象
- 创建对象, 对象字面量
- 属性的类型: 数据属性, 访问器属性
  - 内部特性: 描述属性的特征
- `Object.defineProperties()`: 定义多个属性 
- `Object.getOwnPropertyDescriptor()`: 读取属性的特性/属性描述符
- `Object.getOwnPropertyDescriptors()`
- `Object.assign()`: 合并对象
- `Object.is()`: 对象相等判断
- 增强的对象语法
  - 属性值简写
  - 可计算属性
  - 简写方法名
- 对象解构: 在一条语句中使用嵌套数据实现一个或多个赋值操作
  - 嵌套解构
  - 参数上下文匹配 

创建对象
- 工厂模式
- 构造函数模式
- 原型模式
  - `Person.prototype.isPrototypeOf(person1)`: 判断是否是原型关系
  - `Object.getPrototypeOf()`: 返回内部特性`[[Prototype]]`的值
  - `Object.setPrototypeOf()`: 向实例`[[Prototype]]`特性写入新值
- 对象迭代
  - `Object.values()`
  - `Object.entries()` 
```javascript
// 工厂模式
function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  };
  return o;
}
let person1 = createPerson("Nicholas", 29, "Software Engineer");

// 构造函数模式
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  };
}
let person1 = new Person("Nicholas", 29, "Software Engineer");

// 原型模式
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};
let person1 = new Person();
```

继承                              <- WHAT A MESS!!!
- 原型链
- 盗用构造函数/对象伪装/经典继承
- 组合继承/伪经典继承
- 原型式继承
  - `Object.create()`
- 寄生式继承 
- 寄生式组合继承

类
- `class`关键字, 背后仍使用原型和构造函数的概念
- 类定义: 类声明, 类表达式
- 类构造函数: `constructor`方法
  - 类就是一种特殊函数
- 实例成员
- 原型方法: 在类块中定义的方法
  - 读取和设置访问器
- 静态类方法: `static`
- 非函数原型和类成员: 类定义外部, 在类或原型上定义成员
- 迭代器和生成器方法
- 继承: `extends`
  - 继承任何拥有`[[Construct]]`和原型的对象
  - `super`
  - 抽象基类: 使用`new.target`实现
  - 继承内置类型
  - 类混入
    - `extends getParentClass()`

代理
- `const proxy = new Proxy(target, handler)`: 创建代理对象, 参数: 目标对象, 处理程序对象
- 捕获器(trap): 对应一种基本操作, 可以直接或间接在代理对象上调用
  - 捕获器参数: `(trapTarget, property, receiver)`
  - 处理程序对象中所有可捕获的方法都有对应的反射API方法: `Refect.xxx(...arguments)`
  - 捕获不变式(trap invariant): 防止捕获器定义出现反常行为
- `const { proxy, revoke } = Proxy.revocable(target, handler)`: 可撤销代理
  - `revoke()`: 撤销函数, 撤销代理对象与目标对象的关联
- 代理可以捕获13种不同的基本操作
```javascript
get()
set()
has()
defineProperty()
getOwnPropertyDescriptor()
deleteProperty()
ownKeys()
getPrototypeOf()
setPrototypeOf()
isExtensible()
preventExtensions()
apply()
construct()
```
- 代理模式
  - 跟踪属性范围内
  - 隐藏属性
  - 属性验证
  - 函数与构造函数参数验证
  - 数据绑定与可观察对象

## Functions

每个函数是`Function`类型的实例. 函数名是指向函数的指针, 就是变量.

定义函数
- 函数声明: JavaScript引擎在执行代码之前先读取函数声明, 并在执行上下文中生成函数定义.
- 函数表达式: 必须等到代码执行到时在执行上下文中生成函数定义.
  - 立即调用的函数表达式(IIFE): `(function() {})()`
- 箭头函数: `=>`
- 使用`Function`

函数参数
- `arguments`对象
- 默认参数值: 不限于原始值或对象类型, 也可以使用调用函数返回的值
  - 后定义默认值的参数可以引用先定义的参数
- 扩展参数, 收集参数: `...` 

ECMAScript函数没有签名, 自然也没有重载: 后定义的覆盖先定义的.

函数内部的特殊对象
- `arguments`: 一个类数组对象, 包含调用函数时传入的所有参数.
- `this`
  - 标准函数中: 把函数当成方法调用的上下文对象
  - 箭头函数中: 定义箭头函数的上下文
- `caller`: ES5, 调用当前函数的函数, 如果在全局作用域中调用则为`null`
- `new.target`: ES6, 检测函数是否使用`new`关键字调用

函数属性和方法
- 属性
  - `length`: 函数定义的命名参数的个数
  - `prototype`: 保存引用类型所有实例方法的地方
- 方法
  - `apply(<函数体内this值>, <参数数组>)`
  - `call(<函数体内this值> , <参数1>, <参数2>, ...)` 

尾调用优化

闭包(closure)

私有变量: 函数参数, 局部变量, 函数内部定义的其他函数
- 特权方法(privileged method): 能够访问函数私有变量和私有函数的公有方法
  - 在构造函数中实现
  - 使用私有作用域定义私有变量和函数实现
    - 模块模式: 在一个单例对象上实现相同的隔离和封装. 使用匿名函数返回一个对象.
    - 模块增强模式: 在返回对象之前先对其进行增强

## Promises, Async Functions

`setTimeout()`

期约(`Promise`): ES6
- 状态: 待定pending, 兑现fulfilled/解决resolved, 拒绝rejected
- `new Promise((resolve, reject) => {})`
- `Promise.resolve()`, `Promise.reject()`
- `Promise`的实例方法
  - `then()`: 实现`Thenable`接口
  - `Promise.prototype.then(onResolved, onRejected)`: 为期约实例添加处理程序
  - `Promise.prototype.catch()`: 为期约添加拒绝处理程序, 等价于`Promise.prototype.then(null, onRejected)`
  - `Promise.prototype.finally()`: 给期约添加`onFinally`处理程序
- 期约图
  - `Promise.all()`
  - `Promise.race()`
- 扩展: 期约取消, 进度追踪

异步函数: `async`, `await` ES8
- 始终返回期约对象

## BOM(Browser Object Model)

<!--
window
location
navigator
screen
history
-->

BOM提供了与网页无关的浏览器功能对象.

`window`对象
- 窗口关系: `top`, `parent`, `self`
- 窗口位置与像素比: `screenLeft`, `screenTop`, `moveTo()`, `moveBy()`, `divicePixelRatio`
- 窗口大小: `innerWidth`, `innerHeight`, `outerWidth`, `outerHeight`, `resizeTo()`, `resizeBy()`
  - `document.documentElement.clientWidth`, `document.documentElement.clientHeight`
- 视口位置: `pageXoffset`/`scrollX`, `pageYoffset`/`scrollY`, `scroll()`, `scrollTo()`, `scrollBy()` 
- 导航与打开新窗口: `open()`, `close()`, `opener`
- 定时器: `setTimeout()`, `clearTimeout()`, `setInterval()`, `clearInterval()`
- 系统对话框: `alert()`, `confirm()`, `prompt()`, `find()`, `print()`

`location`对象
- `window.location`, `document.location`
- 保存: 加载文档信息, 将URL解析为离散片段后的属性
- `host`
- `hostname`
- `href`
- `pathname`
- `port`
- `protocol`
- `search`: `URLSearchParams`
- `username`
- `password`
- `origin`
- `assign()`

`navigator`对象

`screen`对象

`history`对象

## Client Detection

<!--
capability
user-agent
software
hardware
-->

## DOM(Document Object Model)

<!--
Node
Document
Element
Text
Comment
CDATASection
DocumentType
DocumentFragment
Attr

mutation observers

DOM extensions:
- selectors API
- element traversal
- HTML5
- proprietary extensions

DOM level 2 and 3:
- DOM changes
- styles
- traversals
- ranges
-->

## Events

<!--
event flow
event handlers
event object
event types
composition events
HTML5 events
device events
simulating events
-->

## Animation and Graphics with Canvas

## Forms

<!--
form
text boxes
select box
form serialization
rich text editing
-->

## JavaScript API

<!--
atomics, SharedArrayBuffer
cross-context messaging
encoding API
Blob, File
media element
native drag and drop
notification API
page visibility API
streams API
timing API
web components
web cryptograph API
-->

## Error Handling and Debugging

<!--
browser error reporting
error handling
debugging techniques
-->

## XML, JSON

## Network Requests, Remote Resources

<!--
XMLHttpRequest
progress events
CORS(Cross-Origin Resource Sharing)
Fetch API
Beacon API
Web Sockets
Security
-->

## Client-Side Storage

<!--
Cookie
Web Storage
IndexedDB
-->

## Modules

- IIFE(Immediately Invoked Function Expression)
- CommonJS: Node.js
```javascript
require(...)
exports // object
```
- AMD(Asynchronous Module Definition)
```javascript
define(...)
```
- UMD(Univarsql Module Definition): use IIFE to combine CommonJS and AMD.
- ES6 module
```html
<script type="module" ...></script>
```
```javascript
import // statement
export // statement
```

More:
* [The JavaScript Modules Handbook – Complete Guide to ES Modules and Module Bundlers](https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/)
* [Differences Between JavaScript Modules: CJS, AMD, UMD, and ESM](https://medium.com/@halilatilla/differences-between-javascript-modules-cjs-amd-umd-and-esm-f60124de131b)
	- `CJS`: CommonJS
		- server side, NodeJS
	- `AMD`: Asynchronous Module Definition
		- browser-based application
	- `UMD`: Universal Module Definition
		- both support CommonJS and AMD
	- `ESM`: ECMAScript Module
		- the official module system of JavaScript

Module Resolution
* typescript: https://www.typescriptlang.org/docs/handbook/module-resolution.html
* node.js: https://nodejs.org/api/packages.html#determining-module-system

* [What is the difference between .js and .mjs files](https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files): Node.js will treat `.cjs` files as CommonJS modules and `.mjs` files as ECMAScript modules.


## Workers

<!--
Dedicated Workers
Shread Workers
Service Workers
-->