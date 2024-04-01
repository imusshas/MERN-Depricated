// let stringValue = "89abc";
// console.log(typeof (stringValue));  // The data is coming through a form. In the backend programmer doesn't know what type of data is coming

// let stringInNumber = Number(stringValue);
// console.log(typeof (stringInNumber));
// console.log(stringInNumber);

// let nullValue = null;
// let nullInNumber = Number(nullValue)
// console.log(nullInNumber);

// let undefinedValue = undefined;
// let undefinedInNumber = Number(undefinedValue);
// console.log(undefinedInNumber);

// let booleanValue = true;
// let booleanInNumber = Number(booleanValue);
// console.log(booleanInNumber);

let numberValue = 1;
let numberInBoolean = Boolean(numberValue);
console.log(numberInBoolean);

let emptyString = "";
let emptyStringInBoolean = Boolean(emptyString);
console.log(emptyStringInBoolean);

let nonEmptyString = "nonEmpty";
let nonEmptyStringInBoolean = Boolean(nonEmptyString);
console.log(nonEmptyStringInBoolean);

let numberInString = String(numberValue);
console.log(numberInString);