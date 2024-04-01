function sayMyName() {
    console.log("M");
    console.log("U");
    console.log("H");
    console.log("I");
    console.log("B");
};

// sayMyName();


function addTwoNumbers(number1 /* Parameter */, number2) {
    // console.log(number1 + number2);
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
};

// addTwoNumbers();
// addTwoNumbers(3 /* Argument */, 4);
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

function loginUserMessage(username = "defaultValue") {
    if (!username) {
        return 'Please enter a username';
    }
    return `${username} just logged in`;
};

// console.log(loginUserMessage());
// console.log(loginUserMessage("muhib"));
// console.log(loginUserMessage(""));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
};

// console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {
    name: "Muhib",
    age: 22
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject?.username} and age is ${anyObject.age}`);
};

// handleObject(user);
// handleObject({
//     username: "User",
//     age: 30
// });

const myNewArray = [200, 400, 500, 1000];

function returnSecondValue(getArray) {
    return getArray[1];
};

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
console.log(returnSecondValue([200]));