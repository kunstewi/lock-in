// Write a program that reverses all the elements in an array.

// Using reverse method

// function reverseArray(arr) {
//     return arr.reverse();
// }

// // Example usage:
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// Using loops

function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]