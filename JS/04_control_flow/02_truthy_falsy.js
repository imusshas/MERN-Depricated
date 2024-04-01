// FALSY VALUES: NaN, null, undefined, "", 0, -0, 0n, false
// FALSY VALUES: [], {}, function(){}, "0", 'false', " "

let userEmail = "";

if (userEmail) {
    // console.log(userEmail);
} else {
    // console.log("Invalid email");
}


// ARRAY CHECK
if (Array.isArray(userEmail) && userEmail.length === 0) {
    // console.log("Array is empty");
}




// OBJECT CHECK
const nullObject = null;
const emptyArray = [];
const emptyObject = {};

// Errorneous way
// if (Object.keys(nullObject).length === 0) {
//     console.log("Null object");
// }

// Errorneous way
if (emptyArray != null && Object.keys(emptyArray).length === 0) {
    // console.log("Array object");
}

if (emptyObject !== null && !Array.isArray(emptyObject) && Object.keys(emptyObject).length === 0) {
    console.log("Empty object");
}

// PLAYING WITH FALSY VALUES
if (0 == false && 0 == '') {
    console.log("All falsy");
}

if (0 === false) {
    console.log("Falsy 0");
}