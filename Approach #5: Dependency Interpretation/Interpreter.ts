import { Program } from "./Types";
import { absurd } from "fp-ts/function";
import question from "../lib/question";

const interpret = async (program: Program<string>): Promise<string> => {
  switch (program._tag) {
    case "ReadLine": {
      const answer = await question("");
      const nextProgram = program.value[1](answer);
      return interpret(nextProgram);
    }
    case "WriteLine": {
      const value = program.value[0];
      console.log(value);
      const nextProgram = program.value[1]();
      return interpret(nextProgram);
    }
    case "Stop": {
      return program.value;
    }
    default:
      return absurd(program);
  }
};

export default interpret;
