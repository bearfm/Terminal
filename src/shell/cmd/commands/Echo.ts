import { Command } from "../Command";

export const Echo: Command = {
    name: "echo",
    exec: async (argv) => {
        return argv.join(" ");
    }
};