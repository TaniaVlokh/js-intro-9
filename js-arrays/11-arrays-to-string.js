const object = [ 'Mouse', 'Computer', 'Remote'];

const numbers = [ 10, 15, 20, 25];

let stringObjext = object.toString();
let stringNumbers = numbers.toString();

let joinObjext = object.join(" | ");
let joinNumbers = numbers.join(' === ');

console.log(object);        // [ 'Mouse', 'Computer', 'Remote' ]
console.log(stringObjext);  // Mouse,Computer,Remote

console.log(numbers);       // [ 10, 15, 20, 25 ]
console.log(stringNumbers); // 10,15,20,25

console.log(joinObjext);    // Mouse | Computer | Remote
console.log(joinNumbers);   // 10 === 15 === 20 === 25
