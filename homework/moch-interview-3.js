// /* Swap First and Last Characters
// Write a function named replaceFirstLast() which takes a string argument and returns a new 
// string with the first and last characters replaced.
// NOTE: If the length is less than 2, return an empty string.
// NOTE: Ignore extra spaces before and after the string. */

const replaceFirstLast = str => {
  str = str.trim()
  
  if(str.length < 2) return  ''
  
  let first = str[0];
  let mid = str.slice(1, -1)
  let last = str.at(-1)
  const newStr = last + mid + first
  return newStr
}
console.log(replaceFirstLast(""))                //-> ""
console.log(replaceFirstLast("Hello"))           //-> "oellH"
console.log(replaceFirstLast("Tech Global"))     //-> "lech GlobaT"
console.log(replaceFirstLast("A"))               //-> ""
console.log(replaceFirstLast(" A "))              //-> ""


/*
Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
*/

const swapFirstLastWord = str => {

 str = str.trim();
 let arrWords = str.split(/\s+/)
 if(arrWords.length < 2) return ''

 let first = arrWords[0];
arrWords[0] = arrWords[arrWords.length-1] 
arrWords[arrWords.length-1] = first
return arrWords.join(' ')
}

console.log(swapFirstLastWord("Hello World"))        //-> "World Hello"
console.log(swapFirstLastWord("I like JavaScript"))  // -> "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar"))    // -> "bar bar foo foo"
console.log(swapFirstLastWord(""))                   //  -> ""
console.log(swapFirstLastWord(" "))                  // -> ""
console.log(swapFirstLastWord("Hello"))              // -> ""
console.log(swapFirstLastWord("Hello "))             // -> ""



/*Factorial
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
*/

const factorial = num => {
  let result = 1;
  for (let i = 2; i <= num; i++){
    result *= i
  }
  return result;
}
console.log(factorial(5)) //-> 120
console.log(factorial(4)) //-> 24
console.log(factorial(0)) //-> 1
console.log(factorial(1)) //-> 1


function factorial(num){
  if(num === 1 || num === 0) return 1;
  return num * factorial(num - 1)
}
console.log(factorial(5)) //-> 120
console.log(factorial(4)) //-> 24
console.log(factorial(0)) //-> 1
console.log(factorial(1)) //-> 1

/*Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.
Examples:
*/


const removeExtraSpaces = str => str.trim().split(' ').filter(x => x).join(" ")
console.log(removeExtraSpaces("Hello"))              //-> "Hello"
console.log(removeExtraSpaces(" Hello World "))      //-> "Hello World"
console.log(removeExtraSpaces(" JavaScript is fun")) //-> "JavaScript is fun”
console.log(removeExtraSpaces(""))                   //-> "JavaScript is fun”


/*First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same.
Examples:
*/

const firstDuplicate = (arr) => {

  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return arr[i]
    }
    return -1
  }

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])      )  //-> 3
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])         )  //-> 5
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ])           )  //-> -1
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])) //-> 'abc'
console.log(firstDuplicate([ 1, 2, 3])                    )  //-> -1
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))  //-> -1 


/* Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types 
of the elements must be same.
Examples:
*/

const  getDuplicates = (arr) => {
  let arrOfDplicates = []

  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !arrOfDplicates.includes(arr[i])) arrOfDplicates.push(arr[i])
  }
return arrOfDplicates
} 
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))               //-> [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]) )                               //-> [ ]
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])) //-> [ 'foo', 'a' ]
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))                 //-> [ ] 


/*Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string.
Examples:
*/

const reverseStringWords = str => {
  str = str.split(' ')
  let revArr = []
  for(const word of str){
    revArr.push(word.split('').reverse().join(''))
  }
  return revArr.join(' ')

}

console.log(reverseStringWords("Hello World"))       //-> "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")) //-> "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello") )            //-> "olleH"
console.log(reverseStringWords(""))                  //-> ""
console.log(reverseStringWords(" "))                //-> ""

/*  Add Two Arrays 

Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples: */

