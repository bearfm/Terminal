import { Bucket } from "../../key/Key";
import { Command } from "../Command";

export const Set: Command = {
    name: "set",
    exec: async (argv) => {
        if (!(argv[0] && argv[1])) return "Syntax: set <key> <value>";

        const bucket = await Bucket.Bucket();
        bucket.putObject(argv[0], argv[1]);

        return `Set: ${argv[0]} -> ${argv[1]}`;
    }
};