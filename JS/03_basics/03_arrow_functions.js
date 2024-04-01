const user = {
    username: "muhib",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    },
    // hardCodedWelcomeMessage: function () {
    //     console.log(`${username}, welcome to hardcoded website`);    // Error
    // }
}

// user.welcomeMessage();

// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

function chai() {
    console.log(this);
}

// chai();

function code() {
    let username = "muhib";
    console.log(this.username);
}

// code();

const variableFunctionChai = function (params) {
    let username = "muhib";
    console.log(this.username);
    console.log(this);
}

// variableFunctionChai();



const variableFunctionCode = () => /* Arrow Function */ {
    let username = "muhib";
    console.log(this.username);
    console.log(this);
}

// variableFunctionCode();


const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

// console.log(addTwoNumbers(3, 4));

const addTwoNumbersWithImplicitReturn = (num1, num2) => num1 + num2;
// console.log(addTwoNumbersWithImplicitReturn(3, 4));

const addTwoNumbersWithImplicitReturnInParenthesis = (num1, num2) => (num1 + num2);
// console.log(addTwoNumbersWithImplicitReturnInParenthesis(3, 4));

const getObjectInWrongWay = () => {username: "muhib"};
console.log(getObjectInWrongWay());

const getObject = () => ({username: "muhib"});
console.log(getObject());
