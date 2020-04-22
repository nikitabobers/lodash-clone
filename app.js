// ------------------ Array ------------------
// .chunk(array, [size=1])
// Creates an array of elements split into groups the length of size

const array = ["a", "b", "c", "d"];

const chunk = (arr, size) => {
    // let output = arr.slice(0, 2);
    let output = [];
    if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length; i--) {
            // let number = arr.slice(i, arr.length);
            // let number = arr.slice(0, 2);
            output.push(number);
            // console.log(number);
        }
        // console.log(arr);
        console.log(output);
    } else {
        return arr;
    }
};

chunk(array, 2);
