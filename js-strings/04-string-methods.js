// Search in string

let company = 'TechGlobal';

// startWith() method



company.startsWith('T'); //True
company.startsWith('t'); //False

company.startsWith('Tech'); //True
company.startsWith('TechGlobal'); //True
company.startsWith(''); //True

/*
TASK: use to check if the string astarts with another substring
RETURN: it returns a boolean (true & false)
ARGUMENTS: takes one or two arguments (substring, substring and position)
CHANGE ORG VALUE: no
NON-STATIC
*/

//endWith() method

company.endsWith('Global'); //true
company.endsWith('l'); //true
company.endsWith('al'); //true

/*
TASK: use to check if the string ends with another substring
RETURN: it returns a boolean (true & false)
ARGUMENTS: takes one or two arguments (substring, substring and position)
CHANGE ORG VALUE: no
NON-STATIC
*/

console.log(company); // 'TechGlobal'
console.log(company.startsWith('Global', 4)); // 'TechGlobal'

/*
TASK: use to check if the string includes  another substring
RETURN: it returns a boolean (true & false)
ARGUMENTS: takes one or two arguments (substring, substring and position)
CHANGE ORG VALUE: no
NON-STATIC
*/

company.includes('hGl'); // true
company.includes('GL'); // false

