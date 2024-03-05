

// Task - 1 

// Write a program that outputs all the numbers that are 
// divisible by 7 starting from 1 to 100 (both inclusive)

for(let i = 1; i <= 100; i++){
    if(i % 7 === 0) console.log(i);
}

// Task - 2

// Write a program that outputs all the numbers that are 
// divisible by both 2 and 3 starting from 1 to 50 (both 
// inclusive).

for(let i = 1; i <= 50; i++){
    if(i % 6 === 0) console.log(i);
}

// Task - 3 
// Write a program that outputs all the numbers that are 
// divisible by 5 starting from 100 to 50 (both inclusive)

for(let i = 100; i >= 50; i--){
    if(i % 5 === 0) console.log(i);
}

// Task - 4 
// Write a program that outputs the squares of all numbers 
// starting from 0 to 7 (both inclusive).
// NOTE: Use loop!!!
// Expected Output:
// The square of 0 is =  0
// The square of 1 is =  1

for(let i = 0; i <= 7; i++){
console.log('The square of 0 is = ', i * i);
}

// Task - 5

// Write a program that finds sum of the numbers starting 
// from 1 to 10 (both inclusive).
// Calculation => 1+2+3+4+5+6+7+8+9+10

let sum5 = 0;
for(let i = 1; i <= 10; i++){
    sum5 += i;
}
console.log(sum5);


// Task - 6

// n! = n × (n-1) × (n-2) × ... × 2 × 1
// 4! = 4 × 3 × 2 × 1 = 24
let result6 = 1;  
let n = 5;
for(let i = 0; i < n; i++){
    result6 = result6 * (n - i);
}
console.log(result6);

// Task - 7
const {generateRandomNumber} = require('../utils/MathHelper.js');
let randomNumber;
let attempts = 0;

do{
randomNumber = generateRandomNumber(1, 100);
attempts++;
}
while(randomNumber % 5 !== 0);

console.log(`The random number is ${randomNumber} and it took 
${attempts} attempt/s to generate it.`)

// Task - 8

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania' ];

for(let country of countries){
    console.log(countries.sort(countries[country]));
    break;
}

// Task - 9

const cartoon9 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];
console.log(cartoon9);
console.log(cartoon9.includes('Pluto'));

// Task - 10

const cartoon10 = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael' ];
console.log(cartoon10.sort());
console.log(cartoon10.includes('Garfield') &&  cartoon10.includes('Felix'));


// Task - 11

const arr11 = [ 10.5, 20.75, 70, 80, 15.75 ];
console.log(arr11);

for(let num of arr11){
console.log(num);
}

// Task - 12

const objects = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ];
console.log(objects);

let countPB = 0;
let bookPen = 0;

for(let i = 0; i < objects.length; i++){
if(objects[i].toLowerCase().startsWith('p') ||
objects[i].toLowerCase().startsWith('b')) countPB++;
if(objects[i].toLowerCase().includes('pen') || 
objects[i].toLowerCase().includes('book')) bookPen++;
}

console.log("Elements starting with 'B' or 'P' =", countPB);
console.log("Elements having 'book' or 'pen' =", bookPen)

// Task - 13

const nums13 = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];
console.log(nums13);

let greaetr10 = 0;
let eq10 = 0
let less10 = 0;
for(let i = 0; i < nums13.length; i++){
    if(nums13[i] > 10) greaetr10++;
    else if(nums13[i] < 10) less10++;
    else {if (nums13[i] === 10) {eq10++;}

}
}
console.log('Elements that are more than 10 = ', greaetr10);
console.log('Elements that are less than 10 = ', less10);
console.log('Elements that are 10 = ', eq10);

// Task - 14

const arr1 = [ 5, 8, 13, 1, 2 ];
const arr2 = [ 9, 3, 67, 1, 0 ];
const arr3 = [];

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] > arr2[i]) arr3.push(arr1[i]);
    else arr3.push(arr2[i]);
}
console.log(arr3);

// Task - 15


function firstDuplicate(array){

for(let i = 0; i < array.length-1; i++){
    for(let j = i + 1 ; j < array.length; j++){
        if(array[i] === array[j]){
            return  array[i];
        break;
    }
    }}
return -1;
}

const arr151 = [3, 7, 10, 0, 3, 10];
const arr152 = [ 5, 7, 7, 0, 5, 10 ];
const arr153 = [ 5, '5', 3, 7, 4 ];
const arr154 = [ 123, 'abc', '123', 3, 'abc' ];
const arr155 = [ 1, 2, 3];
const arr156 = [ 'foo', 'abc', '123', 'bar' ];
console.log(firstDuplicate(arr151));
console.log(firstDuplicate(arr152));
console.log(firstDuplicate(arr153));
console.log(firstDuplicate(arr154));
console.log(firstDuplicate(arr155) );
console.log(firstDuplicate(arr156));

// Task - 16

function getDuplicates(array){
    const dup = [];
    
    for(let i = 0; i < array.length-1; i++){
        for(let j = i + 1 ; j < array.length; j++){
            if(array[i] === array[j]){
                dup.push(array[i]);
                break;
           
        }
        }}
    return dup;
    }

    console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
    console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
    console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
    console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));


    // Task - 17

    // function reverseStringWords(str){
    //     let arr = str.split(' ');
    //     let first = '';
        

    //     for(let i = 0; i < arr.length; i++){
    //         for(let j = arr[i].length; j >=0; j--){
    //             first = first.concat(((arr[i][j])));
    //         }
    //         first = first + ' ';
    //     }


    //     return first;
    // }
    // let string = 'Hello Javascript';
    // console.log(reverseStringWords(string));

    // Task - 17
   
  
    function reverseStringWords(str){
             let newStr =  str.split("").reverse().join("");
             let split = newStr.split(" ");
             let result = [];
             for(let i = split.length-1; i>=0; i--){
                result.push(split[i]);
             }
             let answer = result.toString().replaceAll(',', ' ');

             return answer;
            
    }
    // let string = 'Hello Javascript';
    console.log(reverseStringWords('Hello Javascript'));
    console.log(reverseStringWords("I like JavaScript"));
    console.log(reverseStringWords("Hello"));
    console.log(reverseStringWords(""));
    console.log(reverseStringWords("    "));
   