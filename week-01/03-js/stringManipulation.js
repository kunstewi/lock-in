// How to replace a string without touching the original string ?
// How to extract the words from a string in the form of array ?
// How to remove the extra spaces at the start and end of a string without touching the original string ?
// How to convert a string to all capital letters and all small letters ?
// How to convert a string into int ?
// What parseFloat does ?

// SOLUTIONS

// 1. How to replace a string without touching the original string ?
const originalString = "Hello, world!";
const replacedString = originalString.replace("world", "there");
console.log(replacedString); // Output: "Hello, there!"

// 2. How to extract the words from a string in the form of array ?
const sentence = "This is a sample sentence.";
const wordsArray = sentence.split(" ");
console.log(wordsArray); // Output: ["This", "is", "a", "sample", "sentence."]

// 3. How to remove the extra spaces at the start and end of a string without touching the original string ?
const stringWithSpaces = "   Hello, world!   ";
const trimmedString = stringWithSpaces.trim();
console.log(trimmedString); // Output: "Hello, world!"

// 4. How to convert a string to all capital letters and all small letters ?
const mixedCaseString = "Hello, World!";
const upperCaseString = mixedCaseString.toUpperCase();
const lowerCaseString = mixedCaseString.toLowerCase();
console.log(upperCaseString); // Output: "HELLO, WORLD!"
console.log(lowerCaseString); // Output: "hello, world!"

// 5. How to convert a string into int ?
const numericString = "123";
const intValue = parseInt(numericString, 10);
console.log(intValue); // Output: 123

// 6. What parseFloat does ?
const floatString = "123.45";
const floatValue = parseFloat(floatString);
console.log(floatValue); // Output: 123.45