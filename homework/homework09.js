// Task - 1
function fizzBuzz1(num){
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    else if(num % 3 === 0) return 'Fizz'
    else if(num % 5 === 0) return 'Buzz'
    else return num
}
console.log(fizzBuzz1(0)  )        //-> "FizzBuzz"
console.log(fizzBuzz1(1) )        //-> 1
console.log(fizzBuzz1(3) )        //-> "Fizz"
console.log(fizzBuzz1(5) )        //-> "Buzz"
console.log(fizzBuzz1(30))        // -> "FizzBuzz"
console.log(fizzBuzz1(10))        // -> "Buzz"
console.log(fizzBuzz1(15))        // -> "FizzBuzz"
console.log(fizzBuzz1(-15))      // -> "FizzBuzz

// Task - 2
function fizzBuzz2(num){
const arr = []
for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0)  arr.push('FizzBuzz') 
    else if(i % 3 === 0)  arr.push('Fizz') 
    else if(i % 5 === 0)  arr.push('Buzz')
    else arr.push(i);
}
return arr;
}

console.log(fizzBuzz2(3))    //-> [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5))    //-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10))   // -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ] 
console.log(fizzBuzz2(15))   // -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz', 13, 14,  'FizzBuzz' ] 
console.log(fizzBuzz2(2))    //-> [ 1, 2 ]

// Task - 3
function findSumNumbers (str){
    let strArr = str.split('')
    let newArr = []
    for(let i = 0; i < strArr.length; i++){
        if(!(strArr[i] >= '0' && strArr[i] < '9')){
            newArr.push(' ')
        } 
        else  newArr.push(strArr[i])
    }
     return newArr.join('').split(' ').filter(el => el).reduce((sum, num) => sum + parseInt(num), 0)
    }

console.log(findSumNumbers("abc$") )      //-> 0
console.log(findSumNumbers("a1b4c  6#") )      //-> 11
console.log(findSumNumbers("ab110c045d") )      //-> 155
console.log(findSumNumbers("525") )      //-> 525
console.log(findSumNumbers("3 for 10 dollars"))     //-> 13

// Task - 4 

function findBiggestNumber(str){
    let strArr = str.split('')
let newArr = []
for(let i = 0; i < strArr.length; i++){
    if(!(strArr[i] >= '0' && strArr[i] < '9')){
        newArr.push(' ')
    } 
    else  newArr.push(strArr[i])
}
 return newArr.join('').split(' ').filter(el => el).sort((a, b) => b - a).at(0)
}

console.log(findBiggestNumber("abc$"))             // -> 0
console.log(findBiggestNumber("a1b4c  6#"))        // -> 6
console.log(findBiggestNumber("ab110c045d"))       // -> 110
console.log(findBiggestNumber("525"))              // -> 525
console.log(findBiggestNumber("3 for 10 dollars"))  // -> 10

// Task - 5 - failed

function countOccurrencesOfCharacters(str){
const arr = str.split('');
if(arr.length === '0') return '';
const res = []
let count = 1;
let letter;

for(let i = 1; i <= arr.length; i++){
if(arr[i] === arr[i-1]){
    count++;
    letter = arr[i];
} else if(arr[i] !== arr[i-1]){
    count=1;
    letter = arr[i-1];
}
res.push(count);
res.push(letter);
}
return res.join('')
}
console.log(countOccurrencesOfCharacters("")     )    // -> ""
console.log(countOccurrencesOfCharacters("abc")  )    //  -> "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca"))   // -> "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa"))    //   -> "2a2A1a”
console.log(countOccurrencesOfCharacters("www" ) )    // -> "3w"

// Task - 6
function fibonacciSeries1(number){
    const arr = [];
    let num = 0;
    let num1 = 1;
    for(let i = 0; i < number; i++){
        arr.push(num);
        let temp = num+num1
     num = num1;
     num1 = temp;
    }
    return arr;
}


console.log(fibonacciSeries1(3))  //-> [0, 1, 1]
console.log(fibonacciSeries1(5))  //-> [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7))  //-> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8))  //-> [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1))  //-> [0]
console.log(fibonacciSeries1(2))  //-> [0, 1]

// Task - 7
function fibonacciSeries2(number){
    const arr = [];
    let num = 0;
    let num1 = 1;
    for(let i = 1; i <= number; i++){
        arr.push(num);
        let temp = num+num1
     num = num1;
     num1 = temp;
    }
    return arr.at(-1);
}
console.log(fibonacciSeries2(2))    // -> 1
console.log(fibonacciSeries2(4))    // -> 2
console.log(fibonacciSeries2(8))    // -> 13
console.log(fibonacciSeries2(9))    // -> 21
console.log(fibonacciSeries2(1))    // -> 0

// Task - 8
function findUniques(arr1, arr2){
    let  newArr = [];

    for(let i = 0; i < arr2; i++){
        if(!arr1[i].includes(arr2) && !arr1[i].includes(newArr)){
            newArr.concat(arr1[i])
        } 
    }
return newArr
}

console.log(findUniques([], []))                       // -> []
console.log(findUniques([], [1, 2, 3, 2]) )             // -> [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]))   // -> [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9]))            // -> []
console.log(findUniques([-1, -2], [1, 2]))             // -> [-1, -2, 1, 2]