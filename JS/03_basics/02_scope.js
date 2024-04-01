// var c = 300;

let a = 300;


if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // d = 40;
    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

function one(params) {
    const username = "Muhib";

    function two(params) {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);    // Error

    two();
}

// one();

if (true) {
    const username = "muhib";
    if (username === "muhib") {
        const website = "youtube";
        // console.log(`${username} ${website}`);
    }

    // console.log(website);    // Error
}

// console.log(username);   // Error

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}


// let result = addTwo(5);      // Error
// console.log(result);         // Error
const addTwo = function (num) {
    return num + 2;
}