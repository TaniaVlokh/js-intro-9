console.log(1 + 2); // 3

// toString() methid is used to corection (converting a number to a string)
let num = 2;
console.log(1 + num.toString());  // 12


// toFixed()

console.log((120000 / 52).toFixed(2));  // 2307.69
console.log((120000 / 26).toFixed(2));  // 4615.38


// converting other data values in a numbers -> Number(), parseInt(), parseFloat()
let num1 ='10';
let num2 = '10.5';

console.log(num1 + 5);  // 105
console.log(num2 + 5);  //10.55

console.log(Number(num1) + 5);  // 15
console.log(Number(num2) + 5);  // 15.5

console.log(parseInt(num1) + 5);  // 15
console.log(parseInt(num2) + 5);  // 15

console.log(parseFloat(num1) + 5);  // 15
console.log(parseFloat(num2) + 5);  // 15.5


// SAFE INTEGER
console.log(Number.isInteger("Hello"));    // false
console.log(Number.isInteger(true));       // false
console.log(Number.isInteger(undefined));  // false
console.log(Number.isInteger(57));         // true
console.log(Number.isInteger(57.00));      // false

console.log(Number.isSafeInteger(0));                    // true
console.log(Number.isSafeInteger(900919999999999));      // false
console.log(Number.isSafeInteger(9999999999999999));      // true







