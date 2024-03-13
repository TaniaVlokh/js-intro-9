// Task - 1
console.log('=============== Task 1 ================');

function countPos(arr) {
    let countPos = 0;
    for (const num of arr) {
        if (num > 0) countPos++;
    }
    return countPos;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]))        // -> 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))   // -> 4
console.log(countPos([0, -1, -2, -3]))               // -> 0

// Task - 2 
console.log('=============== Task 2 ================');

function countA(str) {
    let countA = 0;
    for (const i of str) {
        if (i.toLowerCase().includes('a')) countA++;
    }
    return countA;
}

console.log(countA("TechGlobal is a QA bootcamp"))        // -> 4
console.log(countA("QA stands for Quality Assurance"))    // -> 5
console.log(countA("Cypress"))                            //   -> 0


// Task - 3  
console.log('=============== Task 3 ================');

function countVowels(str) {
    countV = 0;
    let vowel = 'AEOUIaeoui';
    for (const i of str) {
        if (vowel.includes(i)) countV++;
    }
    return countV;
}
console.log(countVowels("Hello"))              // -> 2
console.log(countVowels("Hello World"))       // -> 3
console.log(countVowels("JavaScript is fun"))  // -> 5
console.log(countVowels(""))                   // -> 0


// Task - 4 
console.log('=============== Task 4 ================');

function countConsonants(str) {
    let countCon = 0;

    for (const i of str) {
        if (!countVowels(i)) countCon++
    }
    return countCon;
}

console.log(countConsonants("Hello"))                  // -> 3
console.log(countConsonants("Hello World"))           // -> 8
console.log(countConsonants("JavaScript is fun"))     // -> 12
console.log(countConsonants(""))                      // -> 0

// Task - 5 
console.log('=============== Task 5 ================');

function countWords(str) {
    str = str.trim();
    let newArr = str.split(' ');
    return newArr.length;
}


console.log(countWords("     Javascript is fun       "))         // -> 3
console.log(countWords("Cypress is an UI automation tool.    "))  // -> 6 
console.log(countWords("1 2 3 4"))                                 // ->4


// Task - 6   n! = n × (n-1) × (n-2) × ... × 2 × 1
console.log('=============== Task 6 ================');

function factorial(num) {
    let result = 1;
    for (let i = 0; i < num; i++) {
        result *= num - i;
    }
    return result;
}
console.log(factorial(5))  // -> 120
console.log(factorial(4))  // -> 24
console.log(factorial(0))  //  -> 1
console.log(factorial(1))  // -> 1

// Task - 7
console.log('=============== Task 7 ================');


// function isPalindrome(str){
//     //let isPalindr = true;
//     str = str.toLowerCase();
//     for(let i = 0; i < str.length/2; i++){
//        if(str[i] === str[str.length - (1 + i)]) return isPalindr;
//     }
//     return !isPalindrom;
// }

function isPalindrome(str) {
    str = str.toLowerCase();
    newStr = str.split('').reverse().join('');
    //console.log(newStr);
    return str === newStr;
}

console.log(isPalindrome("Hello"))            // -> false
console.log(isPalindrome("Kayak"))            // -> true 
console.log(isPalindrome("civic"))            // -> true
console.log(isPalindrome("abba"))             // -> true
console.log(isPalindrome("ab  a"))            // -> false
console.log(isPalindrome("123454321"))        // -> true
console.log(isPalindrome("A"))                // -> true
console.log(isPalindrome(""))                 // -> true



// Task - 8
console.log('=============== Task 8 ================');

function countMultipleWords(arr) {
    let countMulWord = 0
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].trim();
        if (word.includes(' ')) countMulWord++;
    }
    return countMulWord;
}

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]))         // -> 1
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]))         // -> 0
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]))   // -> 4
console.log(countMultipleWords([]))                                                  // -> 0


// Task - 9
console.log('=============== Task 9 ================');

function count3OrLess(str) {
    let countLength3OrLess = 0;
    const arr = str.split(' ');
    for (const i of arr) {
        if (i.length <= 3) countLength3OrLess++;
    }
    return countLength3OrLess;
}
console.log(count3OrLess("Hello"))                  // -> 0
console.log(count3OrLess("Hi John"))                // -> 1
console.log(count3OrLess("JavaScript is fun"))      // -> 2
console.log(count3OrLess("My name is John Doe"))    // -> 3
console.log(count3OrLess(""))                       // -> 0


// Task - 10
console.log('=============== Task 10 ================');
function isPrime(num) {
    let countDiv = 0;
    if (num <= 1) return false;
    else {
        for (let i = 3; i < num; i++) {
            if (num % i === 0) countDiv++;
        }
    }
    return countDiv === 0;
}

