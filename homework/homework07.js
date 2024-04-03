
// Task - 1

const hasUpperCase = (str) => str !== str.toLowerCase();
console.log(hasUpperCase("javascript"))    // -> false
console.log(hasUpperCase("John"))          // -> true
console.log(hasUpperCase("$125.0"))        // -> false


//Task - 2

function noDigit(str) {
   let newStr = ''
   for (let i = 0; i < str.length; i++) {
      if (!(str[i] >= 0 && str[i] <= 9))
         newStr += str[i]
   }
   return newStr;
}

console.log(noDigit(""))                         // -> ""
console.log(noDigit("Javascript"))               // -> "Javascript"
console.log(noDigit("123Hello"))                 // -> "Hello"
console.log(noDigit("123Hello World149"))        // -> "Hello World”
console.log(noDigit("123Tech456Global149"))      // -> "TechGlobal"


// Task - 3

function noVowel1(str) {
   let newStr = '';
   for (let i = 0; i < str.length; i++) {
      if (!'aieuo'.includes(str[i].toLowerCase()))
         newStr += str[i];
   }
   return newStr;
}

const noVowel = str => str.split('').filter(el => !'aieuo'.includes(el.toLowerCase()) ? el : '').join('')

console.log(noVowel("TechGlobal"))   // -> "TchGlbl"
console.log(noVowel("AEOxyz"))       // -> "xyz"
console.log(noVowel("Javascript"))   // -> "Jvscrpt"
console.log(noVowel(""))             // -> ""
console.log(noVowel("125$"))         // -> "125$"


// Task - 4

const no13 = arr => arr.map(num => (num === 13) ? 0 : num)

console.log(no13([1, 2, 3, 4]))             // -> [1, 2, 3 ,4] 
console.log(no13([13, 2, 3]))               // -> [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13]))    // -> [0, 0, 0, 0, 0]
console.log(no13([]))                       // -> []


// Task - 5

function middleInt(n1, n2, n3) {

   let min = Math.min(n1, n2, n3);
   let max = Math.max(n1, n2, n3);
   let arr = [n1, n2, n3].sort((a, b) => a - b);

   for (const num of arr) {
      if (num !== min && num !== max)
         return num;
      else return arr.at(1)
   }
}

console.log(middleInt(1, 2, 2))             // -> 2
console.log(middleInt(5, 5, 8))             // -> 5
console.log(middleInt(5, 3, 5))             // -> 5
console.log(middleInt(1, 1, 1))             // -> 1
console.log(middleInt(-1, 25, 10))          // -> 10


// Task - 6

function sumOfDigits(str) {
   let arr = [];
   for (const el of str) {
      if (el >= 1 || el >= 9) arr.push(Number(el));
   }
   //  let sum = 0;
   //  for(let i = 0; i < arr.length; i++){
   //  sum += arr[i];
   // }

   return arr.reduce((acc, cur) => acc + cur, 0)
}

console.log(sumOfDigits("Javascript"))         // -> 0
console.log(sumOfDigits("John’s age is 29"))   // -> 11
console.log(sumOfDigits("$125.0"))             // -> 8
console.log(sumOfDigits(""))                   // -> 0


// Task - 7 

function isFactorial(num) {
   if (num === 0 || num === 1) return 1;
   let product = 1;
   for (let i = 1; i <= num; i++) {
      product *= i;
   }
   return product;
}

const arrFactorial = arr => arr.map(el => isFactorial(el));

console.log(arrFactorial([1, 2, 3, 4]))  // ->  [1, 2, 6, 24]
console.log(arrFactorial([0, 5]))        // -> [1,120]
console.log(arrFactorial([5, 0, 6]))    // -> [120, 1, 720]
console.log(arrFactorial([]))            // -> []


// Task - 8

function categorizeCharacters(str) {
   let arrLetter = '';
   let arrNumber = '';
   let arrSymbol = '';

   for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'z') arrLetter += str[i];
      else if (str[i] >= 0 && str[i] <= 9) arrNumber += str[i];
      else arrSymbol += str[i];
   }
   return [arrLetter, arrNumber, arrSymbol];
}

console.log(categorizeCharacters("1234"))             // -> [ '' , '1234', '' ] 
console.log(categorizeCharacters("abc123$#%"))        // -> [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%"))        // -> [ 'abc', '123', '$%%' ]

