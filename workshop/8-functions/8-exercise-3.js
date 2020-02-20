// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

let AA = 76; let BB = 60; let CC = 83; let DD = 100; let EE = 78;

function calculateAverage(a, b, c, d, e) { 
    let sum = (a + b + c + d + e);
    let avg = sum / 5;
    return (avg)
}

// make certain to console the returned value
console.log(calculateAverage(AA, BB, CC, DD, EE));