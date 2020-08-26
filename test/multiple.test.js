// Add the unit tests of the sum function here
const multiple = require('../src/multiple');

test('adds 1 * 2 to equal 2', () => {
    expect(multiple(1, 2)).toBe(2);

});

test('put the number', () => {
    expect(multiple('a', 2)).toBe('error');

});

test('put the number', () => {
    expect(multiple(1, 'c')).toBe('error');

});
