import question from "../lib/question";
import compareTwoStrings from "./02";
import { absurd } from "fp-ts/function";

const program = async function () {
  const str1 = await question("Enter the first value:");
  const str2 = await question("Enter the second value:");
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

program();
