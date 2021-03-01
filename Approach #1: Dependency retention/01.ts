import question from "../lib/question";

const compareTwoStrings = async function () {
  const str1 = await question("Enter the first value:");
  const str2 = await question("Enter the second value:");
  if (str1 > str2) {
    console.log("The first value is bigger");
  } else if (str1 < str2) {
    console.log("The second value is bigger");
  } else {
    console.log("The values are equal");
  }
};

export default compareTwoStrings;
