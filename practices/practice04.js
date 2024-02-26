const {CharacterHelper} = require('../utils/CharacterHelper.js');
const {generateRandomNumber} = require('../utils/MathHelper.js');

// Task - 1

// Best solution   -> console.log(num1 === num2);
let num1 = 1;
let num2 = 1;
if(num1 === num2){
    console.log(true);
}else{
    console.log(false);
}

// Task - 2;

let t2character = '$';

console.log(t2character.charCodeAt(0));

if(t2character.charCodeAt(0) >= 48 && t2character.charCodeAt(0) <= 57){
    console.log(t2character, 'is a digit');
}else if ((t2character.charCodeAt(0)>= 65 && t2character.charCodeAt(0) <= 90) || (t2character.charCodeAt(0)>= 97 && t2character.charCodeAt(0) <= 122)){
    console.log(t2character, 'is a letter');
}else{
    console.log("INVALID INPUT");
}


// Best solution

//let t2character = 'A';
let t2acii = t2character.charCodeAt(0);

if(48 <= t2acii && t2acii <= 57) console.log(`${t2character} is a digit`);
else if((65 <= t2acii && t2acii <= 90) || (97 <= t2acii && t2acii <= 122)) console.log(`"${t2character}" is a letter`);
else console.log('INVALID INPUT');


// Task - 3

let t3character = 'i';
let t3acii = t3character.charCodeAt(0);

if(65 <= t3acii && t3acii <= 90) console.log(`"${t3character}" is an uppercase letter`);
else if(97 <= t3acii && t3acii <= 122) console.log(`"${t3character}" is an lowercase letter`);
else console.log('INVALID INPUT');


switch(true){
case 65 <= t3acii && t3acii <= 90:
    console.log(`"${t3character}" is an uppercase letter`);
    break;
case 97 <= t3acii && t3acii <= 122:
    console.log(`"${t3character}" is an lowercase letter`);
    break;
default:
    console.log('INVALID INPUT');
}


// Task - 4

let t4character = '%';
let t4acii = t4character.charCodeAt(0);

if(!((65 <= t4acii && t4acii <= 90) 
|| (97 <= t4acii && t4acii <= 122) 
|| (48 <= t4acii && t4acii <= 57) 
|| (t4character === ' '))){
console.log(`"${t4character}" is a special character`);
}
else{
    console.log(`"${t4character}" is not special character`);
}

// Best solution

if((t4acii === 32) ||(65 <= t4acii && t4acii <= 90) || (97 <= t4acii && t4acii <= 122) || (48 <= t4acii && t4acii <= 57)){
    console.log(`"${t4character}" is not special character`);
}  else{
    console.log(`"${t4character}" is special character`);
}

// Task -5

let t5character = 'i';
let t5acii = t5character.charCodeAt(0);

if(!((65 <= t5acii && t5acii <= 90) || (97 <= t5acii && t5acii <= 122))){
    console.log('INVALID INPUT');
}else if (t5character.toUpperCase() === 'A' 
|| t5character.toUpperCase() === 'E'
|| t5character.toUpperCase() === 'I'
|| t5character.toUpperCase() === 'O'
|| t5character.toUpperCase() === 'U'){
    console.log(`"${t5character}" is a vowel`);
}else{
    console.log(`"${t5character}" is not a  vowel`);
}
    
function firstLast(string){
    return string.charAt(0) + string.charAt(string.length-1) ;
    }
    console.log(firstLast('   '));






