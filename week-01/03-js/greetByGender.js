// Write a program that greets a person based on their gender (if/else).

function greet(name, gender) {
    if (gender === 'male') {
        console.log(`Hello Mr. ${name}`);
    } else if (gender === 'female') {
        console.log(`Hello Ms. ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

// Example usage
greet('Babu', 'male');   // Output: Hello Mr. Babu
greet('Sona', 'female'); // Output: Hello Ms. Sona
greet('Chomu', 'other');  // Output: Hello Chomu