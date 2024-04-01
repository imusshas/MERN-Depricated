// Nullinsh Coalesing Operator (??):    null, undefined
let val1;
val1 = 5 ?? 10;
// console.log(val1);

val1 = null ?? 10;
// console.log(val1);

val1 = undefined ?? null;
// console.log(val1);

val1 = null ?? undefined;
// console.log(val1);

val1 = undefined ?? null ?? 10;
// console.log(val1);

val1 = null ?? undefined ?? 20;
// console.log(val1);

// TURNURY OPREATOR     // condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80");  