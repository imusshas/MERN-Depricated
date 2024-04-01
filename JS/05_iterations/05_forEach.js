const coding = ["JS", "C++", "Java", "Swift", "C#", "Ruby"];

coding.forEach(
    /* Callback Function */ function (item) {
        // console.log(item);
    }

    // Callback function doesn't have a name
);

coding.forEach((item) => {
    // console.log(item);
});

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
];

myCoding.forEach((item) => {
    // console.log(item.languageName);
});

// const values = coding.forEach((item) => {
//     return item;
// });

// console.log(values);