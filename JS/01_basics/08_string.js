const name = "Muhib";
const repoCount = "15";
// console.log(name + repoCount + "Value");
// console.log(`${name} ${repoCount} Value`);

const gameName = new String("Java-Script")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("S"));
const newString = gameName.substring(0, 4);
// console.log(newString);
const anotherString = gameName.slice(-5, -1);
// console.log(anotherString);

const newStringOne = "  JS  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://muhib.com/abid%20ullah";
// console.log(url.replace("%20", "-"));
// console.log(url.includes("muhib"));
console.log(gameName.split("-"));