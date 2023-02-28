"use strict";
// convert ot more or less specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// TS sees no problem even though it returns as a string
let nextVal = addOrConcat(2, 2, 'concat');
// The DOM
const img = document.getElementById('img');
img.src;
