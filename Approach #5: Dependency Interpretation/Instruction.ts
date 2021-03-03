import { absurd } from "fp-ts/function";
import question from "../lib/question";
import { withTag, WithTag } from "./withTag";

const readline = "Readline" as const;

type Readline = WithTag<typeof readline, string>;

const Readline = withTag(readline);

const writeline = "Writeline" as const;

type Writeline = WithTag<typeof writeline, string>;

const Writeline = withTag(writeline);

type Instruction = Writeline | Readline;

const interpretInstruction = (instruction: Instruction) => {
  switch (instruction._tag) {
    case "Readline":
      return question(instruction.taggedValue);
    case "Writeline":
      return console.log(instruction.taggedValue);
    default:
      return absurd(instruction);
  }
};

export default interpretInstruction;
