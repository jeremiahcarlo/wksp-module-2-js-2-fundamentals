// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

let num1 = 12; let num2 = 43

function max(num1, num2) {
    let greaterNumber;

    if (num1 > num2) {
        greaterNumber = num1;
    } else {
        greaterNumber = num2;
    }
 return greaterNumber;
    console.log(`${greaterNumber} is the greater number`);
} 

// Q2b
// Without changing the function at all, 
// can you figure out how we could use it to determine the greater number between 4 integers?

var numbers = [1, 2, 3, 4];
let highestNumber = 0;
numbers.forEach(function (number){
highestNumber = max(number, highestNumber);
});
console.log(`${highestNumber} is the greater number`);

// Q2c
// Would this work with more integers? 

Yes 