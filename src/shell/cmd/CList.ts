import { Command } from "./Command";
import { Clear } from "./commands/Clear";
import { Echo } from "./commands/Echo";
import { Get } from "./commands/Get";
import { Set } from "./commands/Set";

export const CList: Array<Command> = [
    Echo,
    Get,
    Set,
    Clear
];