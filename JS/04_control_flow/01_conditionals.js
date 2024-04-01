// if
// <, <=, >, >=, ==, !=, 
// == & != doesn't check data type

if (2 == "2") {
    // console.log("Executed first");
}

if (2 === "2") {
    // console.log("Executed second");
}

if (2 != "2") {
    // console.log("Executed third");
}

if (2 !== "2") {
    // console.log("Executed fourth");
}

const temparature = 40
if (temparature < 50) {
    // console.log("Temparature is less than 50");
} else {
    // console.log("Temparature is 50 or greater than 50");
}

const score = 200;

if (score > 100) {
    let power = "fly";
    // console.log(`user power: ${power}`);
}


// Shrthand notation
const balance = 1000;
// if (balance > 500) console.log(`Your balance is ${balance}`);

if (balance < 500) {
    // console.log("Balance is less than 500");
} else if (balance < 700) {
    // console.log("Balance is less than 700");
} else if (balance < 900) {
    // console.log("Balance is less than 900");
} else {
    // console.log(`Balance is ${balance}`);
}

let userLoggedIn = true;
let credit = 1000;
let gestUser = true

if (userLoggedIn && credit > 500 && !gestUser) {
    // console.log("Allow to buy course");
} else if (gestUser) {
    // console.log("Allow to visit course");
}

let loggedInFromGoogle = true
let loggedInFromEmail = false


if (loggedInFromEmail || loggedInFromGoogle || gestUser) {
    // console.log("User logged in");
}

let month = 12;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid month");
        break;
}