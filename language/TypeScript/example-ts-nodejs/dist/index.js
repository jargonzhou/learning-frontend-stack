"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
exports.greeter = greeter;
class Student {
    firstName;
    middleInitial;
    lastName;
    fullName;
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}
exports.Student = Student;
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
const user = new Student('Jane', 'M.', 'User');
console.log(greeter(user));
console.log('Hello, TypeScript!');
//# sourceMappingURL=index.js.map