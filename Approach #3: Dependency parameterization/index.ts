import { absurd } from "fp-ts/function";
import question from "../lib/question";
import compareTwoStrings from "../Approach #2: Dependency rejection/02";
type IConsole = {
  log: typeof console.log;
  question: typeof question;
};

const program = (console: IConsole) =>
  async function () {
    const str1 = await console.question("Enter the first value:");
    const str2 = await console.question("Enter the second value:");
    const comparisonResult = compareTwoStrings(str1, str2);
    switch (comparisonResult) {
      case "bigger":
        console.log("The first value is bigger");
        break;
      case "equal":
        console.log("The values are equal");
        break;
      case "smaller":
        console.log("The first value is smaller");
        break;
      default:
        absurd(comparisonResult);
    }
  };

program({ log: console.log, question: question })();
