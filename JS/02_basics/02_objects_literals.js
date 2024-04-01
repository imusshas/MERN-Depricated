// Singeleton
// Object.create
// Object Literals

const mySymbol = Symbol("key1");

const jsUser = {
    name: "Muhib",
    "full name": "Md. Abid Ullah Muhib",
    age: 22,
    // mySymbol: "myKeyString1",
    [mySymbol]: "myKeySymbol1",
    location: "Arpara",
    email: "muhib@google.com",
    isSignedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);   // There is no dotted way to access full name
// console.log(jsUser.mySymbol);
// console.log(typeof (jsUser.mySymbol));
// console.log(typeof (jsUser[mySymbol]));
// console.log(jsUser[mySymbol]);

jsUser.email = "muhib@yahoo.com";

// Object.freeze(jsUser);

jsUser.email = "muhib@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello from greeting");
};

console.log(jsUser.greeting);
jsUser.greeting();

jsUser.greetingTwo = function () {
    console.log(`Hello from greeting: ${this["name"]}`);
};

jsUser.greetingTwo();
