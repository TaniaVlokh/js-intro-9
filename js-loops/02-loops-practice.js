const {generateRandomNumber} = require('../utils/MathHelper.js');

// Task -1 
for(let i = 100; i >= 0; i--){
console.log(i);
}
// Task - 2

for(let i = 0; i <= 50; i+=2){
    console.log(i);
    }

let result = 0;
for(let i = 0; i <= 25; i++){
    console.log(result);
    result +=2
    }

    for(let i = 50; i >= 0; i-=2){
console.log(50 - i);
}

//Task - 3

let num = 0;
for(let i = 0; i <= 10; i ++){
    console.log(num);
    num +=5;
}

// Task - 5
let sum = 0;
for(let i = 10; i <= 15; i++){
    sum += i;
}
console.log(sum);

// Task - 6
//let school = 'TechGlobal School';
//let n = school.length;

for(let i = 0; i < n; i++){
console.log(school[i])
}

// Task - 7
let school = 'TechGlobal School';
let n = school.length;
let count = 0;

for(let i = 0; i < n; i++){
    if(school[i] === 'o') 
    count++;
    }
console.log(count);

// another approach
sconsole.lo(chool.split('').filter((element) => element.toLowerCase() === 'o').length);

// Task - 8
const {generateRandomNumber} = require('../utils/MathHelper.js');

let ran = generateRandomNumber(10, 20);
console.log(ran);

for(let i = 0; i <= ran; i++){
    if(ran % 2 !== 0) console.log(i);
}

// let num1  = generateRandomNumber(10, 20);
// let num2  = generateRandomNumber(10, 20);

//nums.sort((a, b) => a - b);
// console.log(nums, '=========');  


/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

r1 r2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

let r1 = generateRandomNumber(1, 10);
let r2 = generateRandomNumber(1, 10); 
console.log(r1, r2);


let min = Math.min(r1, r2);
let max = Math.max(r1, r2);

let arr = [];
for(let i = min; i <= max; i++){
arr.push(i);
}
console.log(arr);



const {generateRandomNumber} = require('../utils/MathHelper.js');

let random = generateRandomNumber(1, 10);
console.log(random);

let product = 1;

for(let i = 1; i <= random; i++){
product *= i;
}
console.log(product);
