// Write a program that prints the first name of the males in an complex object.

const people = {
    person1: { firstName: 'John', lastName: 'Doe', gender: 'male' },
    person2: { firstName: 'Jane', lastName: 'Doe', gender: 'female' },
    person3: { firstName: 'Mike', lastName: 'Smith', gender: 'male' },
    person4: { firstName: 'Emily', lastName: 'Jones', gender: 'female' }
};

for (const key in people) {
    if (people[key].gender === 'male') {
        console.log(people[key].firstName);
    }
}