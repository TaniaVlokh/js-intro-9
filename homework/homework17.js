// Task - 1
const findMedian = (arr1, arr2) => {

  const arr = [...arr1, ...arr2].sort()

  return arr.length % 2 === 1 ? arr[Math.floor(arr.length / 2)] : ((arr[Math.floor((arr.length - 1) / 2)] + arr[Math.floor(arr.length / 2 )]) / 2)
   

} 

console.log(findMedian([1, 3], [2])  )  // -> 2
console.log(findMedian([1, 2], [3, 4])) // -> 2.5
console.log(findMedian([4], [3])     )  // -> 3.5
console.log(findMedian([4], [])      )  // -> 4
console.log(findMedian([0], [0,1])   )  // -> 0

// Task - 2
const calculateFactorial = num => {
  if(num === 0 || num === 1) return 1
  let result = 1
  
  for(let i = 2; i <= num; i++){
    result *= i
  }
  return result
}
console.log(calculateFactorial(0)) //-> 1
console.log(calculateFactorial(1)) //-> 1
console.log(calculateFactorial(5)) //-> 120
console.log(calculateFactorial(6)) //-> 720
console.log(calculateFactorial(10))// -> 3628800
console.log(calculateFactorial(4)) //-> 24

// Task - 3

const calculateGCD = (num1, num2) => {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

    if (num1 === 0) return num2;
    if (num2 === 0) return num1;

    while (num2 !== 0) {
      let temp = num2;
      num2 = num1 % num2;
      num1 = temp;
  }
  return num1;
}
console.log(calculateGCD(8, 12))    //4
console.log(calculateGCD(17, 5))    //1
console.log(calculateGCD(48, 18))   //6
console.log(calculateGCD(0, 5))     //5
console.log(calculateGCD(21, 14))   //7
console.log(calculateGCD(60, 48))   //12

// Task - 4