console.log(isPrime(5))     // -> true
console.log(isPrime(2))     // -> true
console.log(isPrime(29))    // -> true
console.log(isPrime(-5))    // -> false
console.log(isPrime(0))     // -> false
console.log(isPrime(1))     // -> false


// Task -11

function add(arr1, arr2) {

    let longest = arr1.length > arr2.length ? arr1 : arr2;
    let shortest = arr1.length < arr2.length ? arr1 : arr2;

    for (let i = shortest.length; i < longest.length; i++) {
        shortest.push(0);
    }

    const arr3 = [];
    for (let i = 0; i < longest.length; i++) {
        let sum = longest[i] + shortest[i];
        arr3.push(sum);
    }
    return arr3
}


console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));


//Task - 12

function removeExtraSpaces(str) {
    str = str.trim();
    let spliterStr = str.split(' ');
    let arr = [];

    for (let i = 0; i < spliterStr.length; i++) {
        if (spliterStr[i] !== '') arr.push(spliterStr[i])
    }
    arr = arr.join().replaceAll(',', ' ');
    return arr;

}

console.log(removeExtraSpaces("Hello"))                            //  -> "Hello" 
console.log(removeExtraSpaces("      Hello    World     "))        //  -> "Hello World" 
console.log(removeExtraSpaces("     JavaScript is          fun"))  //  -> "JavaScript is fun”
console.log(removeExtraSpaces(""))                                //  -> "" 



// Task - 13
function findClosestTo10(array) {
    const arrayWithout10 = [];
    for(const el of array){
        if(el !== 10) arrayWithout10.push(el);
    }
    

    let smallestDif = Math.abs(10 - arrayWithout10[0]);
    let closestEl = arrayWithout10[0];

    for (let i = 1; i < arrayWithout10.length; i++) {
        if(smallestDif > Math.abs(10 - arrayWithout10[i])) {
            smallestDif = Math.abs(10 - arrayWithout10[i]);
            closestEl = arrayWithout10[i];
        }
    }
    return closestEl;
}
console.log(findClosestTo10([10,-13, 5, 70, 15, 57]));
console.log(findClosestTo10([ 10,-13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));


// Task - 14   

function isEmailValid(str){
    let symbol = '!#$%&\'()*+`/;:<>=?,[]\^_';
    

    let firstPart = str.slice(0, str.indexOf('@'));
    let thirdPart = str.slice(str.indexOf('@')+1, str.lastIndexOf('.'));
    let forthPart = str.slice(str.lastIndexOf('.'));

    // console.log(firstPart);
    // console.log(thirdPart)
    // console.log(forthPart)

    if(str.includes(' ') || str.indexOf('@') !==  str.lastIndexOf('@') 
    || symbol.includes(str))  return false;
     else if(firstPart.length <=2) return false;
        else if(thirdPart.length <=2) return false;
        else if(forthPart.length <=3) return false;
        
       else return true;
} 



console.log(isEmailValid(""))                     // -> false
console.log(isEmailValid("@gmail.com"))           // -> false
console.log(isEmailValid("johndoe@yahoo"))        // -> false
console.log(isEmailValid("johndoe@.com"))         // -> false
console.log(isEmailValid("a@outlook.com"))        // -> false
console.log(isEmailValid("johndoe@a.com"))        // -> false
console.log(isEmailValid("johndoe@@gmail.com"))   // -> false
console.log(isEmailValid("johndoe@gmail.com"))    // -> true

// Task -15

function isPasswordValid(str){
    
   let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
   let upperCase = lowerCase.toUpperCase();
   let specialChar = '!#$%&\'()*+`/;:<>=?,[]\^_';
   let digit = '1234567890'

   let countLowerCase = 0;
   let countUpperCase = 0;
   let countspecialChar = 0;
   let countDigit = 0;

   for(const el of str){
    if(lowerCase.includes(el)) countLowerCase++
   }

   for(const el of str){
    if(upperCase.includes(el)) countUpperCase++
   }
 
   for(const el of str){
    if(specialChar.includes(el)) countspecialChar++
   }
 
   for(const el of str){
    if(digit.includes(el)) countDigit++
   }


   return str.length >=6 && str.length <= 16 
   && countLowerCase > 0
   && countUpperCase > 0
   && countspecialChar > 0
   && countDigit > 0
   && !str.includes(' ')
}
console.log(isPasswordValid("Test1234#")  )           //-> true
console.log(isPasswordValid(""))                      //-> false
console.log(isPasswordValid("abcd"))                  //-> false
console.log(isPasswordValid("abcd1234") )             //-> false
console.log(isPasswordValid("Abcd1234")  )            //-> false
console.log(isPasswordValid("Chicago12345US!#$%"))    //-> false
console.log(isPasswordValid("Abcd1234$")   )          //-> true
console.log(isPasswordValid("Chicago123$")  )         //-> true


