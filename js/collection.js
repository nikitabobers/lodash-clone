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

// const groupBy= (collection, func) => {
  // const output = [];

  // for (let item of collection) {
  //   output.push(Math.floor(item));
  // }

  // let result = {};
  // output.forEach((x) => (result[x] = (result[x] || 0) + 1));
  // return output.forEach((x) => x * 2);
  // return result;
// };

// console.log(groupBy([6.1, 4.2, 6.3]));

const array = [1,2,3,4];
const double = (number) => number * 2;
const doubleArray = (array) => {
	array.forEach(x => console.log(x + 2))
}
console.log(doubleArray(array))
