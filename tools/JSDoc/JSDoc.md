# JSDoc
* https://jsdoc.app/
* https://github.com/jsdoc/jsdoc
  
> An API documentation generator for JavaScript.

# Block tags
- `@abstract`/`@virtual` 抽象的: This member must be implemented (or overridden) by the inheritor.
- `@access` 成员访问等级: Specify the access level of this member (private, package-private, public, or protected).
- `@alias` 别名: Treat a member as if it had a different name.
- `@async` 异步: Indicate that a function is asynchronous.
- `@augments`/`@extends` 继承: Indicate that a symbol inherits from, and adds to, a parent symbol.
- `@author` 作者: Identify the author of an item.
- `@borrows` 借: This object uses something from another object.
- `@class`/`@constructor` 类/构造器: This function is intended to be called with the "new" keyword.
- `@classdesc` 类描述: Use the following text to describe the entire class.
- `@constant`/`@const` 常量: Document an object as a constant.
- `@constructs` 类构造器函数成员: This function member will be the constructor for the previous class.
- `@copyright` 版权: Document some copyright information.
- `@default`/`@defaultvalue` 默认值: Document the default value.
- `@deprecated` 废弃: Document that this is no longer the preferred way.
- `@description`/`@desc` 描述: Describe a symbol.
- `@enum` 枚举: Document a collection of related properties.
- `@event` 事件: Document an event.
- `@example`: Provide an example of how to use a documented item.
- `@exports`: Identify the member that is exported by a JavaScript module.
- `@external`/`@host`: Identifies an external class, namespace, or module.
- `@file`/`@fileoverview`/`@overview`: Describe a file.
- `@fires`/`@emits`: Describe the events this method may fire.
- `@function`/`@func`/`@method`: Describe a function or method.
- `@generator`: Indicate that a function is a generator function.
- `@global`: Document a global object.
- `@hideconstructor`: Indicate that the constructor should not be displayed.
- `@ignore`: Omit a symbol from the documentation.
- `@implements`: This symbol implements an interface.
- `@inheritdoc`: Indicate that a symbol should inherit its parent's documentation.
- `@inner`: Document an inner object.
- `@instance`: Document an instance member.
- `@interface`: This symbol is an interface that others can implement.
- `@kind`: What kind of symbol is this?
- `@lends`: Document properties on an object literal as if they belonged to a symbol with a given name.
- `@license`: Identify the license that applies to this code.
- `@listens`: List the events that a symbol listens for.
- `@member`/`@var`: Document a member.
- `@memberof`: This symbol belongs to a parent symbol.
- `@mixes`: This object mixes in all the members from another object.
- `@mixin`: Document a mixin object.
- `@module`: Document a JavaScript module.
- `@name`: Document the name of an object.
- `@namespace`: Document a namespace object.
- `@override`: Indicate that a symbol overrides its parent.
- `@package`: This symbol is meant to be package-private.
- `@param`/`@arg`/`@argument`: Document the parameter to a function.
- `@private`: This symbol is meant to be private.
- `@property`/`@prop`: Document a property of an object.
- `@protected`: This symbol is meant to be protected.
- `@public`: This symbol is meant to be public.
- `@readonly`: This symbol is meant to be read-only.
- `@requires`: This file requires a JavaScript module.
- `@returns`/`@return`: Document the return value of a function.
- `@see`: Refer to some other documentation for more information.
- `@since`: When was this feature added?
- `@static`: Document a static member.
- `@summary`: A shorter version of the full description.
- `@this`: What does the 'this' keyword refer to here?
- `@throws`/`@exception`: Describe what errors could be thrown.
- `@todo`: Document tasks to be completed.
- `@tutorial`: Insert a link to an included tutorial file.
- `@type`: Document the type of an object.
- `@typedef`: Document a custom type.
- `@variation`: Distinguish different objects with the same name.
- `@version`: Documents the version number of an item.
- `@yields`/`@yield`: Document the value yielded by a generator function.

# Inline tags
- `@link` (synonyms: `@linkcode`, `@linkplain`): Link to another item in the documentation.
- `@tutorial`: Link to a tutorial.