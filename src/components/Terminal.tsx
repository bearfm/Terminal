import React, { useEffect, useRef, useState } from "react";
import { Bridge } from "../shell/Bridge";
import { CList } from "../shell/cmd/CList";

export interface IOItem {
    type: "input" | "output";
    content: string;
}

const invalidCommand = "invalid command";

export const Terminal = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<IOItem[]>([]);
    const termRef = useRef<HTMLDivElement>(null);

    const handleInputChg = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleInputSub = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (input.trim() === "") return;
        setOutput((prevOutput) => [...prevOutput, { type: "input", content: input }]);

        Bridge.stack().push(input);

        setInput("");
    };

    Bridge.setCallback(async (item: string) => {
        const argv = item.match(/(?:[^\s'"]+|'[^']*'|"[^"]*")+/g) || [item.split(" ")[0]];

        try {
            for (const Command of CList) {
                if (argv[0].toLowerCase() === Command.name.toLowerCase()) {
                    const result = await Command.exec(argv.slice(1), setInput, setOutput);
                    if (result) {
                        setOutput((prevOutput) => [...prevOutput, { type: "output", content: result }]);
                    }
                    return;
                }
            }
        } catch (error: any) {
            setOutput((prevOutput) => [...prevOutput, { type: "output", content: error }]);
        }

        setOutput((prevOutput) => [...prevOutput, { type: "output", content: invalidCommand }]);
    });

    useEffect(() => {
        if (termRef.current) {
            termRef.current.focus();
        }
    });

    return (
        <div ref={termRef} className="text-white p-4 rounded-lg">
            <div className="mb-2">
                {output.map((item, index) => (
                    <div key={index}>
                        {item.type === "input" && (
                            <p className="text-green-300">
                                <span className="text-gray-400">{Bridge.prompt()} </span>
                                {item.content}
                            </p>
                        )}
                        {item.type === "output" && (
                            <p className="text-white">{item.content}</p>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={handleInputSub} className="mt-2">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChg}
                    className="bg-slate-900 text-green-300 p-2 rounded-md focus:outline-none focus:bg-slate-800 w-full"
                />
            </form>
        </div>
    );
};