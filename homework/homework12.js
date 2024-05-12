// Task - 1
const makeNegative = (num) => {
  return num < 0 ? num : num - (num * 2);
}
console.log(makeNegative(10))      //-> -10
console.log(makeNegative( -7))     //-> -7
console.log(makeNegative( 0))      // -> 0
console.log(makeNegative( 0.45))      

// Task - 2 
const isSumEvenOrOdd = (n1, n2, n3) => {
  let sum = n1 + n2 + n3;
  return sum % 2 === 0 ? 'even' : 'odd'
}
console.log(isSumEvenOrOdd(0, 1, 4) )      // -> "odd"
console.log(isSumEvenOrOdd(0, -1, -5))     // -> "even"
console.log(isSumEvenOrOdd(0, 0, 0) )      // -> "even"
console.log(isSumEvenOrOdd(7, 1, 9) )      // -> "odd"
console.log(isSumEvenOrOdd(1, 1, 1) )      // -> "odd"

// Task - 3
const decimal2 = arr => arr.map((num) => num.toFixed(2)) 
console.log(decimal2( [94.356, 8.9752] ))                      // -> [ 94.36, 8.98 ]
console.log(decimal2( [76.62, 128.4, 84] ))                    // -> [ 76.62, 128.4, 84 ]
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] ))        // -> [ 20987, 3.53, 12.35, 32.90 ]
console.log(decimal2( [ ] ) )                                  // -> [  ]

// Task - 4
const myPow = (x, n) => {
  let result = 1;
  for(let i = 0; i < n; i++){
    result *= x;
  }
  return result;
}
console.log(myPow(3, 3) )  //-> 27
console.log(myPow(10, 1))  //-> 10
console.log(myPow(100, 0)) // -> 1
console.log(myPow(1, 1) )  //-> 1
console.log(myPow(4, 2) )  // -> 16
console.log(myPow(0, 0) )  // -> 1
console.log(myPow(5, 3) )  // -> 125

// Task - 5
const findLongestWord = str => {
  const strArr = str.split(' ');
  let theLongestWLength = strArr[0].length;
  let theLongestW = strArr[0];
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i].length > theLongestWLength) {
      theLongestWLength = strArr[i].length 
      theLongestW = strArr[i];
    }
  }
  return theLongestW;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // -> "jumped"
console.log(findLongestWord("This is a sample string for testing"))         // ->"testing" 
console.log(findLongestWord("One two ten"))                                 // -> "One"
console.log(findLongestWord(""))                                            // -> ""
console.log(findLongestWord("      "))                                      // -> ""