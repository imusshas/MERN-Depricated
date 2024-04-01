// for of
const arr = [1, 2, 3, 4, 5]
for (const value of arr) {
    // console.log(value);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    if (greet === " ") {
        continue;
    }
    // console.log(`Char is: ${greet}`);
}


// Map
let myMap = new Map();
myMap.set("BD", "Bangladesh");
myMap.set("USA", "United States of America");
myMap.set("FR", "France");
myMap.set("BD", "Bangladesh");
// console.log(myMap);

for (const key of myMap) {
    // console.log(key);
}

for (const [key, value] of myMap) {
    console.log(key, ":-", value);
}

const myGame = {
    game1: "NFS",
    game2: "Spiderman"
}

// Errorneous
// for (const iterator of myGame) {     
//     console.log(iterator);
// }