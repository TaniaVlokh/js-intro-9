// Indexes of substring or characters

// indexOf

let company = 'TechGlobal';

company.charAt(4);             // 'G'

company.indexOf('G');           // 4
company.indexOf('l');           //  5
company.indexOf('Global');      // 4


company.lastIndexOf('l');        // 9
company.lastIndexOf('Tech');     // 0
company.lastIndexOf('Global');   // 4

company.indexOf('X');            // -1
company.lastIndexOf('x');        // -1

/*
indexOf()
TASK: used to get the first occurence (index) of the matching substring
RETURN: it returns the found index of the substring  as a number
         it returns -1 if subsrting was not found withing the original string
ARGUMENTS: it takes a substring to searcg within the original string
NON-STATIC
*/

let day = 'Sunday';

// check if the day includes 'Sun'
console.log(day.includes('Sun'));       // true
console.log(day.indexOf('Sun') !== -1); // true

// search() method

let sentence = 'I go back to back';
console.log(sentence.indexOf('back'));       // 5
console.log(sentence.lastIndexOf('back'));   // 13
console.log(sentence.search('back'));        // 5
