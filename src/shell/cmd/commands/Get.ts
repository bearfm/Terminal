import { Bucket } from "../../key/Key";
import { Command } from "../Command";

export const Get: Command = {
    name: "get",
    exec: async (argv) => {
        const bucket = await Bucket.Bucket();
        return bucket.getObject(argv[0]) || "";
    }
};