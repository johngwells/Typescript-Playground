// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarists {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

type UserId = stringOrNumber;

// Literal Types
let userName: "J" | "B" | "C";
userName = "J";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

// if there is no return void is used
const logMsg = (message: any): void => {
  console.log("Your answer is", message);
};

logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));

// Rest Parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => {
    return prev + curr;
  });
};

logMsg(total(1, 2, 3, 4));

// Never type used to throw errors
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// never type endless loop
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;

    // break loop changes from never to void
    if (i > 100) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number'
    ? true : false
}

const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';
  return createError('This should never happen');
}