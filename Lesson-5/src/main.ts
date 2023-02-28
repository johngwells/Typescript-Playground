// Type Assertion
type One = string;
type Two = string | number;
type Three = "hello";

// convert ot more or less specific
let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2,2,'concat') as string

// TS sees no problem even though it returns as a string
let nextVal: number = addOrConcat(2,2,'concat') as number

// The DOM
const img = document.getElementById('img') as HTMLImageElement
img.src
 