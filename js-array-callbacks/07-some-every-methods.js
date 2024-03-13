
const numbers = [-5, 0, 5, 10, 23, -10];

console.log(numbers.some(num => num % 5 === 0));
console.log(numbers.every(num => num > 0));
console.log(numbers.some(num => num < 0));
