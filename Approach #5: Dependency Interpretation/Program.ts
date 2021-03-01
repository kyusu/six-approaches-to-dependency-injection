import { Program, ReadLine, Stop, WriteLine } from "./Types";
import interpret from "./Interpreter";

const readFromConsole: Program<string> = WriteLine([
  "Enter the first value ",
  () =>
    ReadLine([
      void 0,
      (input1: string) =>
        WriteLine([
          "Enter the second value",
          () => ReadLine([void 0, (input2: string) => Stop([input1, input2])]),
        ]),
    ]),
]);

interpret(readFromConsole).then(args => console.log(args))
