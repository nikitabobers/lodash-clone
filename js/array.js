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
// 		if (truthy) output.push(truthy);
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

const array = [1, 2, 3, 4];

const drop = (arr, n) => {
    const output = [...arr];
    if (n <= 0 || n === undefined) {
        return arr;
    }
    while (n > 0) {
        n--;
        output.pop();
    }
    return output;
};

const result = drop(array, 2);
console.log(result);

// ---------------------------------------------------------------------

// .drop(array, [n])
// Creates a slice of array with n elements dropped from the end.