const add = (arr1, arr2) => {
if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
return arr1.map((el, i) => el + (arr2[i] || 0) )
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))                  // -> [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])) // -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))                // -> [0, 0, 0, 0]


/*  Fizz Buzz
Write a function named fizzBuzz() which takes a number argument and returns an array 
consisting of numbers starting from 1 to given number. However, it will return "Fizz" for the 
numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers 
divided both by 3 and 5.*/

const fizzBuzz = num => {
  let arr = []

  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr.push('FizzBuzz')
    }else if (i % 3 === 0){
      arr.push('Fizz')
    } else if (i % 5 === 0){
      arr.push('Buzz')
    }else{
      arr.push(i)
    }
  }
  return arr
}

console.log(fizzBuzz(3))  //-> [ 1, 2, 'Fizz' ]
console.log(fizzBuzz(5))  //-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz(10)) //-> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
console.log(fizzBuzz(15)) //-> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz'. 13, 14, 'FizzBuzz' ]
console.log(fizzBuzz(2))  //-> [ 1, 2 ]

/*Palindrome
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
*/

const isPalindrome = str => {

  let revStr = str.split('').reverse().join("").toLowerCase()
  return str.toLowerCase() === revStr
}
console.log(isPalindrome("Hello")    ) //-> false
console.log(isPalindrome("Kayak")    ) //-> true
console.log(isPalindrome("civic")    ) //-> true
console.log(isPalindrome("abba")     ) //-> true
console.log(isPalindrome("ab a")     ) //-> false
console.log(isPalindrome("123454321")) //-> true
console.log(isPalindrome("A"))        // -> true
console.log(isPalindrome(""))        // -> true


/*Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed.
Examples:*/
const removeDuplicates = arr => {
  let newArr = []

  for(const ele of arr){
    if(!newArr.includes(ele)) newArr.push(ele)
  }
return newArr
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))         //-> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])  )                        //-> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1]) )                     //-> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])) // -> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"]))                //-> ["1", "2", "3"]


/*Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if 
the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:*/

const isPrime = num =>{

if(num <= 1) return false
if(num === 2) return true

for(let i = 2; i < num; i++){
  if(num % i === 0) return false
}
return true
}
console.log(isPrime(5))  //-> true
console.log(isPrime(2))  //-> true
console.log(isPrime(29)) //-> true
console.log(isPrime(-5)) //-> false
console.log(isPrime(0))  //-> false
console.log(isPrime(1))  //-> false

/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument and return 
the array with every number replaced with their factorials.
Examples:*/
const Fact = num =>{
  let fac = 1
  for(let i = 2; i <= num; i++){
    fac*=i
  }
  return fac
}
console.log(Fact(4)) //24
console.log(Fact(3))   

const arrFactorial = arr =>  arr.map(el => Fact(el))

console.log(arrFactorial([1, 2, 3 ,4]))  // -> [1, 2, 6, 24]
console.log(arrFactorial([0, 5]))        // -> [1,120]
console.log(arrFactorial([5 , 0, 6]))    // -> [120, 1, 720]
console.log(arrFactorial([]))            //-> []


/*Find Biggest Number
Write a function named findBiggestNumber() which takes a string argument and returns the 
biggest number appears in the string.
Examples: */

const findBiggestNumber = str => {
let num = str.match(/\d+/g)

if(!num) return 0
let max = Math.max(...num.map(Number))
return max
}
console.log(findBiggestNumber("abc$"))             //-> 0
console.log(findBiggestNumber("a1b4c 6#"))         //-> 6
console.log(findBiggestNumber("ab110c045d"))      //-> 110
console.log(findBiggestNumber("525"))             //-> 525
console.log(findBiggestNumber("3 for 10 dollars"))//-> 10


/*Find Sum Numbers
Write a function named findSumNumbers() which takes a string argument and returns sum of 
the all numbers appears in the string.
Examples: */

