const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "koustavdas",
  [password]: "1234566",
  age: 25,
};

console.log(user.username);
console.log(user.password);
