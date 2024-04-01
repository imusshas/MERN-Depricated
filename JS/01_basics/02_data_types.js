"use strict";   // Treat all JS code as newer version

// Primitive Data Types
let lastName = "Muhib";  // String
let age = 22;    // Number [Range: 2^53]
let phoneNo = 12345678900n;  // BigInt
let isSignedIn = false;  // Boolean
let state;  // Undefined
let income = null;  // Empty [Null itself is a standalone value (object)]
const FIGMA = Symbol("figma");   // Symbol  [Uniqeness]

console.log(typeof lastName);   // string
console.log(typeof age);    // number
console.log(typeof phoneNo);    // bigint
console.log(typeof isSignedIn); // boolean
console.log(typeof state);  // undefined
console.log(typeof income); // object