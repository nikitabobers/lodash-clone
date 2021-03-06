const arrNum6 = [1, 2, 3, 4, 5, 6];
const arrNum5 = [1, 2, 3, 4, 5];
const arrayLet = ["a", "b", "c", "d", "e", "f"];

// ---------------------------------------------------------------------

// .chunk(array, [size=1])
// Creates an array of elements split into groups the length of size.

// const chunk = (arr, size) => {
// 	let output = [];
// 	let newArr = [...arr];

// 	if (size <= 0) return newArr;

// 	while (newArr.length) {
// 		output.push(newArr.splice(0, size));
// 	}

// 	return output;
// };

// const result = chunk(arrNum5, 2);
// console.log(result);

// ---------------------------------------------------------------------

// .compact(array)
// Creates an array with all falsy values removed.

// const array = [1, 2, 0, "", 4, false];

// const compact = ([...arr]) => {
// 	let output = [];
// 	for (let truthy of arr) {
// 		if (truthy) {
// 			output.push(truthy);
// 		}
// 	}
// 	return output;
// };

// const result = compact(array);
// console.log(result);

// ---------------------------------------------------------------------

//_.concat(array, [values])
// Creates a new array concatenating array with any additional arrays and/or values.

// const _ = {
// 	concat: function (arr, ...values) {
// 		return arr.concat(values);
// 	},
// };

// const result = _.concat(arrNum6, 1, 9, [2]);

// console.log(result);
// ---------------------------------------------------------------------

// difference(array, [values]);
// Creates an array of array values not included in the other given arrays

// const _ = {
// 	difference: function (arr, values) {
// 		const output = [];

// 		if (values.length <= 0 || values === undefined) {
// 			return arr;
// 		}

// 		arr.filter((value) => {
// 			if (values.includes(value)) {
// 				output.push(value);
// 			}
// 		});
// 		return output;
// 	},
// };

// const resultEmpty = _.difference(arr, []);
// const result = _.difference(arr, [1, 2]);
// console.log(result);

// ---------------------------------------------------------------------

// .drop(array, [n])
// Creates a slice of array with n elements dropped from the end.

// const drop = (arr, n) => {
// 	const output = [...arr];
// 	if (n <= 0 || n === undefined) {
// 		return arr;
// 	}
// 	while (n > 0) {
// 		n--;
// 		output.pop();
// 	}
// 	return output;
// };

// const result = drop(arrNum6, 2);
// console.log(result);

// ---------------------------------------------------------------------

// _.fill(array,value,start,end)
// Fills elements of array with value from start up to, but not including, end.

// const _ = {
// 	fill: function (arr, value, start, end) {
// 		return arr.fill(value, start, end);
// 	},
// };

// const fillA = _.fill(arrNum5, "a", 0, 3);
// const fillB = _.fill(arrNum5, "b", 0);
// console.log(fillA);

// ---------------------------------------------------------------------

// .flatten(array)
// Flattens array a single level deep

// const array = [1, 2, 3, [4, 5, [6]]];

// const flatten = arr => {
//     arr.flat();
//     return arr;
// };

// const result = flatten(array);
// console.log(result);

// ---------------------------------------------------------------------

// .flattenDeep(array)
// Flattens array a single level deep

// const array = [1, 2, 3, [4, 5, [6]]];

// const flattenDeep = arr => {
//     return arr.reduce(
//         (acc, val) => acc.concat(Array.isArray(val) ? flattenDeep(val) : val),
//         []
//     );
// };

// const result = flattenDeep(array);
// console.log(result);

// ---------------------------------------------------------------------

// .fill(array, n)
// Fill elemtns of array with value

// const array = [1, 2, 3];

// const fill = (arr, n) => {
//     return arr.fill(n);
// };

// console.log(fill(array, 'a'));

// ---------------------------------------------------------------------

// .findIndex(array)
// Returns index of first element that predicate returns truthy

// const users = [
//   { user: "barney", age: 3, active: true },
//   { user: "fred", age: 4, active: false },
//   { user: "pebbles", age: 11, active: true },
// ];

// const result = users.findIndex((obj) => obj.age >= 10);

// console.log(result);

// ---------------------------------------------------------------------

// .fromPairs(array)

// const array = [
//   ["x", 10],
//   ["y", 5],
// ];
// const fromPairs = (arr) => {
//   return Object.fromEntries(arr);
// };
// const result = fromPairs(array);
// console.log(result);

// ---------------------------------------------------------------------

// // Head and Tail
// const array = [1, 2, 3, 4];
// const [head, ...tail] = array;
// console.log(tail);

// // Last and Initial
// const array = [1, 2, 3, 4];
// const [last, ...initial] = array.reverse();
// console.log(initial);

// ---------------------------------------------------------------------

// .initial(array)
// Gets all but the last elements of arrays

// const array = [1, 2, 3, 4, 5];

// const initial = (arr) => {
//   return arr.slice(0, -1);
// };
// console.log(initial(array));

// ---------------------------------------------------------------------

// .intersection(array)
// Creates an array of unique values that are included in all given arrays

// const intersection = (arr, ...args) => {
//   return arr.filter((item) => args.every((arr) => arr.includes(item)));
// };

// console.log(intersection([1, 2, 3], [1, 2], [1, 2, 4]));

// ---------------------------------------------------------------------

// .join(array, separator)

// const join = (arr, symbol) => {
//   return arr.join(symbol);
// };
// console.log(join([1, 2, 3], "-"));

// ---------------------------------------------------------------------

// .last(array)
// Gets the last element of array

// const last = (arr) => {
//   return arr[arr.length - 1];
// };

