// Lesson 2: Types
let hello: string = "world";
let meaningOfLife: number;
let isLoading: boolean;
let album: number | string; // union type

hello = "42";
meaningOfLife = 42;
isLoading = true;
album = "42";

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
