type State = {
    [key: string]: string;
};
declare class StringDatabase {
    state: State;
    constructor(state?: State);
    get(key: string): string | null;
    set(key: string, value: string): void;
    static from(state: State): StringDatabase;
}
export { State, StringDatabase };
//# sourceMappingURL=StringDatabase.d.ts.map