// How to get the index of a string ? (index means the position from where the string starts)
// What if there are multiple same strings and we want the index of the last one ?
// How to get the elements of a string between two given indexes ?


// SOLUTIONS

// 1. How to get the index of a string ? (index means the position from where the string starts)

let string = "Hello World!";
console.log(string.indexOf("World")); // 6

// 2. What if there are multiple same strings and we want the index of the last one ?

let newString = "Hello World World!";
console.log(newString.lastIndexOf("World")); // 12

// 3. How to get the elements of a string between two given indexes ?

let subString = string.substring(6, 11); // 6 is the starting index and 11 is the ending index

console.log(subString); // World

// OR

let newSubString = string.slice(6, 11); // 6 is the starting index and 11 is the ending index

console.log(newSubString); // World

// OR

function cutString(str, startIndex, endIndex){
    let newStr = "";
    for(let i = startIndex; i < endIndex; i++){
      newStr += str[i];
    }
    return newStr;
  }

console.log(cutString(string, 6, 11)); // World