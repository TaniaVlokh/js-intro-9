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
    if (age < 16) return `AGE IS NOT ALLOWED`;
    else if (age >= 16 && age <= 120) return `AGE IS ALLOWED`;
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
console.log(`======================= Task 6 ==========================`)

const noA = (array) => array.map((str) => str.toLowerCase().startsWith('a') ? '###' : str)


console.log(noA(["javascript", "hello", "123", "xyz"]))   //->  ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"]))   //->  ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))    //-> ["###", "###", "###", "###", "###"]


// Task - 7

console.log(`======================= Task 7 ==========================`)



function no3and5(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0 && array[i] % 5 === 0) {
            newArr.push(101);
        } else if (array[i] % 5 === 0) {
            newArr.push(99);
        } else if (array[i] % 3 === 0) {
            newArr.push(100);
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

console.log(no3and5([7, 4, 11, 23, 17]))             // -> [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6]))                   // -> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15]))       // -> [99, 11, 100, 13, 14, 101]



// Task - 8

console.log(`======================= Task 8 ==========================`)

function isPrime(num) {
    let count = 0;
    if (num < 2) return '';

    for (let i = 2; i < num; i++) {
        if (num % i === 0) count++;
    }
    if (count === 0) return num;
}

const countPrimes = (array) => array.filter(isPrime).length; 

console.log(countPrimes([-10, -3, 0, 1]))         // -> 0
console.log(countPrimes([7, 4, 11, 23, 17]))       // -> 4
console.log(countPrimes([41, 53, 19, 47, 67]))     // -> 5


// Task - 9 
console.log(`======================= Task 9 ==========================`)

function removeDuplicates(arr){
    const uniqueValues = [];
    for(const el of arr){
        if(!uniqueValues.includes(el)){
            uniqueValues.push(el)
        }
    }
    return uniqueValues;
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))            //-> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3]))                             //-> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1]))                         //-> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]))   //-> ["abc", "xyz",'123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"]))                   //-> ["1", "2", "3"]


// Task - 10 
console.log(`======================= Task 10 ==========================`)

function  isDateFormatValid(str){

    let countSlash = 0;
for(const el of str){
    if(el === '/')countSlash++;
}
if(countSlash !== 2 || str.length < 11) return false;

const arr = str.split('/');

if(arr[0].length !== 2 && arr[0] < 0 && arr[0] > 32) return false;
else if(arr[1].length !== 2 && arr[1] < 0 && arr[1] > 13) return false;
else if(arr[2].length !== 4 && arr[2] < 0 && arr[2] > 2025) return false;
else return true;
}
console.log(isDateFormatValid(""))                 // -> false
console.log(isDateFormatValid("15/30/2020"))       // -> false
console.log(isDateFormatValid("10-30-2020 "))      // -> false
console.log(isDateFormatValid("10.30.2020"))       // -> false
console.log(isDateFormatValid("5/30/2020"))        // -> false
console.log(isDateFormatValid("05/30/2020 "))      // -> true
console.log(isDateFormatValid("10/2/2020"))        // -> false
console.log(isDateFormatValid("10/02/2020 "))      // -> true




// Task - 11 
console.log(`======================= Task 11 ==========================`)

function secondMax(array) {
    let max = 0;
    let secondMax = 0;
    if(array.length === 1) return secondMax = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] < max && array[i] > secondMax) {
            secondMax = array[i];
        }
    }
    return `${secondMax} - secondMin number`;
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))   // -> 7
console.log(secondMax([3, 4, 5, 6]))               // -> 5
console.log(secondMax([10])) 



// Task - 12 
console.log(`======================= Task 12 ==========================`)

function secondMin(array) {
    let min = Infinity;
    let secondMin = Infinity;
    if(array.length === 1) return secondMax = array[0];
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
    return `${secondMin} - secondMin number`;
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]))   // -> 7
console.log(secondMin([3, 4, 5, 6]))               // -> 4
console.log(secondMin([10]))                       // -> 10



// Task - 13 
console.log(`======================= Task 13 ==========================`)

function mostRepeated(array) {
    if (array.length === 1) {
        return array[0];
    }

    let maxCount = 0;
    let repeatedMost;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) count++;
        }
        if (count > maxCount) {
            maxCount = count;
            repeatedMost = array[i];
        }
    }
    return repeatedMost;
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]))                                // -> 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]))    // -> "pen"
console.log(mostRepeated([10]))                                                       // -> 10
console.log(mostRepeated(["TechGlobal"]))                                             // -> "TechGlobal"
