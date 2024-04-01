const myLanguages = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple",
    "c hash": "C#"
}

for (const key in myLanguages) {
    // console.log(`${key} shortcut is for: ${myLanguages[key]}`);
}

const myArray = ["JS", "C++", "Java", "Swift", "C#", "Ruby"];

for (const key in myArray) {
    // console.log(myArray[key]);
}

// const myMap = new Map();
// myMap.set("BD", "Bangladesh");
// myMap.set("USA", "United States of America");
// myMap.set("FR", "France");
// myMap.set("BD", "Bangladesh");

// // Map is not iterable
// for (const key in myMap) {
//     console.log(myMap[key]);
// }