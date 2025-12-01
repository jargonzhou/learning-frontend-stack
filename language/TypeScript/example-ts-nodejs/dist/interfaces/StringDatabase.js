"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringDatabase = void 0;
class StringDatabase {
    state;
    // state: State = {}
    constructor(state = {}) {
        this.state = state;
    }
    get(key) {
        return key in this.state ? this.state[key] : null;
    }
    set(key, value) {
        this.state[key] = value;
    }
    static from(state) {
        let db = new StringDatabase;
        for (let key in state) {
            db.set(key, state[key]);
        }
        return db;
    }
}
exports.StringDatabase = StringDatabase;
//# sourceMappingURL=StringDatabase.js.map