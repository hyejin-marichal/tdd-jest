// Implement the sum function here
function fizzBuzz(a) {
    if (a % 3 === 0 && a % 5 !== 0) {
        return 'Fizz'
    } else if (a % 5 === 0 && a % 3 !== 0) {
        return 'Buzz'
    } else if (a % 3 === 0 && a % 5 == 0) {
        return 'FizzBuzz'
    } else {
        return a
    }
}

module.exports = fizzBuzz;