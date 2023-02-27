"use strict";
// Lesson 3: Arrays & Objects
let stringArr = ["one", "hey", "Me"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "J";
stringArr.push("42");
guitars[0] = 1984;
guitars.unshift("beginning");
let test = [];
let bands = [];
bands.push("Led Zeppelin");
// Tuple - Strict Array
let myTuple = ["J", 42, true];
let mixed = ["J", 1, false];
// can't assign mixed to myTuple because there is no guarantee
// that mixed will have 3
// myTuple = mixed;
// Objects
let myObj;
// if you don't put the data types, TS will infer/inference the data types
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "J";
let evh = {
    name: "Eddie",
    active: false,
    albums: ["1984", 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
// cant add a property
// evh.years = 40;
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
