import { withTag, WithTag } from "./withTag";

const readLine = "ReadLine" as const;

export type ReadLine<T> = WithTag<
  typeof readLine,
  {
    next: (input: string) => Program<T>;
  }
>;

export const ReadLine = withTag(readLine);

const writeLine = "WriteLine" as const;

export type WriteLine<T> = WithTag<
  typeof writeLine,
  {
    value: string;
    next: () => Program<T>;
  }
>;

export const WriteLine = withTag(writeLine);

const stop = "Stop" as const;

export type Stop<T> = WithTag<
  typeof stop,
  {
    value: T;
  }
>;

export const Stop = withTag(stop);

export type Program<T> = ReadLine<T> | WriteLine<T> | Stop<T>;
