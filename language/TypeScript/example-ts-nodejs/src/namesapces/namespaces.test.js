var A;
(function (A) {
    var B;
    (function (B) {
        B.d = 3;
    })(B = A.B || (A.B = {}));
})(A || (A = {}));
var A;
(function (A) {
    var C;
    (function (C) {
        C.d = 3;
    })(C = A.C || (A.C = {}));
})(A || (A = {}));
/// <reference path="AB.ts" />
/// <reference path="AC.ts" />
// import { describe, expect, it } from "@jest/globals";
// explicit imports
// import { A } from './AB'
// import { A as AC } from './AC'
// use references
// 
// limitations of ts-jest: no namespace
// https://kulshekhar.github.io/ts-jest/docs/babel7-or-ts/#no-namespace
//
// import d = A.B.d
// import d2 = A.C.d
// describe('namespace', () => {
//   it('aliases', () => {
//     let e = d * 3
//     expect(e).toBe(9)
//     let f = d2 * 3
//     expect(f).toBe(9)
//   })
// })
var d = A.B.d;
var d2 = A.C.d;
console.log('d=', d, 'd2=', d2);
