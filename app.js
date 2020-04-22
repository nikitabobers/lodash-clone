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

// const compact = ([...arr]) => {
//     let output = [];
//     for (let truthy of arr) {
//         if (truthy) output.push(truthy);
//     }
//     return output;
// };

// const result = compact(array);
// console.log(result);

// ---------------------------------------------------------------------

// .compact(array)
// Creates an array with all falsy values removed.
