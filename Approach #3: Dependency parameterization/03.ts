import { ComparisonResult } from "../Approach #2: Dependency rejection/02";

type ComparisonFn = (str1: string, str2: string) => number;

const compareTwoString = (comparisonFn: ComparisonFn) => (
  str1: string,
  str2: string
): ComparisonResult => {
  const result = comparisonFn(str1, str2);
  if (result > 0) {
    return "bigger";
  } else if (result < 0) {
    return "smaller";
  } else {
    return "equal";
  }
};

export default compareTwoString
