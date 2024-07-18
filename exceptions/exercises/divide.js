// Write a function called 'divide' that takes two parameters: a numerator and a denominator.


function divide(numerator, denominator) {
    if (denominator === 0) {
        throw Error('Attempted to divide by zero.');
    }
    return numerator / denominator;
}
let numerator = 6;
let denominator = 0;
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
try {console.log(divide(numerator, denominator));

} catch (error) {
    console.log(error.message);
}