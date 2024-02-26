// Task - 1

let str1 = "5", str2 = "2";

str1 = Number(str1);
str2 = Number(str2);

console.log(`The sum of 5 and 2 is = ${str1 + str2}`);
console.log(`The product of 5 and 2 is = ${str1 * str2}`);
console.log(`The division of 5 and 2 is = ${str1 / str2}`);
console.log(`The subtraction of 5 and 2 is = ${str1 - str2}`);
console.log(`The remainder of 5 and 2 is = ${str1 % str2}`);
console.log(`The exponentiation of 5 and 2 is = ${str1 ** str2}`);


// Task - 2

let s1 = "200", s2 = "-50";

s1 = Number(s1);
s2 = Number(s2);

console.log(`The greatest value is = ${Math.max(s1,s2)}`);
console.log(`The smallest value is = ${Math.min(s1,s2)}`);
console.log(`The average is = ${(s1 + s2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(s1 - s2)}`);

// //Math.floor(Math.random() * (b - a + 1)) + a

// Task - 3

let num1 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let num2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

console.log(num1)
console.log(num2)

console.log(`The absolute difference between numbers is = 
${Math.abs(num1 - num2)}`);


// Task - 4

let n1 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let n2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let n3 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let n4 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let n5 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

console.log(n1, n2, n3, n4, n5);
console.log(`The max value = ${Math.max(n1, n2, n3, n4, n5)}`);


// Task - 5
 
let a1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
let a2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
let a3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

console.log(`The number 1 = ${a1}`);
console.log(`The number 2 = ${a2}`);
console.log(`The number 3 = ${a3}`);
console.log(`The sum of numbers is = ${a1 + a2 + a3}`);


// Task - 6

let number1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let number2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let number3 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

console.log(number1, number2, number3);

if (number1, number2, number3 > 25){
    console.log('true');
}else{
    console.log('false');
}


// Task - 7

let name = 'David';
let length = name.length;


console.log(`The length of the name is = ${length}`);
console.log(`The first character in the name is = ${name.charAt(0)}`);
console.log(`The first character in the name is = ${name.charAt(name.length-1)}`);
console.log(`The first character in the name is = ${name.slice(0,3)}`);
console.log(`The first character in the name is = ${name.slice(2)}`);





