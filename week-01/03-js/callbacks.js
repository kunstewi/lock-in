// What are callbacks ? Explain with example.

/*A callback is a function passed into another function as an argument,

which is then invoked inside the outer function to complete some kind of routine or action.*/

// A function that takes another function as an argument
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// A callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

// Passing the callback function to the greet function
greet('Alice', sayGoodbye);