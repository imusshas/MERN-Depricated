// Primitive => Stack
// Non-Primitive => Heap

let myName = "Muhib";
let anotherName = myName;
console.log(anotherName);
myName = "Usshas"
console.log(anotherName);

let myArray = ["Hey", "There"];
let anotherArray = myArray;
console.log(anotherArray);
myArray[0] = "Good";
myArray[1] = "Bye";0
console.log(anotherArray);