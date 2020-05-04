// ------------------ Array ------------------
// .chunk(array, [size=1])
// Creates an array of elements split into groups the length of size.

// const array = ["a", "b", "c", "d", "e", "f"];

// const chunk = (arr, size) => {
//     let output = [];
//     let newArr = [...arr];
//     if (size <= 0) return newArr;
//     while (newArr.length) output.push(newArr.splice(0, size));
//     return output;
// };

// const result = chunk(array, 2);
// console.log(result);

// ---------------------------------------------------------------------

// .compact(array)
// Creates an array with all falsy values removed.

// const array = [1, 2, 0, "", 4, false];

// const compact = ([...arr]) => --> {
// 			let output = [];
// 	for (let truthy of arr) {

// 	}
// 	return output;
// };

// const result = compact(array);
// console.log(result);

// ---------------------------------------------------------------------

// .difference(array, [values])
// Creates a new array concatenating array with any additional arrays and/or values.

// const array = [1, 2, 3, 4];

// const difference = (arr, values) => {
//     const output = [];
//     arr.filter(value => {
//         if (values.includes(value)) {
//             output.push(value);
//         }
//     });
//     return output;
// };

// const result = difference(array, [2, 3]);
// console.log(result);

// ---------------------------------------------------------------------

// .drop(array, [n])
// Creates a slice of array with n elements dropped from the end.

// const array = [1, 2, 3, 4];

// const drop = (arr, n) => {
//     const output = [...arr];
//     if (n <= 0 || n === undefined) {
//         return arr;
//     }
//     while (n > 0) {
//         n--;
//         output.pop();
//     }
//     return output;
// };

// const result = drop(array, 2);
// console.log(result);

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

const array = [1, 2, 3];

const fill = (arr, n) => {
    return arr.fill(n);
};

console.log(fill(array, 'a'));
