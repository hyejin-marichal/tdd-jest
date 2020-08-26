// Add the unit tests of the sum function here
const fizzBuzz = require('../src/fizz');
const nbr = [
    [1, 1],
    [3, 'Fizz'],
    [5, 'Buzz'],
    [15, 'FizzBuzz']
];

for (let nbrElement of nbr) {
    test(`${nbrElement[0]} should return ${nbrElement[1]}`, () => {
        expect(fizzBuzz(nbrElement[0])).toBe(nbrElement[1]);
    });
}
