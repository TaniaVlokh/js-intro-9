const {CharacterHelper} = require('../utils/CharacterHelper.js');

// Task - 1 

let num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(num);

if(num <= 50){
    console.log(num, 'is in the 1st half');
}else{
    console.log(num, 'is in the 2nd half');
}


if(num <= 25) console.log(num, 'is in the 1st quarter');
else if(num <= 50)  console.log(num, 'is in the 2nd quarter');
else if(num <= 75)  console.log(num, 'is in the 3rd quarter');
else console.log(num, 'is in the 4th quarter');


//Task - 2 

let num2 = Math.floor(Math.random()*(100-1+1)+1);
    let num3 = Math.floor(Math.random()*(100-1+1)+1);
    let num4 = Math.floor(Math.random()*(100-1+1)+1);
    console.log(`The random numbers is = ` + num2 + ' ' + num3 + ' ' + num4);
    if (num2 % 2 === 0 && num3 % 2 === 0 && num4 % 2 === 0) console.log('true');
    else console.log ('false');


// Task - 3

let singelChar = '    ';

if(CharacterHelper.isDigit(singelChar)) console.log(`"${singelChar}" is a digit`);
if(CharacterHelper.isLetter(singelChar)) console.log(`"${singelChar}" is a letter`);
if(CharacterHelper.isSpace(singelChar)) console.log(`"${singelChar}" is a whitespase`);
else console.log(`"${singelChar}" is a special character`);

// Task - 4

function hasBlue(str) {
    const lowerCaseStr = str.toLowerCase();
    
    return lowerCaseStr.includes('blue');
}

console.log(hasBlue("Hello World"));          
console.log(hasBlue("Javabluescript"));       
console.log(hasBlue("Tech Blue Global"));    
console.log(hasBlue("1234"));                 
console.log(hasBlue("ABLUEC"));  

// Task - 5
function startT(string) {
    const lowerCaseStr = string.toLowerCase();
    return lowerCaseStr[0].includes('t');
}
console.log(startT('Hello World'));
console.log(startT('typescript'));
console.log(startT('TechGlobal'));
console.log(startT('1234'));
console.log(startT('ABC'));

function abc(){
return;}
console.log( 1 === true);