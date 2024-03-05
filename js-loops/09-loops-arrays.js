const numbers = [3, 4, 7, 3, 2, 2, 7];

// Task -1
let sum = 0;
for(const num of numbers){
    sum +=num;
}

console.log('Sum is =', sum);
console.log('Average is =', sum/numbers.length);

// Task - 2 ;
let product = 1;
for(let i = 3; i < numbers.length; i++){
    product *= numbers[i];
}
console.log('Product of all the number after 3 is =', product);


// Task - 3

const nums = [1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];


const newArr = [...nums.slice(0,3), ...nums.slice(-3)];
console.log(newArr)

let sum3 = 0;
for(const num of newArr){
sum3 += num;
}
console.log('Sum is =', sum3);

/* Best solution
sum3 = 0;
for(let i = 0; i <= 2; i++){
    sum += nums[i] + nums[nums.length - (i + 1)];
             or
    sum += nums[i] + nums.at(-i-1);
}
*/

