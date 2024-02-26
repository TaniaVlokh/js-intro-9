//
/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 		                -> "APPLE"
"Java is not a scripting programming language"  	-> "JavaScript"
"I don't like books" 			                    -> "I like books"
*/

// Task - 1

let sentence1 = "I like apples and oranges";
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

console.log(sentence1.slice(7, 12).toUpperCase());

console.log(sentence2.slice(0,2) + sentence2[14].toUpperCase() + sentence2.slice(15, 20));
console.log(sentence3.replace(' don\'t ', ' '));


// Task - 2

let s1 = '';
console.log(s1.length);
console.log(s1.at(0));
console.log(s1.at(s1.length-1));

console.log(s1.includes('a') || s1.includes('e') ||s1.includes('i') ||s1.includes('o') ||s1.includes('u') ||
s1.includes('A') || s1.includes('e') || s1.includes('i') || s1.includes('o') || s1.includes('U'));


// Task - 3 

let s2 = 'James';

console.log(s2.at((Math.floor(s2.length/2))));

// Task - 4
let s3 = 'mama';
console.log((s3[s3.length/2-1]) + s3[s3.length/2]);
console.log(s3.slice(s3.length/2-1), s3.length/2 + 1);


// Task - 5

/*
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 
*/

let s5 = 'happy';

let first2 = s5.slice(0, 2);
let last2 = s5.slice(-2);
let rest = s5.slice(2, -2);

console.log('The first 2 characters are = ',first2);
console.log('The last 2 characters are = ',last2);
console.log('The other characters are = ', rest);


let sent = 'I like apple';
const arr = sent.split(' ');
console.log(arr.length);

// or

console.log((sent.length - sent.replaceAll(' ', '').length) + 1);

// Task - 10
let s10 = 'I do like JavaScript';
let indexOfFirstSpace = s10.indexOf(' ');
let fword = s10.slice(0, indexOfFirstSpace);
let indexOfLastSpace = s10.lastIndexOf(' ') + 1;
let lastWord = s10.slice(indexOfLastSpace);
let rest10 = s10.slice(indexOfFirstSpace, indexOfLastSpace);
console.log(lastWord + rest10 + fword);







