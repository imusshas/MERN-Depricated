const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
    return num > 5;
});

const newNumsTwo = myNums.filter((num) => (num > 5));

// console.log(newNums);
// console.log(newNumsTwo);


const newNumsThree = [];

myNums.forEach((item) => {
    if (item > 5) newNumsThree.push(item);
});

// console.log(newNumsThree);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooksGenre = books.filter((book) => book.genre === "History");
// console.log(userBooksGenre);

const userBooksPublish = books.filter((book) => (book.publish >= 2000));
// console.log(userBooksPublish);

const userBooksEdition = books.filter((book) => { return book.edition >= 2010; });
console.log(userBooksEdition);