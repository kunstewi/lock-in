// Explain setInterval() and setTimeout() by example.
// Calculate the time it takes between a setTimeout call and the inner function actually running.

// SOLUTIONS

// Explain setInterval() and setTimeout() by example.

// setInterval() is used to execute a function repeatedly, with a fixed time delay between each call (in miliseconds).

// Example of setInterval
function greet() {
    console.log("Hello, World!");
}

// Execute greet() every 2000 milliseconds (2 seconds)
setInterval(greet, 2000);

// setTimeout() is used to execute a function once after a specified delay (in milliseconds).

// Example of setTimeout
function greet() {
    console.log("Hello, World!");
}

// Execute greet() after 2000 milliseconds (2 seconds)
setTimeout(greet, 2000);