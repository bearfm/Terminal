import { CallStack } from "./Stack.js";

/* BearFM 5/10/24 */
export class Shell {
    ps1: string;
    stack: CallStack<string>;

    constructor(prompt?: string) {
        this.ps1 = prompt || "> ";
        this.stack = new CallStack();
    }
}