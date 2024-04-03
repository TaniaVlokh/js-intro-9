// Task - 1

function hasLowerCase(str) {
return str === str.toLowerCase();
}
console.log(hasLowerCase(""))                // -> false
console.log(hasLowerCase("JAVASCRIPT"))      // -> false
console.log(hasLowerCase("hello"))           // -> true
console.log(hasLowerCase("125$"))            // -> false
console.log(hasLowerCase("   a   "))         // -> true


// Task - 2
const  noZero = (arr) => {
    const newArr = [];
    for(const el of arr){
        if(el !== 0) 
        newArr.push(el)
    }
    return newArr;
}

console.log(noZero([1]))              // -> [1]
console.log(noZero( [1, 1, 10] ))     // -> [1, 1, 10] 
console.log(noZero([0, 1, 10]))       // -> [1, 10]
console.log(noZero([0, 0, 0]))        // -> []
console.log(noZero([10, 100, 0]))      // -> [10, 100]

// Task 3
function numberAndSquare(array){
    let length = array.length;
    let newArr = [];
    for(let i = 0; i < length; i++ ){
        newArr.push([]);
    }

    for(let i = 0; i < newArr.length; i++){
        newArr[i].push(array[i]);
        newArr[i].push(array[i] * array[i]);
    }
    return newArr;
}
const numberAndSquare = (arr) => arr.map(x => [x, x*x])

console.log(numberAndSquare([1, 2, 3]))                  // -> [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6]))                 // -> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4]))                     // -> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0]))                  // -> [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10]))                // -> [[0, 0], [1, 1], [-10, 100]

 // Task - 4
 function containsValue(arr, str){
       return arr.includes(str)
 }
console.log(containsValue(["abc", "foo", "javascript"], "hello"))                 // -> false
console.log(containsValue(["abc", "def", "123"], "Abc"))                           // -> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"))    // -> true

// Task - 5

function reverseSentence(str){
    let arr = str.split(' ');
    if(arr.length === 1) return 'There is not enough words';

   str = arr.reverse().join(' ')
   let first = str[0].toUpperCase()
   let mid = str.slice(1).toLowerCase();
   return first +  mid;
}
console.log(reverseSentence("Hello"))                // -> "There is not enough words!"
console.log(reverseSentence("Javascript is fun"))    // -> "Fun is javascript"
console.log(reverseSentence("This is a sentence"))   // -> "Sentence a is this"

// Task - 6
function  removeStringSpecialsDigits(str){
let newArr = [];
str = str.split('')
for(let i = 0; i < str.length; i++){
    if(str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z' || str[i] === ' ' ) newArr.push(str[i]);
}
return newArr.join('');

}
console.log(removeStringSpecialsDigits("123Javascript #$%is fun"))     // -> "Javascript is fun" 
console.log(removeStringSpecialsDigits("Cypress"))                     // -> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%"))            // -> "Automation"

// Task - 7

function removeArraySpecialsDigits (arr){
    const newArr = ['','',''];

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j].toLowerCase()  >= 'a' && arr[i][j].toLowerCase()  <= 'z')
              newArr[i]  += arr[i][j]  
        }  
    }
  
    return newArr;
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]))   // -> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]))         // -> ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]))        // -> ["Automation", "tool"]

// Task - 8
function getCommons(arr1, arr2){
    const commmons = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]) commmons.push(arr1[i])
    }
    return commmons;
} 
console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )         )  // -> []
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ))  // -> ["Javascript"]
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )        )  // -> ["C#"]

/*
// Task - 9

function noXInVariables(arr){
const newArr = ['', '',''];
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
    if(arr[i][j] !== ('x') && arr[i][j] !== ('X')) newArr[i] += arr[i][j]
}
}
return newArr;
}

console.log(noXInVariables(["abc", 123, "#$%"])   )       // -> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])   )       // -> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])     )       // -> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))      // -> ["yyy", "ABC"
*/

const noXInVariables = arr => arr.toString().split('').filter(el => {
    if(el.toLowerCase() !== 'x') return el;
}).join('').split(',')

console.log(noXInVariables(["abc", 123, "#$%"])   )       // -> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])   )       // -> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])     )       // -> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))      // -> ["yyy", "ABC"