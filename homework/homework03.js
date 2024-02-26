
const {generateRandomNumber} = require('../utils/MathHelper.js');

console.log('\n------------------------------------\n');


//Task - 1

let ran1 = generateRandomNumber(1,100);
let ran2 = generateRandomNumber(1,100);
let ran3 = generateRandomNumber(1,100);
console.log(ran1, ran2, ran3);

let average = parseInt((ran1 + ran2 + ran3) / 3);
console.log('The average =', average);

if(average >= 50){
    console.log('true');
}else{
    console.log('false');
}


// Task - 2

let r1 = generateRandomNumber(1, 3);
let r2 = generateRandomNumber(1, 3);
let r3 = generateRandomNumber(1, 3);
console.log(r1, r2, r3);

if(r1 === r2 === r3){
    console.log('TRIPLE MATCH');
}else if(r1 === r2 || r2 === r3 || r1 === r3){
    console.log('DOUBLE MATCH');
}else{
    console.log('NO MATCH');
}


// Task - 3

function hasA(string){
    return string.includes('a') || string.includes('A');
}
console.log(hasA('amezing'));

// Task - 4

function doubleOrTripleWord(string){
    if(string.length % 2 === 0){
       return string.repeat(3);
    }else if(string.length % 2 !== 0){
        return string.repeat(2);
    }else{
        return string;
    }
}
console.log(doubleOrTripleWord('end'));


// Task - 5

function firstWord(string){
    let arr = string.split(' ');

    if(arr.length === 1){
    return string;
}else{
    let space = string.indexOf(' ');
    let newStr = string.slice(0,space);
    return newStr;
}
}
console.log(firstWord('Hello'));


// Task - 6

function lastWord(string){
    let space = string.lastIndexOf(' ');
    let newStr = string.slice(space);
    return newStr;
}
console.log(lastWord('I like Hell o'));


// Task - 7

function firstlastWord(string){
    let firstWord = string.slice(0, string.indexOf(' '));
    let lastWord = string.slice(string.lastIndexOf(' ') + 1);
    return firstWord + lastWord;
}
console.log(firstlastWord(''));

// Task - 8
 function startVowel(string){
    return string.startsWith('a') || string.startsWith('e') ||  string.startsWith('i') || 
    string.startsWith('o') || string.startsWith('u') ||
    string.startsWith('A') || string.startsWith('E') ||
     string.startsWith('I') || string.startsWith('O') ||
      string.startsWith('U');

 }
 console.log(startVowel('I like JavaScript'));

 // Task - 9

 function swap4(string){
        let first4 = string.slice(0, 4);
        let last4 = string.slice(-4);
        let mid = string.slice(4,-4);
        return last4 + mid + first4;
    }
    console.log(swap4('JavaScript'));


// Task - 10

function swapFirstLastWord(string){
    let firstWord = string.slice(0, string.indexOf(' '));
    let lastWord = string.slice(string.lastIndexOf(' ') + 1);
    let middle = string.slice(string.indexOf(' ') + 1, string.lastIndexOf(' '));
    return `${lastWord} ${middle} ${firstWord}`;
}
console.log(swapFirstLastWord('I like JavaScrip'));



function firstWord(string){
 let arr = string.split(' ');
return arr[arr.length-1];
}
console.log(firstWord('Yiu will be in ...'));


console.log((3 == '3' || 2 + 5 === "7")&& !(5 < 10 || !false));