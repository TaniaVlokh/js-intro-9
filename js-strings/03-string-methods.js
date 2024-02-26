// Extracting characters from the string

let company = 'TechGlobal';


// property access to extract characters
let firstChar = company[0]; // T
let lastChar = company[company.length-1]; 

console.log(lastChar)
let secondChar = company[1];
let secondLastChar = company[company.length-2];

console.log(firstChar); // 'T'
console.log(lastChar);  // 'l'

console.log(secondChar); // 'e'
console.log(secondLastChar);  // 'a'

// Tricky part with property access 
console.log(company[-1]); // undefined
console.log(company[10]); // undefined


//charAt() method
let fChar = company.charAt(0);
console.log(fChar); // 'T'

//Tricky part with charAt() method 
console.log(company.charAt(-1)); // ''
console.log(company.charAt(10)); // '' empty space - white space

/*
TASK : use to get a character at specified index
RETURN: returns a singel character as a string 
NOTE: if the index is not valid, it returns empty string
ARGUMENTS: It takes a number (index) as an argument
STATIC or NON-STATIC : non - statis
*/

let word = 'today';
//let firChar = word.charAt(0);
//let laChar = word[word.length-1];

// Two methods to concatinate first and last letters
console.log(word[0] + word[word.length-1]);
console.log(word.charAt(0) + word.charAt(word.length-1));


// at() method

let city = 'Chicago';
console.log(city.at(0)); // C
console.log(city.at(1)); // h
console.log(city.at(city.length-1)); // o
console.log(city.at(city.length-2)); // g


//Tricy part with at() method          --> C h i c a g o
console.log(city.at(-1)); // 'o'         -7  ... -3 -2 -1
console.log(city.at(-2)); // 'g'
console.log(city.at(-7)); //'C'
console.log(city.at(-8)); // undefined

// Advantage of using at() -> retrieving last character is easier compared to [] and charAt()
let obj = 'Computer';

// get the last 2 characters  -> 'er'

console.log(obj[obj.length - 2] + obj[obj.length - 1]);
console.log(obj.charAt(obj.length - 2) + obj. charAt(obj.length - 1)); // 'er'
console.log(obj.at(-2) + obj.at(-1));

// change this
/*
TASK : use to get a character at specified index
RETURN: returns a singel character as a string 
NOTE: if the index is not valid, it returns empty string
ARGUMENTS: It takes a number (index) as an argument
STATIC or NON-STATIC : non - statis
*/

//charCodeAt
let country = 'Italy';
console.log(country[0]);// 'I'
console.log(country.at(0));// 'I'
console.log(country.charAt(0)); // 'I'
console.log(country.chatCodeAt(0)); //73
console.log(country.chatCodeAt(100)); // NaN
console.log(country.chatCodeAt(-1)); // NaN

/*
TASK : use to retrieve/get a character at ISCII represantation 
RETURN: returns a character at ISCII represantation as a number
NOTE: if the index is not valid, it returns NaN
ARGUMENTS: It takes a number (index) as an argument
STATIC or NON-STATIC : non - statis
*/
