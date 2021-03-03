import { Program, ReadLine, Stop, WriteLine } from "./Types";
import interpret from "./Interpreter";

const readFromConsole: Program<string> = WriteLine({
  value: "Enter the first value ",
  next: () =>
    ReadLine({
      next: (input1: string) =>
        WriteLine({
          value: "Enter the second value",
          next: () =>
            ReadLine({
              next: (input2: string) =>
                Stop({ value: [input1, input2].join(",") }),
            }),
        }),
    }),
});

interpret(readFromConsole).then((args) => console.log(args));
