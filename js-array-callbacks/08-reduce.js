
const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];

// Count even numbers = 4

const  evenCounter = numbers.reduce((count, number) => number % 2 === 0 ? count + 1 : count, 0);
console.log(evenCounter);

const  sumEl = numbers.reduce((sum, number) => sum + number, 0);

console.log(sumEl);


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

console.log(fruits.reduce((count, x) => x.toLowerCase().includes('apple') ? count + 1 : count,0));
console.log(fruits.reduce((countI, x) => x.toLowerCase().includes('i') ? countI + 1 : countI,0));
console.log(fruits.reduce((countI, x) => x.toLowerCase().includes('i') ? countI + 1 : countI,0));
console.log(fruits.reduce((countE, x) => x.endsWith('e') ? countE + 1 : countE,0));


