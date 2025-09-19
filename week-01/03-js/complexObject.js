// What is complex object ? Give example.

// SOLUTION

// A complex object is an object of objects. Complex objects are nested.

const complexObject = [{
    firstName: Stewi,
    lastName: Griffin,
    Occupation: programmers,
    Siblings: {
        firstSibling: Chris,
        secondSibling: Meg
    }
},{
    firstName: Meg,
    lastName: Griffin,
    Occupation: Useless,
    Siblings: {
        firstSibling: Chris,
        secondSibling: Stewi
    }
}]

// Accessing properties
console.log(complexObject[0].firstName); // Output: Stewi
console.log(complexObject[1].Siblings.secondSibling); // Output: Stewi

// Store the original occupation
const originalOccupation = complexObject[0].Occupation;

// Modifying properties
complexObject[0].Occupation = 'Software Engineer';
console.log(complexObject[0].Occupation); // Output: Software Engineer

// Iterating over the array
complexObject.forEach(person => {
    console.log(`${person.firstName} ${person.lastName} is a ${person.Occupation}`);
});

// Adding new objects
complexObject.push({
    firstName: 'Brian',
    lastName: 'Griffin',
    Occupation: 'Writer',
    Siblings: {
        firstSibling: 'Stewi',
        secondSibling: 'Meg'
    }
});

// Filtering objects
const programmers = complexObject.filter(person => person.Occupation === 'Software Engineer');
console.log(programmers);

// Mapping objects
const fullNames = complexObject.map(person => `${person.firstName} ${person.lastName}`);
console.log(fullNames); // Output: ['Stewi Griffin', 'Meg Griffin']