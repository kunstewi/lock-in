// How to add an new element to the end of an array without touching the original array ?
// How to add an new element to the beginning of an array without touching the original array ?
// How to remove an element from an array from the last without touching the original array ?
// How to remove an element from an array from the beginning without touching the original array ?
// How to merge 2 arrays ?

// SOLUTIONS

const originalArray = [1,2,3];
console.log(originalArray);

// How to add a new element to the end of an array without touching the original array?

let initialArray = [1,2,3];
initialArray.push(4);
console.log(initialArray);

// How to add a new element to the beginning of an array without touching the original array?

const array = [1,2,3];
array.unshift(0);
console.log(array);

// How to remove an element from an array from the last without touching the original array ?

const popArray = [1,2,3];
popArray.pop();
console.log(popArray);

// How to remove an element from an array from the beginning without touching the original array ?

const shiftArray = [1,2,3];
shiftArray.shift();
console.log(shiftArray);

// How to merge 2 arrays.

let firstArray = [1,2,3];
let secondArray = [4,5,6];
console.log(firstArray.concat(secondArray));
