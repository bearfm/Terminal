import { Shell } from "./Shell";

export namespace Bridge {
    const shell: Shell = new Shell();

    export const setCallback = (callback?: (item: any) => void) => {
        shell.stack.setCallback(callback);
    };

    export const prompt = (): string => shell.ps1;
    export const stack = () => shell.stack;
}