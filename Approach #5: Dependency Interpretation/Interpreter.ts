import { Program } from "./Types";
import { absurd } from "fp-ts/function";
import question from "../lib/question";

const interpret = async (program: Program<string>): Promise<string> => {
  switch (program._tag) {
    case "ReadLine": {
      const answer = await question("");
      const nextProgram = program.taggedValue.next(answer);
      return interpret(nextProgram);
    }
    case "WriteLine": {
      const value = program.taggedValue.value;
      console.log(value);
      const nextProgram = program.taggedValue.next();
      return interpret(nextProgram);
    }
    case "Stop": {
      return program.taggedValue.value;
    }
    default:
      return absurd(program);
  }
};

export default interpret;
