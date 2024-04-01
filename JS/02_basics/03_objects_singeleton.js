const twiteerUser = new Object();

twiteerUser.id = "123abc";
twiteerUser.name = "Composable";
twiteerUser.isSignedIn = false;

// console.log(twiteerUser);

const regularUser = {
    email: "example@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Md. Abid Ullah",
            lastName: "Muhib"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);     // target, source1, source2, ... , sourceN
// console.log(obj4);

const obj5 = Object.assign(obj1, obj2);
// console.log(obj5);
// console.log(obj1);

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
]

// console.log(users[0].email);

// console.log( typeof (Object.keys(twiteerUser)));
// console.log( Object.keys(twiteerUser));
// console.log( Object.values(twiteerUser));
// console.log( Object.entries(twiteerUser));

console.log(twiteerUser.hasOwnProperty("isSignedIn"));
console.log(twiteerUser.hasOwnProperty("isSignedOut"));