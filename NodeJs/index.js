/******** THE CONFIGURATION USES ES MODULE SO COMMONJS MODULE CAN'T BE USED ******/

// const {
//   generateRandomNumber,
//   celciusToFahrenheit
// } = require("./utils");

// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);

/******** THE CONFIGURATION USES ES MODULE SO COMMONJS MODULE CAN'T BE USED ******/

// import { getPosts } from "./postController";     // Error
import { getPosts } from "./postController.js";     // Correct
console.log(getPosts());

import getUsers from "./postController.js";     // Correct: Importing default function
console.log(getUsers());