// console.log(last([1, 2, 3]));

// ---------------------------------------------------------------------

// .nth(array, [n=0])

// const nth = (array, index) => {
//   return index < 0 ? array[Math.abs(index)] : array[index];
// };

// console.log(nth(["a", "b", "c"], -2));

// ---------------------------------------------------------------------

// .pulll(array, [value])

// const pull = (array, value) => {
//   return array.filter((index) => index !== value);
// };

// console.log(pull([1, 2, 3, 3, 2, 1, 1], 2));
// console.log(pull(["a", "b", "a", "c"], "a"));

// ---------------------------------------------------------------------

// .pullAll(array, [values])

// const pullAll = (array, value) => {
//   return array.filter((item) => !value.includes(item));
// };

// console.log(pullAll([1, 2, 3, 4, 4, 1], [1, 4]));

// ---------------------------------------------------------------------

// .pullAt(array, [indexes])

// const array = ["a", "b", "c", "d", "e"];

// const pullAt = (array, range) => {
//   return range
//     .reverse()
//     .map((i) => array.splice(i, 1)[0])
//     .reverse();
// };

// console.log(array);
// console.log(pullAt(array, [1, 3]));

// ---------------------------------------------------------------------

// .remove(array, [predicate])
// const array = [1, 2, 3, 4, 5, 6];

// const remove = (array, fn) => {
//   return array.filter((item, i) => fn(item) && array.splice(i, 1));
// };

// const evens = remove(array, (n) => n % 2 === 0);

// console.log(array);
// console.log(evens);

// ---------------------------------------------------------------------

// .reverse(array)

// const reverse = (array) => {
//   return array.reverse();
// };

// console.log(reverse([1, 2, 3]));

// ---------------------------------------------------------------------

// .sortedIndex(array, value)

// const sortedIndex = (array, value) => {
//   array.sort();
//   for (let i of array) {
//     if (i > value) return array.indexOf(i);
//   }
// };
// console.log(sortedIndex([3, 1, 7, 6, 9, 8, 2, 5], 4));

// ---------------------------------------------------------------------

// .sortIndexOf (array, value)

// const sortIndexOf = (arr, value) => [...arr].sort().indexOf(value);

// console.log(sortIndexOf([2, 8, 5, 1, 2, 7], 5));

// ---------------------------------------------------------------------

// .uniq(array)
// Creates duplicate-free version of an array

// const array = [1, 2, 2, 3, 4, 4];

// const unique = [...new Set(array)];

// console.log(unique);

// ---------------------------------------------------------------------

// .sortedUniq(array)

// const array = [6, 5, 7, 2, 1, 5, 4, 6, 7];

// // Filter method
// const sortedUniq = (array) => {
//   return array.sort().filter((item, index) => {
//     return array.indexOf(item) === index;
//   });
// };

// // Set method
// const sortedUniq = (array) => [...new Set(array)].sort();

// console.log(sortedUniq(array));

// ---------------------------------------------------------------------

// .tail(array)
// Gets all but the firsdt element of array

// const array = [1, 2, 3, 4];

// const tail = (array) => array.slice(1);
// const tail = (array) => array.splice(0, 1);

// console.log(tail(array));

// ---------------------------------------------------------------------

// .take(array, [n=1])
// Creates a slice of array with n elements taken from the beginning.

// const take = (array, number) => {
//   if (number == null) {
//     return array.slice(0, 1);
//   }
//   return array.slice(0, number);
// };

// console.log(take(array6, 4));
// console.log(take(array6, 8));
// console.log(take(array6, 0));
// console.log(take(array6));

// ---------------------------------------------------------------------

// .takeRight(array, [n=1])

// const takeRight = (array, number) => {
//   if (number == null) return array.slice(array.length - 1);
//   if (number > array.length) return array;
//   if (number === 0) return array.slice(array.length);

//   return array.slice(-number);
// };

// console.log(takeRight(array6));
// console.log(takeRight(array6, 2));
// console.log(takeRight(array6, 4));
// console.log(takeRight(array6, 8));
// console.log(takeRight(array6, 0));

// ---------------------------------------------------------------------

// .union([arrays])
// Creates an array of unique valuse

// const union = (arr, ...args) => [...new Set(arr.concat(...args))];

// console.log(union([1], [2], [3, 4]));

// ---------------------------------------------------------------------

// .zip([arrays])
// Creates an array of grouped elements

// const zip = (array, ...args) =>
//   array.map((value, index) => [value, ...args.map((arr) => arr[index])]);

// console.log(zip(["a", "b"], [1, 2]));

// .unzip([array])
// const unzip = ([...args]) => zip(...args);
// console.log(
//   unzip([
//     ["a", 1],
//     ["b", 2],
//   ])
// );

// ---------------------------------------------------------------------

// .without(array, [values])
// Creates an array excluding all given values.

// const array = [1, 2, 3, 4, 2, 3];

// const without = (arr, ...values) =>
//   arr.filter((value) => !values.includes(value));

// console.log(without(array, 1, 2));

// ---------------------------------------------------------------------

// xor([arrays])
// Creates an array of unique values that is the symmetric difference of the given array

// const findDuplicateNumber = (array) =>
//   parseInt(array.filter((item, index) => array.indexOf(item) !== index));

// const removeNumber = (array, number) => array.filter((item) => item !== number);

// const xor = (arrayOne, arrayTwo) => {
//   const array = arrayOne.concat(arrayTwo);
//   const duplicate = findDuplicateNumber(array);
//   return removeNumber(array, duplicate);
// };

// console.log(xor([2, 1], [2, 4, 3]));
