// Concatination

let fname = 'John';

// length property - returns how many characters you have in the string
let sizeFName = fname.length;
console.log(sizeFName);  // 4

// convat()  method
let lname = 'Wick';

// let fullNmae = fname + ' ' + lname;
// let fullName = `${fname} ${lname}`;
let fullName = fname.concat(' ').concat(lname);

console.log(fullName);

/*
TASK: it combines strings
RETURN: it returns a new string
ARGUMENTS: it takes a string as an argument
CHANGE ORIDINAL VALUE: it does not change original values
STATIC or NON-STATIC: non-static

Static vs non-static decision for properties and methids
Did you call methid with variable?
YES -> non-static
NO -> static
*/

Math.max();  // static

let num1= 5; // num1....() - non-static

