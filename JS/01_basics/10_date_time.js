// Future API for Date/Time:- Temporal

const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getMonth() + 1);
// console.log(myDate.toLocaleString(
//     "defailt", { weekday: "short" }
// ));

// console.log(myDate.toLocaleString(
//     "defailt", { weekday: "long" }
// ));

// console.log(myDate.toLocaleString(
//     "defailt", { weekday: "narrow" }
// ));

// console.log(myDate.toLocaleString(
//     "default", {timeZone: "UTC"}
// ));

const myCreatedDate = new Date(2023, 0, 23, 17, 0);
// console.log(myCreatedDate.toLocaleString());
const myCreatedDateString = new Date("2023-1-12");
// console.log(myCreatedDateString.toString());
const myCreatedDateStringTwo = new Date("12-31-2023");  // Format: mm/dd/yyyy
// console.log(myCreatedDateStringTwo.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(Math.round(myTimestamp / 1000));    // Converting to seconds from miliseconds