const findSumNumbers = str => {
let num = str.match(/\d+/g)
if(!num) return 0
let sum = num.map(Number).reduce((total, ele)=> total + ele,0)
return sum
}
console.log(findSumNumbers("abc$"))             // -> 0
console.log(findSumNumbers("a1b4c 6#"))         //-> 11
console.log(findSumNumbers("ab110c045d"))       //-> 155
console.log(findSumNumbers("525"))              //-> 525
console.log(findSumNumbers("3 for 10 dollars")) //-> 13


/*Is Power Of 3
Write a function named isPowerOf3() which takes a number argument and returns true if given 
number is equal to 3 power of the X. Otherwise, return false.
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
Examples:*/
const isPowerOf3 = num => {
for(let i = num; i > 0; i /= 3){
  if(i === 1) return true
}
return false
}

console.log(isPowerOf3(1) )  //-> true
console.log(isPowerOf3(2) )  //-> false
console.log(isPowerOf3(3) )  //-> true
console.log(isPowerOf3(27))  //-> true
console.log(isPowerOf3(100)) //-> false
console.log(isPowerOf3(81))  //-> true
console.log(isPowerOf3(9) )  //-> true


/*Fibonacci Series 1
Write a function named fibonacciSeries1() which takes a number n argument and returns the 
n series of Fibonacci numbers as an array. 
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples: */
const fibonacciSeries1 = num => {

  let arr = []
  let num1 = 0
  let num2 = 1
  for(let i = 0; i < num; i++){
     let temp = num1
     arr.push(temp)
     num1 = num2;
     num2 = temp + num1
  }
  return arr;

}
console.log(fibonacciSeries1(3)) //-> [0, 1, 1]
console.log(fibonacciSeries1(5)) //-> [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)) //-> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)) //-> [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)) //-> [0]
console.log(fibonacciSeries1(2)) //-> [0, 1]

/*Fibonacci Series 2
Write a function named fibonacciSeries2() which takes a number n argument and returns the 
nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples: */
const fibonacciSeries2 = n =>{
    let arr = []

  let num1= 0
  let num2= 1

  for(let i = 0; i < n; i++){
    let temp = num1
    arr.push(num1);
    num1 = num2
    num2 = num1 + temp
  }
  return arr.at(-1)
}

console.log(fibonacciSeries2(2)) //-> 1
console.log(fibonacciSeries2(4)) //-> 2
console.log(fibonacciSeries2(8)) //-> 13
console.log(fibonacciSeries2(9)) //-> 21
console.log(fibonacciSeries2(1)) //-> 0



/*Find Uniques
Write a function named findUniques() which takes two array of number arguments and returns 
the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.
NOTE: If one of the array is empty, then return unique values from the other array.
Examples: */


const findUniques = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2].filter(el => 
    !(arr1.includes(el) && arr2.includes(el))))]
}

console.log(findUniques([], []))                     //   -> []
console.log(findUniques([], [1, 2, 3, 2]))           // -> [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])) //-> [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9]))          // -> []
console.log(findUniques([-1, -2], [1, 2]))           //-> [-1, -2, 1, 2]


/*Reverse Number
Write a function named reverseNumber() which takes a number argument and returns it back 
reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples: */

const reverseNumber = num => {
let reversed = 0

while(num > 0){
  let lastD = num % 10
  reversed = reversed * 10 +lastD
  num = Math.floor(num / 10)
}
return reversed
}


console.log(reverseNumber(371)) //-> 173
console.log(reverseNumber(123)) //-> 321
console.log(reverseNumber(12))  //-> 21
console.log(reverseNumber(0) )  //-> 0
console.log(reverseNumber(111)) //-> 111


