const score = 123;
// console.log(score);
const balance = new Number(7000);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));
const otherNumberOne = 123.8966
// console.log(otherNumberOne.toPrecision(3));
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));
const hundredsNicelyPresent = 1_000_000;
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);

/* #####################    MATHS   ##################### */ 
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.5));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9999999999999999999)); // Exceptional Case
// console.log(Math.ceil(4.00000000000000000001)); // Exceptional Case
// console.log(Math.floor(4.99));
// console.log(Math.ceil(4.01));
// console.log(Math.random());
// console.log((Math.random()*10) + 1);  // In Case the value is 0(ZERO)

const MIN = 10;
const MAX = 20;
console.log(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN);