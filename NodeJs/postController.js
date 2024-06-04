// ES module: To make this work config the package.json file:-  "type": "module"

const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
];

const users = [
  { id: 1, firstName: "Nasiat" },
  { id: 2, firstName: "Muhib" }
];

// export const getPosts = () => posts;   // Correct

const getPosts = () => posts;

export { getPosts };

const getUsers = () => users;

export default getUsers;