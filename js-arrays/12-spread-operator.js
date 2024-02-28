const names = ['Alex', 'James', 'John'];

console.log(...names);

const numbers = [10, 25, 35, -5];

//greatest = 35
// smallest = -5
 
console.log(Math.max(...numbers));  // 35
console.log(Math.min(...numbers));  // -5


const nums = [ 5, 6, 7, 8, 9, 10, 11 ];
const nums1 = [ 1, 2, 3, 4, ...nums, 12, 13, 14, 15 ];


