import React from "react";
import { IOItem } from "../../components/Terminal";

export interface Command {
    name: string,
    exec: (argv: string[], setInput?: React.Dispatch<React.SetStateAction<string>>, setOutput?: React.Dispatch<React.SetStateAction<IOItem[]>>) => Promise<string | void>;
}