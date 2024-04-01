// Arrays make SHALLOW copy: Share the same reference point
const myArray = [1, 2, 3, 4, 5];
// console.log(myArray[0]);
// console.log(myArray[6]);

const myHeros = new Array("Batman", "Spiderman");
// console.log(myHeros);

// Array Methods
// myArray.push(6, 7);
// myArray.pop()

myArray.unshift(10);
// console.log(myArray);
myArray.shift();
// console.log(myArray);
// console.log(myArray.includes(10));
// console.log(myArray.indexOf(10));

const newArray = myArray.join()
// console.log(myArray);
// console.log(typeof (newArray));

// slice, splice
// console.log("A", myArray);

const myArrayOne = myArray.slice(1, 3)
// console.log(myArrayOne);
// console.log("B", myArray);

const myArrayTwo = myArray.splice(1, 3)
// console.log(myArrayTwo);
// console.log("C", myArray);

const marvelHeros = ["Spiderman", "Ironman", "Thor"];
const dcHeros = ["Batman", "Spiderman", "Flash"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allHerosTwo = [...marvelHeros, ...dcHeros, ...myArray];   // Spread operator
// console.log(allHerosTwo);

const myNewArray = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5], { "Age": 23 }];
const myFlatArray = myNewArray.flat(Infinity)
// console.log(myFlatArray);

// console.log(Array.isArray("Muhib"));
// console.log(Array.from("Muhib"));
// console.log(Array.from({ name: "Muhib" }));     // !important

let scoreOne = 100;
let scoreTwo = 200;
let scoreThree = 300;
// console.log(Array.of(scoreOne, scoreTwo, scoreThree));