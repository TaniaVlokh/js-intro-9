
const names = [ 'alex', 'Adam', 'Jane', 'John'];
console.log(names.sort()); // [ 'Adam', 'Jane', 'John', 'alex' ]
console.log(names); // [ 'Adam', 'Jane', 'John', 'alex' ]

const number = [ 5, 2, 22, 1, 100 ];

number.sort();
console.log(number.sort());  // [ 1, 100, 2, 22, 5 ]

const nums  = [ 5, 2, 22, 1, 100 ];

nums.sort((a, b) => a - b);
console.log(nums);          // [ 1, 2, 5, 22, 100 ] ascending order

nums.sort((a, b) => b - a);
console.log(nums);          // [ 100, 22, 5, 2, 1 ] descending order