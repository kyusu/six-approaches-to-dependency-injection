export type ComparisonResult = "bigger" | "smaller" | "equal";

const compareTwoStrings = (str1: string, str2: string): ComparisonResult => {
  if (str1 > str2) {
    return "bigger";
  } else if (str1 < str2) {
    return "smaller";
  } else {
    return "equal";
  }
};

export default compareTwoStrings;
