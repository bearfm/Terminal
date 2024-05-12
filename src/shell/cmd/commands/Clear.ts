import { Command } from "../Command";

export const Clear: Command = {
    name: "clear",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    exec: async(argv, setInput, setOutput) => {
        if (setOutput) {
            setOutput([]);
        }
        return;
    }
};