/*Write a function named isArmstrong() which takes a number argument and returns true if 
given number is armstrong, return false otherwise.
NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the 
power of the number of digits. In other words, an n-digit number is an Armstrong number if the 
sum of its digits, each raised to the nth power, is equal to the number itself. • Let's take an example to understand it better. Consider the number 153.
• To determine if 153 is an armstrong number, we need to check if the sum of its 
digits, each raised to the power of the number of digits, equals the original 
number.
• 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
• In this case, the sum of the individual digits raised to the power of 3 (the number 
of digits in 153) is equal to the original number, which means 153 is an armstrong 
number.
Examples: */
const isArmstrong = num => {
let lastD = num % 10
let arrNum = num.toString().split('')
let result = 0;

for(let i = 0; i < arrNum.length; i++){
  let pow = Math.pow(Number(arrNum[i]), lastD)
  result += pow
}
return num === result
}
console.log(isArmstrong(153)) //-> true
console.log(isArmstrong(123)) //-> false
console.log(isArmstrong(1634))//-> true
console.log(isArmstrong(153)) //-> true
console.log(isArmstrong(1111))//-> false


/*Is Anagram
Write a function named isAnagram() which takes two string arguments and returns true if the 
given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or 
phrase. In the context of strings, checking if two strings are anagrams of each other means 
verifying if they contain the same characters in the same quantities, regardless of the order of 
those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples: */

const isAnagram = (str1, str2) => {
  let mod1 = str1.toLowerCase().replaceAll(' ','').split('').sort().join('')
  let mod2 = str2.toLowerCase().replaceAll(' ','').split('').sort().join('')


  return mod1 === mod2 && str1 !== str2
}

console.log(isAnagram("Apple", "Peach"))           //-> false
console.log(isAnagram("listen", "silent"))         //-> true
console.log(isAnagram("astronomer", "moon starer"))//-> true
console.log(isAnagram("CINEMA", "iceman"))         //-> true
console.log(isAnagram("123", "1234"))              //-> false





/*Count Palindrome
Write a function named countPalindrome() which takes a string and returns the number 
of palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example: 
level, radar, deed, refer.
Examples:*/

const palind = word => {
  word = word.trim().toLowerCase();

  let revWord = word.split('').reverse().join('')

  return word === revWord
}

const countPalindrome = str => {
  if(str.length === 0) return 0
  str = str.toLowerCase();
  return str.split(' ').filter(palind).length
}
console.log(countPalindrome("Mom and Dad"))                          //-> 2
console.log(countPalindrome("See you at noon"))                      //-> 1
console.log(countPalindrome("Kayak races attracts racecar drivers")) //-> 2
console.log(countPalindrome(""))                                     //-> 0
console.log(countPalindrome("No palindrome here"))                   //-> 0

/*Can Form String
Write a function named canFormString() which takes two string arguments and returns true if 
the second string can be formed by rearranging the characters of first string. Return false 
otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples: */

const canFormString = (str1, str2) => {
  str1 = str1.toLowerCase().split('')
  str2 = str2.toLowerCase().replaceAll(' ', '').split('')

  for(let i = 0; i < str2.length; i++){
    if(str1.includes(str2[i])) str1.splice(str1.indexOf(str2[i]), 1)
      else return false
}
return true
}
console.log(canFormString("Hello", "Hi"))                    //  -> false
console.log(canFormString("programming", "gaming"))          // -> true
console.log(canFormString("halogen", "hello"))               //-> false
console.log(canFormString("CONVERSATION", "voices rant on")) //-> true
console.log(canFormString("12", "123"))                      // -> false



/*
Count Occurrence
Write a function named countOccurrence() which takes two string arguments and returns how 
many times that the first string can form the second string.
NOTE: This method is case-insensitive and ignore the white spaces.
 */

const countOccurrence = (str1, str2) => {
let arrOccurance = []

for(const char of str2){
  arrOccurance.push(str1.split('').filter(letter => letter.toLowerCase() === char.toLowerCase()).length)
}
return arrOccurance.sort((a,b) => a - b)[0]
}
console.log(countOccurrence("Javascript", "Java")    ) //-> 1
console.log(countOccurrence("Hello", "World")        ) //-> 0
console.log(countOccurrence("Can I can a can", "anc")) //-> 3
console.log(countOccurrence("Hello", "l")            ) //-> 2
console.log(countOccurrence("IT conversations", "IT")) //-> 2







