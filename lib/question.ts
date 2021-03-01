import * as readline from "readline";

const question = (query: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise<string>((resolve) => {
    rl.question(`${query}\n`, resolve);
  }).finally(() => rl.close());
};

export default question;
