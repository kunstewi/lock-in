// Write a program to print the biggest number in an array.

const numbers = [3, 7, 2, 9, 5];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log(`The largest number is ${largest}.`);