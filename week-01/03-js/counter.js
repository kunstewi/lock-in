//  Create a counter in Javascript (counts down from 30 to 0).

let counter = 30;

function countdown() {
    console.log(counter);
    counter--;
    if (counter < 0) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(countdown, 1000);