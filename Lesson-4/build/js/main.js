"use strict";
// Literal Types
let userName;
userName = "J";
// functions
const add = (a, b) => {
    return a + b;
};
// if there is no return void is used
const logMsg = (message) => {
    console.log("Your answer is", message);
};
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => {
        return prev + curr;
    });
};
logMsg(total(1, 2, 3, 4));
// Never type used to throw errors
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// never type endless loop
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // break loop changes from never to void
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
