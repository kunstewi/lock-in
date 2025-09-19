//  Create a terminal clock (HH:MM:SS).

function displayTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Clear the console and display the time every second
setInterval(() => {
    console.clear();
    displayTime();
}, 1000);