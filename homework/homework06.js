// Task - 1

const noSpace = (str) => str.split(/\s+/).join('');
console.log(noSpace(""))                  //->  ""
console.log(noSpace("Javascript"))        //->  "Javascript"
console.log(noSpace("    Hello   "))      //-> "Hello"
console.log(noSpace(" Hello        World   "))   //-> "HelloWorld”
console.log(noSpace("Tech Global"))       //-> "TechGlobal"

// Task - 2

const replaceFirstLast = (str) => {
    str = str.trim();
    if (str.length < 2) return "";
    let lastLetter = str.at(-1);
    str = str.replace(lastLetter, str[0])
    return lastLetter + (str.slice(1))
}
console.log(replaceFirstLast(""))               // ->  ""
console.log(replaceFirstLast("Hello"))          // ->  "oellH"
console.log(replaceFirstLast("Tech Global"))    // -> "lech GlobaT"
console.log(replaceFirstLast("A"))              // -> ""
console.log(replaceFirstLast("    A      "))    // -> "


// Task - 3

const hasVowel = (str) => str.toLowerCase().split('').filter(x => 'aiueo'.includes(x)).join('') ? true : false;


console.log(hasVowel(""))             // -> false
console.log(hasVowel("Javascript"))   // -> true
console.log(hasVowel("Tech Global"))  // -> true
console.log(hasVowel("1234"))         // -> false
console.log(hasVowel("ABC"))          // -> true


// Task - 4


const checkAge = (year) => {
    let currentYear = 2023;
    let age = currentYear - year;
      if(age < 16) return `AGE IS NOT ALLOWED`;
      else if(age >= 16 && age <= 120) return `AGE IS ALLOWED`;
      else return `AGE IS NOT VALID`;    
}


console.log(checkAge(2015))         // -> "AGE IS NOT ALLOWED"
console.log(checkAge(2007))         // -> "AGE IS ALLOWED"
console.log(checkAge(2050))         // -> "AGE IS NOT VALID"
console.log(checkAge(1920))         // -> "AGE IS ALLOWED"
console.log(checkAge(1800))         // -> "AGE IS NOT VALID"



// Task - 5 
console.log(`======================= Task 5 ==========================`)

const averageOfEdges = (n1, n2, n3) => {
let min = Math.min(n1, n2, n3);
let max = Math.max(n1, n2, n3);

return average = (min + max) / 2;
}
console.log(averageOfEdges(0, 0, 0))      //-> 0
console.log(averageOfEdges(0, 0, 6))      //-> 3
console.log(averageOfEdges(-2, -2, 10))   //-> 4
console.log(averageOfEdges(-3, 15, -3))   //-> 6
console.log(averageOfEdges(10, 13, 20))   //-> 15


// Task - 6
console.log(`======================= Task 5 ==========================`)

const noA = (array) => {
    const newArr = [];
    array.filter((str) => {str.toLowerCase().startsWith('a') ? newArr.push('###') : newArr.push(str)})
      return newArr;
    }
console.log(noA(["javascript", "hello", "123", "xyz"]))   //->  ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"]))   //->  ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))    //-> ["###", "###", "###", "###", "###"]


// Task - 7

console.log(`======================= Task 7 ==========================`)
/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
*/

function no3and5(array){
    let newArr = [];
     for(let i = 0; i < array.length; i++){
        if(array[i] % 3 === 0 && array[i] % 5 === 0 ){
            newArr.push(101);
        }else if(array[i] % 5 === 0){
            newArr.push(99);
        }else if(array[i] % 3 === 0){
            newArr.push(100);
        }else{
            newArr.push(array[i]);
        }
     }
     return newArr;
}

console.log(no3and5([7, 4, 11, 23, 17]))             // -> [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6]))                   // -> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15]))       // -> [99, 11, 100, 13, 14, 101]



// Task - 11 
console.log(`======================= Task 11 ==========================`)

function secondMax(array) {
    let min = Infinity;
    let secondMin = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > min && array[i] < secondMin) {
            secondMin = array[i];
        }
    }
    return `${min} - min number , ${secondMin} - secondMin number`;



}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))   // -> 7
console.log(secondMax([3, 4, 5, 6]))               // -> 5
console.log(secondMax([10]))                       // -> 10

