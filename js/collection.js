// .countBy

// const countBy = (collection, func) => {
//   const output = [];

//   for (let item of collection) {
//     output.push(Math.floor(item));
//   }

//   let result = {};

//   output.forEach((x) => (result[x] = (result[x] || 0) + 1));

//   return result;
// };

// console.log(countBy([6.1, 4.2, 6.3]));

// ---------------------------------------------------------------------

// .forEach(collection, iteratee)

// const array = [1, 2, 3];

// // array.forEach(function (value) {
// //   console.log(value);
// // });

// const forEachRight = (array) => {
//   const reverse = array.reverse();
//   return reverse.forEach((item) => console.log(item));
// };

// forEachRight(array);

// ---------------------------------------------------------------------

// every

// const users = [
//   { name: "mike", age: 30, active: false },
//   { name: "bob", age: 20, active: false },
// ];

// const checkAge = (age) => age > 18;

// console.log(users.every((user) => checkAge(user.age)));

// ---------------------------------------------------------------------

// filter(collection, predicate)
// Iterates over elements of collection, returning an array of all elements predicate returns truthy for.

// const users = [
//   { name: "mike", age: 30, active: false },
//   { name: "bob", age: 18, active: false },
//   { name: "alex", age: 23, active: true },
//   { name: "kek", age: 13, active: true },
// ];

// console.log(users.filter((user) => user.active))
// console.log(users.filter((user) => user.name === 'bob'))
// console.log(users.filter((user) => user.age > 20 ))

// ---------------------------------------------------------------------

// .find(collection)
// return the first element truthy

// console.log(users.find((user) => user.active))

// ---------------------------------------------------------------------

// .findLast()
// const findLast = (array, func) =>
// 	array.reverse().find(func)

// console.log(findLast(users, user => user.active))

// ---------------------------------------------------------------------

// .groupBy

// const numbers = [6.1, 4.2, 6.3];

// const groupBy = numbers.reduce((obj, num) => {
//   // Get the integer value of the number
//   let int = Math.floor(num);

//   // If the integer doesn't already exist as a key in the object, create it
//   if (!obj.hasOwnProperty(int)) {
//     obj[int] = [];
//   }

//   // Push the number to its integer key
//   obj[int].push(num);

//   // Pass the object on to the next loop
//   return obj;
// }, {});

// console.log(groupBy);

// ---------------------------------------------------------------------

// keyBy

const array = [
  { name: "mike", age: 22 },
  { name: "bob", age: 25 },
];

const keyBy = (array, key) =>
  array.reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {});

console.log(keyBy(array, "name"));

