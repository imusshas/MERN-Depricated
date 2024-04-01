/**
 * Data Types are of two kinds based on how data are stored & accessed in memory:-
 * 1. Primitive
 * 2. Reference (Non-Primitive)
 *
 * JavaScript is a Dynamically Typed Language
*/

// Primitive (Call by Value)
// String, Number, Boolean, null, undefined, Symbol, BigInt

const PI = 3.14;
let height = 181.2;
let temp = null;
let userName;
let bigInt = 123456789101112131415n;
// console.log(typeof (bigInt));

const ID = Symbol("123");
const ANOTHER_ID = Symbol("123");
// console.log(ID === ANOTHER_ID);

// Reference (Non-Primitive)
// Array, Objects, Functions

// Arrays 
const heros = ["Captain America", "Spiderman", "Iron Man"];

// Objects
const myObj = {
    name: "Muhib",
    age: 22
}

// Functions
const myFunction = function () {
    console.log("Function variable");
}

// TypeOf
console.log(typeof (myFunction));