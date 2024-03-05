const numbers = [3, 4, 7, 3, 2, 2, 7];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    if(i % 2 === 0) sum += numbers[i];
}
console.log(sum);

let product = 1;
for(let i = 0; i < numbers.length; i++){
    if(i % 2 !== 0) product *= numbers[i];
}
console.log(product);

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];
const arr3 = [];

for(let i = 0; i < arr1.length; i++){
    arr3.push(arr1[i] *arr2[i]);
}
console.log(arr3);


const array1 = [ 5, 8,];
const array2 = [ 9, 3, 5, 1, 0 ];
const array3 = [];

let min = Math.min(array1.length, array2.length);
console.log(min)

for(let i = 0; i < min; i++){
    array3.push(array1[i] * array2[i]);
}
console.log(array3)
array3.concat()


// Task 
const a1 = [ 10, 3, 7];
const a2 = [3, 5, 1]
const a3 = [0, 9, 1, 3]
const a4 = [...a1, ...a2, ...a3];
 a4.sort((a, b) => b - a);

 console.log(a4);

 // Task

 const nums = [ 0, 2, 6 , 8];

//  for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0){
//         console.log(nums[i]);
//     break;
//  }
//  }

let maxOdd;

for(let i = 1; i < nums.length; i++){
if(nums[i] % 2 !== 0){
    (nums[i] > nums[i-1])
        maxOdd = nums[i];
    }
}

console.log(maxOdd)
