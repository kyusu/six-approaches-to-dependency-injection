import { Reader } from "fp-ts/Reader";

export type ComparisonResult = "bigger" | "smaller" | "equal";

type IConsole = { log: typeof console.log; debug: typeof console.debug };

type Dependencies = {
  logger: IConsole;
};

export const compareTwoStrings = (str1: string, str2: string) => (
  logger: IConsole
): ComparisonResult => {
  logger.debug("compareTwoStrings: Starting");
  let result: ComparisonResult;
  if (str1 > str2) {
    result = "bigger";
  } else if (str1 < str2) {
    result = "smaller";
  } else {
    result = "equal";
  }
  logger.log(`compareTwoStrings: ${result}`);
  logger.debug("compareTwoStrings: Finished");
  return result;
};

export const compareTwoStringsReader = (
  str1: string,
  str2: string
): Reader<Dependencies, ComparisonResult> => (dep) => {
  dep.logger.debug("compareTwoStrings: Starting");
  let result: ComparisonResult;
  if (str1 > str2) {
    result = "bigger";
  } else if (str1 < str2) {
    result = "smaller";
  } else {
    result = "equal";
  }
  dep.logger.log(`compareTwoStrings: ${result}`);
  dep.logger.debug("compareTwoStrings: Finished");
  return result;
};

export default compareTwoStringsReader;
