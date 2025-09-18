// Write a function that finds the sum of two numbers.
// Write another function that displays the sum function result in a pretty format.
// Write another function that takes this sum and prints it in passive tense.

// SOLUTIONS

// Write a function that finds the sum of two numbers.
function sum(a, b) {
    return a + b;
}

// Write another function that displays the sum function result in a pretty format.
function prettyPrintSum(a, b) {
    const result = sum(a, b);
    console.log(`The sum of ${a} and ${b} is ${result}.`);
}

// Write another function that takes this sum and prints it in passive tense.
function printSumInPassiveTense(a, b) {
    const result = sum(a, b);
    console.log(`The sum of ${a} and ${b} has been calculated as ${result}.`);
}

// Example usage:
prettyPrintSum(2, 3); // Output: The sum of 2 and 3 is 5.
printSumInPassiveTense(2, 3); // Output: The sum of 2 and 3 has been calculated as 5.