const myNums = [1, 2, 3];
let initialValue = 0;

const total = myNums.reduce((accumulator, currentValue) => {
    // console.log(`acc: ${accumulator} and cur: ${currentValue}`);
    return accumulator + currentValue
}, initialValue);

// console.log(total);

const shoppingCart = [
    {
        courseName: "JavaScript",
        price: 2999
    },
    {
        courseName: "Python",
        price: 999
    },
    {
        courseName: "App Development",
        price: 9999
    },
    {
        courseName: "Data Science",
        price: 19999
    },
]

let priceToPay = shoppingCart.reduce( (acc, currItem) => acc + currItem.price, 0);
console.log(priceToPay);