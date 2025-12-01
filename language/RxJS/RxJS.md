# RxJS
* https://rxjs.dev/
* https://github.com/ReactiveX/rxjs

> Reactive Extensions Library for JavaScript.

# Concepts

RxJS is **a library for composing asynchronous and event-based programs by using observable sequences**. It provides one core type, the `Observable`, satellite/卫星 types (`Observer`, `Scheduler`s, `Subject`s) and operators inspired by `Array` methods (`map`, `filter`, `reduce`, `every`, etc) to allow handling asynchronous events as collections.

> Think of RxJS as Lodash for events.

ReactiveX combines the **Observer pattern** with the **Iterator pattern** and **functional programming with collections** to fill the need for an ideal way of managing sequences of events.

The essential concepts in RxJS which solve async event management are:
- **Observable/可观察对象**: represents the idea of **an invokable collection of future values or events**.
- **Observer/观察者**: is a collection of **callbacks that knows how to listen to values delivered by the Observable**.
- **Subscription/订阅**: represents the **execution of an Observable**, is primarily useful for cancelling the execution.
- **Operators/运算符**: are **pure functions** that enable a functional programming style of dealing with collections with operations like `map`, `filter`, `concat`, `reduce`, etc.
- **Subject/主体**: is equivalent to an `EventEmitter`, and **the only way of multicasting a value or event to multiple Observers**.
- **Schedulers/调度器**: are **centralized dispatchers to control concurrency**, allowing us to coordinate when computation happens on e.g. `setTimeout` or `requestAnimationFrame` or others.

